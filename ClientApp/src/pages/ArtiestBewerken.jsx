import React from "react";

export default function ArtiestWijzigen() {
	return (
		<>
				<main>
					<div class="mb-3">
						<label class="form-label">Naam</label>
						<input type="text" class="form-control" value="Naam"/>
					</div>
					<div class="mb-3">
						<label class="form-label">Omschrijving</label>
						<input type="text" class="form-control" value="Omschrijving"/>
					</div>
					<div class="mb-3">
						<label class="form-label">ArtiestType</label>
						<select className="form-control">
						<option value={1}> Type 1</option>
						<option value={2}> Type 2</option>
						<option value={3}> Type 3</option>
						</select>
					</div>

					<div class="mb-3">
						<label class="form-label">Foto</label>
						<input type="file" class="form-control"/>
					</div>
					<div className="flex">
						<button onClick={()=>{window.history.back()}} class="btn btn-light w-50 m-3">Terug</button>
						<button type="button" class="btn btn-blauw w-50 m-3">Opslaan</button>
					</div>
		</main>
		</>
	);
}
