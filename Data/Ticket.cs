 public class Ticket
    {
                public int ID {get;set;}
                public string Naam {get;set;}
                public decimal Kosten {get;set;}
                public DateTime TijdVanAankoop {get;set;}
                public Stoel TicketStoel {get;set;}
                public Voorstelling voorstelling {get; set;}
    }
