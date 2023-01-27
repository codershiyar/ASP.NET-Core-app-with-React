using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;


public class DatabaseContext: IdentityDbContext
{ 
    public DatabaseContext (DbContextOptions<DatabaseContext> options)
        : base(options){ }
    
    // protected override void OnConfiguring(DbContextOptionsBuilder b) {
    //          b.UseSqlite("Data Source=Database.db");
    //         // b.UseSqlServer("Data Source=ServerNaam;Initial Catalog=DatabaseOpdracht;Integrated Security=True"); 
    // }
    public DbSet<Artiest> Artiesten {get;set;}
    public DbSet<ArtiestType> ArtiestTypes {get;set;}
    public DbSet<DatumEnTijdRange> DatumEnTijdRanges {get;set;}
    public DbSet<Gebruiker> Gebruikers {get;set;}
    public DbSet<Rang> Rangen {get;set;}
    public DbSet<Reservering> Reserveringen {get;set;}
    // public DbSet<Role> Roles {get;set;}
    public DbSet<Ruimte> Ruimtes {get;set;}
    public DbSet<Stoel> Stoelen {get;set;}
    public DbSet<Ticket> Tickets {get;set;}
    public DbSet<Voorstelling> Voorstellingen {get;set;}
    public DbSet<Zaal> Zalen {get;set;}
} 
        

