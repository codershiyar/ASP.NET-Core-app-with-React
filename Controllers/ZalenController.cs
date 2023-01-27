// using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// https://localhost:7117/api/zalen

[Route("api/[controller]")]
[ApiController]
public class ZalenController : ControllerBase
{
    private readonly DatabaseContext _context;

    public ZalenController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<IEnumerable<Zaal>>> GetZalen()
    {
        if (_context.Zalen == null)
            return NotFound();
        return await _context.Zalen.ToListAsync();
    }

    [HttpGet("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<Zaal>> GetZaal(int id)
    {
        if (_context.Zalen == null)
            return NotFound();
        var zaal = await _context.Zalen.FindAsync(id);
        if (zaal == null)
            return NotFound();
        return zaal;
    }

    [HttpPut("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<IActionResult> PutZaal(int id, [FromBody] Zaal nieuweZaal)
    {
        if (_context.Zalen == null)
            return NotFound();
        var oudeZaal = await _context.Zalen.FindAsync(id);
        if (oudeZaal == null)
            return NotFound();
        _context.Zalen.Remove(oudeZaal);
        await _context.Zalen.AddAsync(nieuweZaal);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost]
    // [Authorize(Roles = "Beheerder")]
    public async Task<ActionResult<Zaal>> PostZaal([FromBody] Zaal zaal)
    {
        if (_context.Zalen == null)
            return NotFound();
        await _context.Zalen.AddAsync(zaal);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    // [Authorize(Roles = "Beheerder")]
    public async Task<IActionResult> DeleteZaal(int id)
    {
        if (_context.Zalen == null)
            return NotFound();
        var zaal = await _context.Zalen.FindAsync(id);
        if (zaal == null)
            return NotFound();
        _context.Zalen.Remove(zaal);
        await _context.SaveChangesAsync();
        return NoContent();
    }
    [HttpGet]
    [Route("getStoelenInRuimte/{id}")]
    public async Task<ActionResult<Array>> GetStoelenInRuimte(int id) { 
        var elementSelecteren = await _context.Stoelen.Include(s => s.Zaal).Include(s => s.StoelRang).ToListAsync();
        var testZaalSelecteren = await _context.Stoelen.Include(s => s.Zaal).ToListAsync();
        var testStoelSelecteren = await _context.Stoelen.Include(s => s.StoelRang).ToListAsync();
        var testToListAsync = await _context.Stoelen.ToListAsync();
        var zaalSelecteren = elementSelecteren.Where(s1 => s1.Zaal.ID == id);
        var opStoelrang = zaalSelecteren.OrderBy(s2 => s2.StoelRang.Rangnummer);
        return opStoelrang.ToArray();
        } 
}