// using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// https://localhost:7117/api/artiesten

[Route("api/[controller]")]
[ApiController]
public class ArtiestenController : ControllerBase
{
    private readonly DatabaseContext _context;

    public ArtiestenController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<IEnumerable<Artiest>>> GetArtiesten()
    {
        if (_context.Artiesten == null)
            return NotFound();
        return await _context.Artiesten.ToListAsync();
    }

    [HttpGet("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<Artiest>> GetArtiest(int id)
    {
        if (_context.Artiesten == null)
            return NotFound();
        var artiest = await _context.Artiesten.FindAsync(id);
        if (artiest == null)
            return NotFound();
        return artiest;
    }

    [HttpPut("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<IActionResult> PutArtiest(int id, [FromBody] Artiest nieuweArtiest)
    {
        if (_context.Artiesten == null)
            return NotFound();
        var oudeArtiest = await _context.Artiesten.FindAsync(id);
        if (oudeArtiest == null)
            return NotFound();
        _context.Artiesten.Remove(oudeArtiest);
        await _context.Artiesten.AddAsync(nieuweArtiest);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<Artiest>> PostArtiest([FromBody] Artiest artiest)
    {
        if (_context.Artiesten == null)
            return NotFound();
        await _context.Artiesten.AddAsync(artiest);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<IActionResult> DeleteArtiest(int id)
    {
        if (_context.Artiesten == null)
            return NotFound();
        var artiest = await _context.Artiesten.FindAsync(id);
        if (artiest == null)
            return NotFound();
        _context.Artiesten.Remove(artiest);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}