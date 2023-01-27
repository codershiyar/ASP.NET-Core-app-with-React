using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/Tickets")]
[ApiController]
public class TicketsController : ControllerBase
{
    private readonly DatabaseContext _context;

    public TicketsController(DatabaseContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("Tickets")]
    public async Task<ActionResult<IEnumerable<Ticket>>> GetTicket()
    {
        if (_context.Tickets == null)
        {
            return NotFound();
        }
        return await _context.Tickets.ToListAsync();
    }

    [HttpGet]
    [Route("Tickets/{ID}")]
    public async Task<ActionResult<Ticket>> GetTicketByID(Ticket ticket)
    {
        if (_context.Tickets == null)
        {
            return NotFound();
        }
        await _context.Tickets.FindAsync(ticket.ID);

        if (ticket == null)
        {
            return NotFound();
        }

        return ticket;
    }


    [HttpPost]
    [Route("Tickets/Post")]
    public async Task<ActionResult<Ticket>> PostTicket(Ticket ticket)
    {
        _context.Tickets.Add(ticket);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTicket), new { id = ticket.ID }, ticket);
    }

    [HttpPut]
    [Route("Tickets/Put/1")]
    public async Task<ActionResult<Ticket>> PutTicket(int ID, Ticket ticket)
    {
        if (ID != ticket.ID)
        {
            return BadRequest();
        }

        _context.Entry(ticket).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TicketExists(ID))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        return NoContent();
    }

    [HttpDelete]
    [Route("Tickets/Delete/{ID}")]
    public async Task<ActionResult> DeleteTicket(Ticket ticket)
    {
        _context.Tickets.Remove(ticket);
        await _context.SaveChangesAsync();
        return Ok(new { Succeeded = true, Message = "Ticket is succesvol verwijderd.", StatusCode = 201 });
    }
    private bool TicketExists(int ID)
    {
        return (_context.Tickets?.Any(e => e.ID == ID)).GetValueOrDefault();
    }
}