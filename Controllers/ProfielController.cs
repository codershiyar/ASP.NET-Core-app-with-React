using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace WDPR_Theater_Groep_8.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfielController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ProfielController(DatabaseContext context)
        {
            _context = context;
        }

        // // GET: api/Profiel
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Gebruiker>>> GetGebruikers()
        // {
        //   if (_context.Gebruikers == null)
        //   {
        //       return NotFound();
        //   }
        //     return await _context.Gebruikers.ToListAsync();
        // }

        // GET: api/Profiel/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gebruiker>> GetGebruiker()
        {
          if (_context.Gebruikers == null)
          {
              return NotFound();
          }

         var Email = "";
         try { Email =  User.Identity.Name;   }
         catch (System.Exception) {  return BadRequest();}
          
        var Gebruiker = _context.Gebruikers.Where(Gebruiker=> Gebruiker.Email ==Email).FirstOrDefault();
        
        if (Gebruiker == null)  { 
            return NotFound();  
        }

        var BenodigdeGegevens = new { 
            Id = Gebruiker.Id, 
            Naam = Gebruiker.Naam,
             Omschrijving = Gebruiker.Omschrijving,
             Geboortedatum = Gebruiker.Geboortedatum,
             Email = Gebruiker.Email
        };

        return  Ok(BenodigdeGegevens) ;

        }

        // PUT: api/Profiel/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGebruiker(string id, [FromBody] Gebruiker NieuwGebruiker)
        {
  
            if (id != NieuwGebruiker.Id)
            {
                return BadRequest();
            }

            var GebruikerData = await _context.Gebruikers.FindAsync(id);
            if (GebruikerData == null)
                    return NotFound();
                    
            try
            {
                _context.ChangeTracker.Clear() ;
                GebruikerData.Naam = NieuwGebruiker.Naam;
                GebruikerData.Omschrijving = NieuwGebruiker.Omschrijving;
                GebruikerData.Geboortedatum = NieuwGebruiker.Geboortedatum ;
                _context.Gebruikers.Update(GebruikerData);
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (System.Exception)
            {    
                return BadRequest();
            }
      
        }

        // // POST: api/Profiel
        // // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        // [HttpPost]
        // public async Task<ActionResult<Gebruiker>> PostGebruiker(Gebruiker gebruiker)
        // {
        //   if (_context.Gebruikers == null)
        //   {
        //       return Problem("Entity set 'DatabaseContext.Gebruikers'  is null.");
        //   }
        //     _context.Gebruikers.Add(gebruiker);
        //     try
        //     {
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateException)
        //     {
        //         if (GebruikerExists(gebruiker.Id))
        //         {
        //             return Conflict();
        //         }
        //         else
        //         {
        //             throw;
        //         }
        //     }

        //     return CreatedAtAction("GetGebruiker", new { id = gebruiker.Id }, gebruiker);
        // }

        // // DELETE: api/Profiel/5
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteGebruiker(string id)
        // {
        //     if (_context.Gebruikers == null)
        //     {
        //         return NotFound();
        //     }
        //     var gebruiker = await _context.Gebruikers.FindAsync(id);
        //     if (gebruiker == null)
        //     {
        //         return NotFound();
        //     }

        //     _context.Gebruikers.Remove(gebruiker);
        //     await _context.SaveChangesAsync();

        //     return NoContent();
        // }

        private bool GebruikerExists(string id)
        {
            return (_context.Gebruikers?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
