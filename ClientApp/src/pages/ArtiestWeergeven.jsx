import React from "react";

function ArtiestToevoegenForm(){
	return <>
	<button className="btn btn-dark"  data-bs-toggle="modal" data-bs-target="#NieuweArtiestModal">Toevoegen</button>

<div class="modal fade" id="NieuweArtiestModal" tabindex="-1" aria-labelledby="NieuweArtiestModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="NieuweArtiestModalLabel">Nieuwe Artiest</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>	
	  <form>
      <div class="modal-body">
	  <div class="mb-3">
						<label class="form-label">Naam</label>
						<input type="text" class="form-control" placeholder="Naam" required/>
					</div>
					<div class="mb-3">
						<label class="form-label">Omschrijving</label>
						<input type="text" class="form-control" placeholder="Omschrijving" required/>
					</div>
					<div class="mb-3">
					<label class="form-label">ArtiestType</label>
						<select className="form-control" required>
						<option value={""}>Kies ArtiestType</option>
						<option value={1}> Type 1</option>
						<option value={2}> Type 2</option>
						<option value={3}> Type 3</option>
						</select>
					</div>

					<div class="mb-3">
						<label class="form-label">Foto</label>
						<input type="file" class="form-control"/>
					</div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Afsluiten</button>
        <button type="submit" class="btn btn-blauw">Toevoegen</button>
      </div>
	  </form>
    </div>
  </div>
</div></>;
}
export default function ArtiestWeergaven() {
	let LijstVanArtiest = [
		{Name: "Shiyar", Omschrijving:"Geen",Afbeelding:"Geen",ID:1},
		{Name: "Peter", Omschrijving:"Geen",Afbeelding:"Geen",ID:2},
		{Name: "Thomas", Omschrijving:"Geen",Afbeelding:"Geen",ID:3},
		{Name: "Chimene", Omschrijving:"Geen",Afbeelding:"Geen",ID:4},
];

	return (
		<>
			<main>

			<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Naam</th>
					<th scope="col">Omschrijving</th>
					<th scope="col">Afbeelding</th>
					<th scope="col">Bewerken</th>
					<th scope="col">Verwijderen</th>
					<th scope="col">{ArtiestToevoegenForm()}</th>
				</tr>
			</thead>
			<tbody>
			{
			LijstVanArtiest.map((Artiest,Index)=>
			<tr>
				<td scope="row">{Index+1} </td> 
				<td>{Artiest.Name}</td> 
				<td>{Artiest.Omschrijving}</td> 
				<td>{Artiest.Afbeelding}</td>
				<td><a href= {"/artiest/bewerken?ID=" + Artiest.ID} >Bewerken</a></td>
				<td><button className="btn btn-danger">x</button></td>
			</tr>)
			}
			</tbody>
			</table>
			</main>

			
		</>
	);
}
