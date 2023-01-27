import React from "react";

export default function Doneerpagina() {
	return (
		<div className="Doneerpagina">
			<div>
				<fieldset className="Donatiebedragkeuze">
					<form>
						<div className="Donatiemenu">
							<div>
								<select className="form-control mb-3">
									<option value="eenmalig">Eenmalig</option>
									<option value="maandelijks">
										Maandelijks
									</option>
									<option value="kwartaal">
										Een keer per 3 maanden
									</option>
									<option value="halfjaar">
										Een keer per 6 maanden
									</option>
									<option value="jaarlijks">Jaarlijks</option>
								</select>
							</div>

							<div
								className="EersteKeuzeRij"
								role="group"
								aria-label="Eerste groep">
								<button
									id="vijfeuro"
									type="button"
									className="btn btn-secondary"
									value="5.00">
									{" "}
									€5{" "}
								</button>
								<button
									id="tieneuro"
									type="button"
									className="btn btn-secondary"
									value="10.00">
									{" "}
									€10{" "}
								</button>
							</div>

							<div className="TweedeKeuzeRij">
								<button
									id="vijftieneuro"
									type="button"
									className="btn btn-secondary"
									value="15.00">
									{" "}
									€15{" "}
								</button>
								<button
									id="vijfentwintigeuro"
									type="button"
									className="btn btn-secondary"
									value="25.00">
									{" "}
									€25{" "}
								</button>
							</div>

							<div className="DerdeKeuzeRij">
								<button
									id="vijftigeuro"
									type="button"
									className="btn btn-secondary"
									value="50.00">
									{" "}
									€50{" "}
								</button>
								<button
									id="honderdeuro"
									type="button"
									className="btn btn-secondary"
									value="100.00">
									€100{" "}
								</button>
							</div>

							<div>
								<button
									id="overigbedrag"
									type="button"
									className="btn btn-secondary"
									value="onbepaald">
									{" "}
									Kies een ander bedrag.
								</button>
							</div>
						</div>
					</form>
				</fieldset>
			</div>
			<img
				id="TheaterzaalAfbeelding"
				src="Theaterzaal.png"
				alt="Een theaterzaal, stoelen en podium zichtbaar."></img>
			<div className="DonatieIntroTekst">
				<h3>Wat doen wij met uw donatie</h3>
				<p>
					Met uw donatie zorgen we dat theater Laak toegankelijk
					blijft voor iedereen.
					<br></br>Dit doen we door de kosten voor een kaartje laag te
					houden. Dit kan voornamelijk met de hulp van donateurs.
					<br></br>Wilt u meer informatie over wat wij precies doen
					met uw doantie? Scroll dan verder naar beneden daar is
					aanvullende informatie.
				</p>
			</div>
			<div className="aanvullendeinformatieDonaties">
				<h4>Meer informatie over wat wij doen met uw donatie.</h4>
				<p>
					Met uw donatie houden we de prijzen van kaartjes laag. Het
					geld van de donatie gaat namelijk naar onderhoud van het
					gebouw,
					<br></br>zalen, materiaal voor tijdens de voorstellingen,
					techniek en catering.
				</p>
			</div>
		</div>
	);
}
