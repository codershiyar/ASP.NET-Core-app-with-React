
using Microsoft.AspNetCore.Identity;

public class Gebruiker  : IdentityUser
{ 
    public string? Naam {get;set;}
    public string? Omschrijving {get;set;}
    public DateOnly? Geboortedatum{get;set;}
    public byte[]? Imagedata {get; set;}


}
