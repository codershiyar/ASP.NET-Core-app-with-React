using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class RuimtesController : ControllerBase
{
    private readonly DatabaseContext _context;

    public RuimtesController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("Ruimte/GetRuimte")]
    public async Task<ActionResult<IEnumerable<Ruimte>>> GetRuimte() {
        if (_context.Ruimtes == null)
        {
            return Ok(new { Succeeded = false, Message = "De Ruimte bestaat niet.", StatusCode = 404});
        }
        return await _context.Ruimtes.ToListAsync();
    }

    [HttpPost]
    [Route("Ruimte/Plaatsten")]
    public async Task<ActionResult> PlaatsReservering(Ruimte ruimte) {
        _context.Ruimtes.Add(ruimte);
        await _context.SaveChangesAsync();
        return Ok(new { Succeeded = true, Message = "De ruimte is succesvol aangemaakt", StatusCode = 201 });
    }
    
    [HttpDelete]
    [Route("ruimte/verwijderen")]
    public async Task<ActionResult> Verwijderen(Ruimte ruimte) {
        _context.Ruimtes.Remove(ruimte);
        await _context.SaveChangesAsync();
        return Ok(new { Succeeded = true, Message = "De ruimte is succesvol verwijderd", StatusCode = 201 });
    }
    
    [HttpGet]
    [Route("getBeschikbareRuimtes")]
    public async Task<ActionResult<Array>> GetRuimtes() {
        DateTime geselecteerderdag = DateTime.Now; 
        var include = await _context.Ruimtes.Include(r => r.ID).Include(r => r.Capaciteit).Include(r => r.WaarvoorGeschikt).ToListAsync();
        var query =  include.Where(r => r.reserveringen.Select(re => re.ReserveringDatumEnTijd.Begin).Where(r => r == geselecteerderdag).Count() > 1 && r.reserveringen.Select(re =>re.ReserveringDatumEnTijd) == null);
        return query.ToArray();
    } 
}