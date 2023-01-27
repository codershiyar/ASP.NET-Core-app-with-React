public class Reservering
{
    public int ID {get;set;}
    public decimal Kosten {get;set;}
    public DateTime TijdVanAankoop {get;set;}
    public Gebruiker GeplaatstDoor {get;set;}
    public DatumEnTijdRange ReserveringDatumEnTijd {get;set;}
    public Ruimte GereserveerdRuimte {get;set;}

}