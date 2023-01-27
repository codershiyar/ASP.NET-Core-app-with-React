using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Text;
// https://localhost:7117/api/reCaptcha

[Route("api/[controller]")]
[ApiController]
public class reCaptchaController : ControllerBase
{
    private CaptchaSettings captchaSettings;
    
    public string SecretKey => captchaSettings.SecretKey;
    private static readonly HttpClient client = new HttpClient();
    Uri uri = new Uri ("https://www.google.com/recaptcha/api/siteverify");

    [HttpPost]
    [Route ("verifieer")]
    public async Task<IActionResult> PostToken([FromBody] string token){
        Console.WriteLine(token);
        var response = string.Empty;        
        string payload = "{\"secret\": \\${SecretKey},\"response\": \\${token}\"}";
        HttpContent content = new StringContent(payload, Encoding.UTF8, "application/json");
        HttpResponseMessage result = await client.PostAsync(uri, content);
        return Ok(result);
    }
}