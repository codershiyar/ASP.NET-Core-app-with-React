public class Voorstelling
{
    public int ID { get; set; }
    public string? Titel { get; set; }
    public string? Omschrijving { get; set; }
    public decimal? Prijs { get; set; }

    public DatumEnTijdRange? VoorstellingDatumEnTijd { get; set; }
    public Zaal? VoorstellingZaal { get; set; }
    public List<Artiest>? Artiesten { get; set; }

    public string GetPopulariteit()
    {
        return "Hoog";
    }
}