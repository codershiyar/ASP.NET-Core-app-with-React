using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class GebruikersController : ControllerBase
{
    private readonly DatabaseContext _context;

    public GebruikersController(DatabaseContext context)
    {
        _context = context;
    }
}