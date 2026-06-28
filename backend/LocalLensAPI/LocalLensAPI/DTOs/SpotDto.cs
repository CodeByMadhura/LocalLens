namespace LocalLensAPI.DTOs;

public class SpotDto
{
    public string Name { get; set; } = "";
    public string Destination { get; set; } = "";
    public string Category { get; set; } = "";
    public string Description { get; set; } = "";
    public decimal EntryFee { get; set; }
    public decimal EstimatedCost { get; set; }
    public int VisitDuration { get; set; }
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string ImageUrl { get; set; } = "";
    public int AddedByUserId { get; set; }
}