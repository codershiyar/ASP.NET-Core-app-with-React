import React from "react";
import Autocomplete from "./Autocomplete";
import style from "../homepagina.css";

export default function Homepagina() {
	return (
		<main>
			<article id="voorstellingen-banner">
				<img
					src="voorstelling_img1.jpg"
					alt="Voorstelling 1: Chicago - Muzikale zomeravonden 2019"
				/>
				<img
					src="voorstelling_img2.jpg"
					alt="Voorstelling 2: het gaat om voorsteling Aan de andere kant die door kinderen wordt gepresenteerd "
				/>
				<img
					src="voorstelling_img3.jpg"
					alt="Voorstelling 3: het gaat om studenten die het Tussenjaar eindpresentatie 2018-2019 presenteren"
				/>
			</article>
			<section className="m-3">
				<label className="mb-3" htmlFor="Search-query">Zoeken naar voorstelingen: (werkt momenteel nog niet) </label>
				<input  className="form-control search-bar "
				style={{maxWidth:"320px"}}
					type="text"
					name="search-query"
					id="search-query"
					placeholder="Voorstellingen Zoeken"/>
			</section>

			<section className="m-3">
				<label className="mb-3" htmlFor="GenreVoorstellingen" >Zoek hier de genre van de voorstelling in.</label>
				<Autocomplete  suggestions={["Actie", "Romantiek", "Drama", "Comedie", "Opera", "Musical", "Dans"]}/>
			</section>
			<h2>Voorstellingen in december</h2>
			<article id="dagindelingen">
				<a href="/reserverenstoel" title="Reserveer een stoel">
	
				<section className="pijl-container">
					<div className="pijl invert"></div>
				</section>
				<section className="dag-rooster">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<b>18:00</b>
								</td>
								<td>Show 1</td>
							</tr>
							<tr>
								<td>
									<b>19:00</b>
								</td>
								<td>Show 2</td>
							</tr>
						</tbody>
					</table>
					<div className="dag-nummer-container">
						<div className="dag-nummer">12</div>
					</div>
				</section>
				<section className="dag-rooster">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<b>20:00</b>
								</td>
								<td>Show 3</td>
							</tr>
						</tbody>
					</table>
					<div className="dag-nummer-container">
						<div className="dag-nummer">13</div>
					</div>
				</section>
				<section className="dag-rooster">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<b>20:00</b>
								</td>
								<td>Show 4</td>
							</tr>
						</tbody>
					</table>
					<div className="dag-nummer-container">
						<div className="dag-nummer">14</div>
					</div>
				</section>
				<section className="dag-rooster">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<b>20:00</b>
								</td>
								<td>Show 5</td>
							</tr>
						</tbody>
					</table>
					<div className="dag-nummer-container">
						<div className="dag-nummer">15</div>
					</div>
				</section>
				<section className="dag-rooster">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<b>20:00</b>
								</td>
								<td>Show 6</td>
							</tr>
							<tr>
								<td>
									<b>22:00</b>
								</td>
								<td>Show 7</td>
							</tr>
						</tbody>
					</table>
					<div className="dag-nummer-container">
						<div className="dag-nummer">16</div>
					</div>
				</section>
				<section className="dag-rooster">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<b>20:00</b>
								</td>
								<td>Show 8</td>
							</tr>
						</tbody>
					</table>
					<div className="dag-nummer-container">
						<div className="dag-nummer">17</div>
					</div>
				</section>
				<section className="dag-rooster">
					<table className="table">
						<tbody>
							<tr>
								<td>
									<b>20:00</b>
								</td>
								<td>Show 9</td>
							</tr>
						</tbody>
					</table>
					<div className="dag-nummer-container">
						<div className="dag-nummer">18</div>
					</div>
				</section>
				</a>
				<section className="pijl-container">
					<div className="pijl"></div>
				</section>
			</article>
			
		</main>
	);
}
