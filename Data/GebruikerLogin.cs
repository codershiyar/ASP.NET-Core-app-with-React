using System.ComponentModel.DataAnnotations;


public class GebruikerLogin
{
    [Required(ErrorMessage = "Email is required")]
    public string? Email { get; init; }

    [Required(ErrorMessage = "Password is required")]
    public string? Password { get; init; }
}