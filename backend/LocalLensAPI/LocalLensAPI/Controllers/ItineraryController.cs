using LocalLensAPI.Data;
using LocalLensAPI.DTOs;
using LocalLensAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace LocalLensAPI.Controllers;

[ApiController]
[Route("itinerary")]
public class ItineraryController : ControllerBase
{
    private readonly AppDbContext _context;

    public ItineraryController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("generate")]
    public IActionResult GenerateItinerary(ItineraryRequestDto request)
    {
        var interests = request.Interests
            .ToLower()
            .Split(',')
            .Select(i => i.Trim())
            .ToList();

        var approvedSpots = _context.Spots
            .Where(s =>
                s.Status == "Approved" &&
                s.Destination.ToLower() == request.Destination.ToLower() &&
                s.EstimatedCost <= request.Budget)
            .ToList();

        var matchedSpots = approvedSpots
            .OrderByDescending(s => interests.Contains(s.Category.ToLower()) ? 1 : 0)
            .ThenBy(s => s.EstimatedCost)
            .Take(request.Duration * 3)
            .ToList();

        if (matchedSpots.Count == 0)
        {
            return NotFound(new
            {
                message = "No approved spots found for this destination, interests, and budget"
            });
        }

        var itinerary = new Itinerary
        {
            UserId = request.UserId,
            Destination = request.Destination,
            Duration = request.Duration,
            TravelType = request.TravelType,
            Interests = request.Interests,
            Budget = request.Budget
        };

        _context.Itineraries.Add(itinerary);
        _context.SaveChanges();

        var itineraryPlaces = new List<ItineraryPlace>();

        int dayNumber = 1;
        int sequenceNo = 1;
        int spotsPerDay = 3;

        foreach (var spot in matchedSpots)
        {
            itineraryPlaces.Add(new ItineraryPlace
            {
                ItineraryId = itinerary.Id,
                SpotId = spot.Id,
                DayNumber = dayNumber,
                SequenceNo = sequenceNo
            });

            sequenceNo++;

            if (sequenceNo > spotsPerDay)
            {
                sequenceNo = 1;
                dayNumber++;
            }
        }

        _context.ItineraryPlaces.AddRange(itineraryPlaces);
        _context.SaveChanges();

        var dayWisePlan = itineraryPlaces
            .Join(
                _context.Spots,
                ip => ip.SpotId,
                spot => spot.Id,
                (ip, spot) => new
                {
                    ip.DayNumber,
                    ip.SequenceNo,
                    SpotId = spot.Id,
                    spot.Name,
                    spot.Destination,
                    spot.Category,
                    spot.Description,
                    spot.EntryFee,
                    spot.EstimatedCost,
                    spot.VisitDuration,
                    spot.ImageUrl
                })
            .GroupBy(x => x.DayNumber)
            .Select(g => new
            {
                Day = g.Key,
                Places = g.OrderBy(x => x.SequenceNo).ToList()
            })
            .OrderBy(x => x.Day)
            .ToList();

        var totalEstimatedCost = matchedSpots.Sum(s => s.EstimatedCost + s.EntryFee);

        return Ok(new
        {
            message = "Personalized itinerary generated successfully",
            itineraryId = itinerary.Id,
            destination = request.Destination,
            duration = request.Duration,
            travelType = request.TravelType,
            interests = request.Interests,
            givenBudget = request.Budget,
            totalEstimatedCost,
            dayWisePlan
        });
    }
}