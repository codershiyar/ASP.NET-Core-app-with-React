import React from "react";

export default function ProfielBewerken() {
	return (
		<main>
			<ul
				className="nav nav-pills m-3 w-100"
				id="pills-tab"
				role="tablist">
				<li
					className="nav-item"
					role="presentation">
					<button
						className="nav-link active w-100"
						id="pills-inloggen-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-inloggen"
						type="button"
						role="tab"
						aria-controls="pills-inloggen"
						aria-selected="true">
						Inloggegevens
					</button>
				</li>
				<li
					className="nav-item"
					role="presentation">
					<button
						className="nav-link w-100"
						id="pills-profile-tab"
						data-bs-toggle="pill"
						data-bs-target="#pills-profile"
						type="button"
						role="tab"
						aria-controls="pills-profile"
						aria-selected="false">
						Profielgegevens
					</button>
				</li>
			</ul>
			<div
				className="tab-content m-3"
				id="pills-tabContent">
				<div
					className="tab-pane fade show active"
					id="pills-inloggen"
					role="tabpanel"
					aria-labelledby="pills-home-tab"
					tabIndex="0">
					<div className="mb-3">
						<label className="form-label">Emailadres</label>
						<input
							type="email"
							className="form-control"
							placeholder="naam@voorbeeld.com"
						/>
					</div>

					<div className="mb-3">
						<label class="form-label">Huidige wachtwoord</label>
						<input
							type="password"
							class="form-control"
							placeholder="****"
						/>
					</div>

					<div class="mb-3">
						<label class="form-label">Nieuwe wachtwoord</label>
						<input
							type="password"
							class="form-control"
							placeholder="****"
						/>
					</div>
				<div class="flex">
					<button
						onClick={()=>{window.history.back()}}
						class="btn btn-light w-25 m-3">
						Annuleren
					</button>
					<button
						type="button"
						class="btn btn-blauw w-25 m-3">
						Opslaan
					</button>
				</div>
				</div>
				<div
					className="tab-pane fade"
					id="pills-profile"
					role="tabpanel"
					aria-labelledby="pills-profile-tab"
					tabIndex="0">
					<div class="mb-3">
						<label class="form-label">Naam</label>
						<input
							type="text"
							class="form-control"
							placeholder="naam"
						/>
					</div>

					<div class="mb-3">
						<label class="form-label">Korte omschrijving</label>
						<input
							type="text"
							class="form-control"
							placeholder="omschrijving"
						/>
					</div>

					<div class="mb-3">
						<label class="form-label">Profielfoto</label>
						<input
							type="file"
							class="form-control"
						/>
					</div>

					<div class="mb-3">
						<label class="form-label">Geboortedatum</label>
						<input
							type="date"
							class="form-control"
							placeholder="Geboortedatum"
						/>
					</div>
					<div class="flex">
					<button onClick={()=>{window.history.back()}}
						class="btn btn-light w-25 m-3">
						Annuleren
					</button>
					<button
						type="button"
						class="btn btn-blauw w-25 m-3">
						Opslaan
					</button>
					</div>
				</div>
			</div>
		</main>
	);
}
