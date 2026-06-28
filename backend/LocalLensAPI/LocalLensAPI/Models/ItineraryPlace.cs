namespace LocalLensAPI.Models;

public class ItineraryPlace
{
    public int Id { get; set; }

    public int ItineraryId { get; set; }

    public Itinerary? Itinerary { get; set; }

    public int SpotId { get; set; }

    public Spot? Spot { get; set; }

    public int DayNumber { get; set; }

    public int SequenceNo { get; set; }
}