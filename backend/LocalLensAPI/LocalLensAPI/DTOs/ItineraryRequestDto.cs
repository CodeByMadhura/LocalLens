namespace LocalLensAPI.DTOs;

public class ItineraryRequestDto
{
    public int UserId { get; set; }
    public string Destination { get; set; } = "";
    public int Duration { get; set; }
    public string TravelType { get; set; } = "";
    public string Interests { get; set; } = "";
    public decimal Budget { get; set; }
}