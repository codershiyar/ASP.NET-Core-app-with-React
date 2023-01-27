import React from "react";

export default function Begunstigersportaal() {
	return (
		<div className="App">
			<h4 className="BegunstigersIntro">
				<br></br>
				Welkom bij het begunstigersportaal, hier kunt u de voorlopige
				programmering inzien voor de voorstellingen die nog gaan komen.
				Heeft u opmerkingen over de nog komende voorstellingen we horen
				het graag van u. U kunt ook kaartjes bestellen met voorrang.
			</h4>
			<section>
				<div className="Voorlopige programmering">
					<div className="row">
						<div className="Voorstelling">
							<img
								src="tijdelijke afbeelding begunstigersportaal.jpg"
								alt="Placeholder"></img>
							<p>Voorstelling nog niet bekend.</p>
						</div>
						<div className="Voorstelling">
							<img
								src="tijdelijke afbeelding begunstigersportaal.jpg"
								alt="Placeholder"></img>
							<p>Voorstelling nog niet bekend.</p>
						</div>
						<div className="Voorstelling">
							<img
								src="tijdelijke afbeelding begunstigersportaal.jpg"
								alt="Placeholder"></img>
							<p>Voorstelling nog niet bekend.</p>
						</div>
					</div>
				</div>
			</section>
			<div className="VoorrangBegunstiger">
				<h5 id="DonateurVoorrangKaartjesBestellen">
					U kent het wel, er wordt een voorstelling gegeven die u 
					graag wilt zien. Maar de kaartjes zijn nog niet te koop, en
					<br></br>
					als ze dan eindelijk te koop zijn is de zitplaats die u wou
					al vergeven. Herkenbaar? Vanaf nu niet meer, nu dat u
					<br></br>
					donateur bent van ons theater heeft u de mogelijkheid tot
					het bestellen van kaartjes met voorrang. Hierdoor kan u
					<br></br>
					kaartjes bestellen voordat andere mensen dat kunnen.
				</h5>
				<button id="BestelVoorrang" type="button">
					Bestel met voorrang
				</button>
			</div>
		</div>
	);
}
