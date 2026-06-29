using LocalLensAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LocalLensAPI.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users => Set<User>();

    public DbSet<Spot> Spots => Set<Spot>();

    public DbSet<Itinerary> Itineraries => Set<Itinerary>();

    public DbSet<ItineraryPlace> ItineraryPlaces => Set<ItineraryPlace>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        
        modelBuilder.Entity<ItineraryPlace>()
            .HasOne(ip => ip.Itinerary)
            .WithMany(i => i.ItineraryPlaces)
            .HasForeignKey(ip => ip.ItineraryId);

    
        modelBuilder.Entity<ItineraryPlace>()
            .HasOne(ip => ip.Spot)
            .WithMany()
            .HasForeignKey(ip => ip.SpotId);

     
        modelBuilder.Entity<Itinerary>()
            .Property(i => i.Budget)
            .HasPrecision(18, 2);

        modelBuilder.Entity<Spot>()
            .Property(s => s.EntryFee)
            .HasPrecision(18, 2);

        modelBuilder.Entity<Spot>()
            .Property(s => s.EstimatedCost)
            .HasPrecision(18, 2);
    }
}