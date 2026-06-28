using LocalLensAPI.Data;
using LocalLensAPI.DTOs;
using LocalLensAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace LocalLensAPI.Controllers;

[ApiController]
[Route("spots")]
public class SpotsController : ControllerBase
{
    private readonly AppDbContext _context;

    public SpotsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("add")]
    public IActionResult AddSpot(SpotDto dto)
    {
        var spot = new Spot
        {
            Name = dto.Name,
            Destination = dto.Destination,
            Category = dto.Category,
            Description = dto.Description,
            EntryFee = dto.EntryFee,
            EstimatedCost = dto.EstimatedCost,
            VisitDuration = dto.VisitDuration,
            Latitude = dto.Latitude,
            Longitude = dto.Longitude,
            ImageUrl = dto.ImageUrl,
            AddedByUserId = dto.AddedByUserId,
            Status = "Pending"
        };

        _context.Spots.Add(spot);
        _context.SaveChanges();

        return Ok(new
        {
            message = "Spot added successfully and sent for admin approval",
            spot
        });
    }

    [HttpGet("pending")]
    public IActionResult GetPendingSpots()
    {
        var spots = _context.Spots
            .Where(s => s.Status == "Pending")
            .ToList();

        return Ok(spots);
    }

    [HttpGet("approved")]
    public IActionResult GetApprovedSpots()
    {
        var spots = _context.Spots
            .Where(s => s.Status == "Approved")
            .ToList();

        return Ok(spots);
    }

    [HttpPut("approve/{id}")]
    public IActionResult ApproveSpot(int id)
    {
        var spot = _context.Spots.Find(id);

        if (spot == null)
        {
            return NotFound(new { message = "Spot not found" });
        }

        spot.Status = "Approved";
        _context.SaveChanges();

        return Ok(new
        {
            message = "Spot approved successfully",
            spot
        });
    }

    [HttpPut("reject/{id}")]
    public IActionResult RejectSpot(int id)
    {
        var spot = _context.Spots.Find(id);

        if (spot == null)
        {
            return NotFound(new { message = "Spot not found" });
        }

        spot.Status = "Rejected";
        _context.SaveChanges();

        return Ok(new
        {
            message = "Spot rejected successfully",
            spot
        });
    }
}