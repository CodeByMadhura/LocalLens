namespace LocalLensAPI.Models;

public class Itinerary
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public string Destination { get; set; } = "";

    public int Duration { get; set; }

    public string TravelType { get; set; } = "";

    public string Interests { get; set; } = "";

    public decimal Budget { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public List<ItineraryPlace> ItineraryPlaces { get; set; } = new();
}