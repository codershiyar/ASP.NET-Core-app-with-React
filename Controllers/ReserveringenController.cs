using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/")]
[ApiController]
public class ReserveringenController : ControllerBase
{
    private readonly DatabaseContext _context;

    public ReserveringenController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Reservering>>> GetReservering() {
        if (_context.Reserveringen == null)
        {
            return NotFound();
        }
        return await _context.Reserveringen.ToListAsync();
    }

    [HttpPost]
    [Route("reserveren/plaatsten")]
    public async Task<ActionResult> PlaatsReservering(Reservering reservering) {
        _context.Reserveringen.Add(reservering);
        await _context.SaveChangesAsync();
        return Ok();
    }
    
    [HttpDelete]
    [Route("reserveren/verwijderen")]
    public async Task<ActionResult> Verwijderen(Reservering reservering) {
        _context.Reserveringen.Remove(reservering);
        await _context.SaveChangesAsync();
        return Ok();
    }
}