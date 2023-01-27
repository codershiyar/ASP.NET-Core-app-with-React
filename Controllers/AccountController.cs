using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Net.Mail;
using IoFile = System.IO.File;
 
 
[Route("api/")]
[ApiController]
public class AccountController : ControllerBase
{
    public class RegistrerenGebruiker : Gebruiker
    {
        public string? Password { get; init; }
        public string? RoleName { get; init; }
    }
    private DatabaseContext Database;
    private readonly UserManager<Gebruiker> _userManager;
    private RoleManager<IdentityRole> _roleManager;
    public AccountController(UserManager<Gebruiker> userManager, RoleManager<IdentityRole> roleManager,DatabaseContext dbContext)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        Database = dbContext;
    }
// Read a text file line by line.  
static string[] GekraakteWachtwoorden = System.IO.File.ReadAllLines(Directory.GetCurrentDirectory()+ "/lijst_van_gekraakte_wachtwoorden.txt");  
static string[] GekraakteWachtwoordenMin7Karakater = GekraakteWachtwoorden.Where(GekraakteWachtwoord => GekraakteWachtwoord.Length>6).ToArray();

    // https://localhost:7117/api/registreren
    [HttpPost]
    [Route("Registreren")]
    public async Task<ActionResult> Registreren([FromBody] RegistrerenGebruiker Gebruiker)
    {   


        return  await InputChecker(Gebruiker, false);
        // var GebruikerRole = new IdentityRole();
        // GebruikerRole.Name = "Gebruiker";
        // GebruikerRole.NormalizedName = "Gebruiker";
        //  await _roleManager.CreateAsync(GebruikerRole);
        //  var BeheerderRole = new IdentityRole();
        //  BeheerderRole.Name = "Beheerder";
        //  BeheerderRole.NormalizedName = "Beheerder";
        //  await _roleManager.CreateAsync(BeheerderRole);

        //  var MedewerkerRole = new IdentityRole();
        //  MedewerkerRole.Name = "Medewerker";
        //  MedewerkerRole.NormalizedName = "Medewerker";
        //  await _roleManager.CreateAsync(MedewerkerRole);
           
           }

    // https://localhost:7117/api/Admin/Registreren
    [HttpPost]
    [Authorize(Roles = "Beheerder")]
    [Route("Admin/Registreren")]
    public async Task<ActionResult> RegistrerenDoorAdmin([FromBody] RegistrerenGebruiker Gebruiker)
    {
          return  await InputChecker(Gebruiker, true);
    }
    
    [HttpGet]
    [Route("getuser")]
    public async Task<Gebruiker> getEmail(String Email) {
        var _user = await _userManager.FindByEmailAsync(Email);
        return _user;
    }
    [HttpGet]
    [Route("gettoken")]
    public async Task<string> getEmail(Gebruiker user) {
        var token = await _userManager.GeneratePasswordResetTokenAsync (user);
        return token;
    }

    [HttpPost]
    [Route("veranderwachtwoord")]
    public async Task<String> veranderwachtwoord(Gebruiker user, String token, String wachtwoord) {
        await _userManager.ResetPasswordAsync (user, token, wachtwoord);
        return "Wachtwoord is veranderd.";
    }


    // https://localhost:7117/api/Account/Login
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] GebruikerLogin GebruikerLogin)
    {
        var Gebruiker = Database.Gebruikers.Where(Gebruiker=>GebruikerLogin.Email== Gebruiker.Email).SingleOrDefault();
        if (Gebruiker != null)
        {    
            // Console.WriteLine(Gebruiker.TotaalMislukteInlogpogingen);
            if (Gebruiker.AccessFailedCount>=3)
                 return BadRequest(new { Message = "U account is geblokkerd, neem contact met Theater Laak"});

            if (await _userManager.CheckPasswordAsync(Gebruiker, GebruikerLogin.Password))
            {
            
                var secret = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(
                        "awef98awef978haweof8g7aw789efhh789awef8h9awh89efh89awe98f89uawef9j8aw89hefawef"));
                var signingCredentials = new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
                var claims = new List<Claim> { new Claim(ClaimTypes.Name, Gebruiker.Email) };
                var roles = await _userManager.GetRolesAsync(Gebruiker);

                foreach (var role in roles)
                    claims.Add(new Claim(ClaimTypes.Role, role));

                var tokenOptions = new JwtSecurityToken
                (
                    issuer: "https://localhost:7117",
                    audience: "https://localhost:7117",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(180),
                    signingCredentials: signingCredentials
                );
                return Ok(new { accessToken = new JwtSecurityTokenHandler().WriteToken(tokenOptions), Roles=roles, Naam= Gebruiker.Naam});
            }else{
                Gebruiker.AccessFailedCount +=1;
                Database.SaveChanges();
            }
        }
        
        return BadRequest(new { Message = "Email adres of wachtwoord klopt niet, probeer het nogmaals" });
        // return Unauthorized();
    }


     public class Check{
            public bool Toegestaan;
            public string Message;
          public Check(bool Toegestaan,string Message){
                this.Toegestaan = Toegestaan;
                this.Message = Message;
        }
    }
    private static readonly Lazy<HashSet<string>> email_blockList = new Lazy<HashSet<string>>(() =>
    {
        var lines = IoFile.ReadLines("email_blocklist.conf")
                .Where(line => !string.IsNullOrWhiteSpace(line) && !line.TrimStart().StartsWith("//"));
        return new HashSet<string>(lines, StringComparer.OrdinalIgnoreCase);
    });

    private static bool IsBlocklisted(string domain) => email_blockList.Value.Contains(domain);

    static public bool EmailCheck(string Ingevoerde_email)
    {
        var email = Ingevoerde_email;
        var addr = new MailAddress(email);
        if (IsBlocklisted(addr.Host))
        {
            return true;
        }
        else
        {
            return false;
        }
    }


    public async Task<ActionResult> InputChecker(RegistrerenGebruiker Gebruiker, bool IsAdmin){
        var CheckGebruiker = await _userManager.FindByEmailAsync(Gebruiker.Email);
        string Ingevoerde_email = Gebruiker.Email;
        var EmailNietToegestaan = EmailCheck(Ingevoerde_email);
        var Wachtwoord = Gebruiker.Password;
        bool IsWachtwoordGekraakt = GekraakteWachtwoordenMin7Karakater.Any(GekraakteWachtwoord => GekraakteWachtwoord == Wachtwoord); 
        Gebruiker.UserName = Gebruiker.Email;
        Check[] Constraints = {
           new Check(!(CheckGebruiker != null),"Gebruiker bestaat al" ),
           new Check(!(Gebruiker.Naam == Wachtwoord),"Wachtwoord moet niet gelijk zijn aan uw naam"),
           new Check(!(Wachtwoord.Length<7), "Wachtwoord moet niet korter dan 7 karakters zijn"),
           new Check(Wachtwoord.Any(char.IsDigit),"Wachtwoord moet minimaal een getal bevaten"),
           new Check(!(Wachtwoord.All(char.IsLetterOrDigit)), "Wachtwoord moet minimaal een speciaal karakter bevaten"),
           new Check(Wachtwoord.Any(char.IsUpper),"Wachtwoord moet minimaal een hoofdletter bevaten"),
           new Check(Wachtwoord.Any(char.IsLower),"Wachtwoord moet minimaal een kleine letter bevaten"),
           new Check(!(IsWachtwoordGekraakt),"Gekozen wachtwoord is niet veilig. Hij zit in lijst van gekraakte wachtwoorden"),
           new Check(!(EmailNietToegestaan == true), "Email is niet toegestaan."),
        };

    foreach (var Check in Constraints)
    {   
        if(!Check.Toegestaan)
            return BadRequest(new { Message = Check.Message});
    }
        var Resultaat = await _userManager.CreateAsync(Gebruiker, Wachtwoord);
        if(IsAdmin)
            await _userManager.AddToRoleAsync(Gebruiker, Gebruiker.RoleName);
        else
            await _userManager.AddToRoleAsync(Gebruiker, "Gebruiker");    
        return !Resultaat.Succeeded ?  BadRequest(new {Resultaat}) : Ok(new { Message = "Gebruiker is aangemaakt"});
    }


}