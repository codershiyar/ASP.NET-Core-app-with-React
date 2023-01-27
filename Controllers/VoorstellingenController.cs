// using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// https://localhost:7117/api/voorstellingen

[Route("api/[controller]")]
[ApiController]
public class VoorstellingenController : ControllerBase
{
    private readonly DatabaseContext _context;

    public VoorstellingenController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<IEnumerable<Voorstelling>>> GetVoorstellingen()
    {
        if (_context.Voorstellingen == null)
            return NotFound();
        return await _context.Voorstellingen.ToListAsync();
    }

    [HttpGet("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<Voorstelling>> GetVoorstelling(int id)
    {
        if (_context.Voorstellingen == null)
            return NotFound();
        var voorstelling = await _context.Voorstellingen.FindAsync(id);
        if (voorstelling == null)
            return NotFound();
        return voorstelling;
    }

    [HttpPut("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<IActionResult> PutVoorstelling(int id, [FromBody] Voorstelling nieuweVoorstelling)
    {
        if (_context.Voorstellingen == null)
            return NotFound();
        var oudeVoorstelling = await _context.Voorstellingen.FindAsync(id);
        if (oudeVoorstelling == null)
            return NotFound();
        _context.Voorstellingen.Remove(oudeVoorstelling);
        await _context.Voorstellingen.AddAsync(nieuweVoorstelling);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<Voorstelling>> PostVoorstelling([FromBody] Voorstelling voorstelling)
    {
        if (_context.Voorstellingen == null)
            return NotFound();
        await _context.Voorstellingen.AddAsync(voorstelling);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<IActionResult> DeleteVoorstelling(int id)
    {
        if (_context.Voorstellingen == null)
            return NotFound();
        var voorstelling = await _context.Voorstellingen.FindAsync(id);
        if (voorstelling == null)
            return NotFound();
        _context.Voorstellingen.Remove(voorstelling);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}