import  { React, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import LogUit from '../components/Uitlogknop';
export default function ProfielWeergeven() {
	let [IngelogdeGebruiker] = useState(Cookies.get("IngelogdeGebruiker") !=null ? JSON.parse(Cookies.get("IngelogdeGebruiker"))  : JSON.parse(sessionStorage.getItem("IngelogdeGebruiker")))
	let [Id, SetId] = useState("");
	let [Naam, SetNaam] = useState("");
	let [Omschrijving, SetOmschrijving] = useState("");
	let [Geboortedatum, SetGeboortedatum] = useState("");
	let [Email, SetEmail] =  useState("") ;
	let [Alert, SetAlert] =  useState("") ;

	useEffect(()=>{
	async function ProfielGegevens() {
	  let Aanvraag = await fetch('https://localhost:7117/api/profiel/1', {
	  	method: 'GET',
	 	 headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${IngelogdeGebruiker.accessToken}`,
	  	}
		})
		if(Aanvraag.status === 200){
			let ProfielGegevens = await Aanvraag.json();
			SetId(ProfielGegevens.id);
			SetNaam(ProfielGegevens.naam);
			SetOmschrijving(ProfielGegevens.omschrijving);
			SetGeboortedatum(ProfielGegevens.geboortedatum);
			SetEmail(ProfielGegevens.email);
		}else{
			LogUit();
			window.location.replace("/");
		}
		
			
		}ProfielGegevens();
	}, [])

	let Opslaan = async (e)=>{
		e.preventDefault();
	let Response= await	fetch("https://localhost:7117/api/profiel/"+ Id,
			{
				method: 'PUT',
	 	 		headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				'Authorization': `Bearer ${IngelogdeGebruiker.accessToken}`
			},
				body: JSON.stringify({
					"Id" :Id,
					 "Naam": Naam,
					"Omschrijving":Omschrijving,
					"Geboortedatum": Geboortedatum 
				})
	  	
			}
		);

		if(Response.status == 204)
			SetAlert(<div className="alert alert-success " role="alert">Opgeslagen  </div>)
		else
			SetAlert(<div className="alert alert-danger" role="alert">Er is iets misgegaan, probeer het later nogmaals </div>)
	}
	return (
		<main id="ProfielMain">
			<aside>	<img src="male_avater.png"alt="Je profielfoto"width="90%"	/>
			</aside>
			<article>
			<form onSubmit={Opslaan}>
			{Alert}
				<div className="mb-3">
					<label htmlFor="Naam" className="form-label">Naam</label>
					<input id="Naam" type="text" className="form-control" value={Naam} onChange={(e)=> SetNaam(e.target.value)} required/>
				</div>
				<div className="mb-3">
					<label htmlFor="Omschrijving" className="form-label">Korte omschrijving</label>
					<input id="Omschrijving" type="text" className="form-control"	value={Omschrijving} onChange={(e)=> SetOmschrijving(e.target.value)} required/>
				</div>
				<div className="mb-3">
					<label htmlFor="Email" className="form-label">Emailadres</label>
					<input id="Email" type="email" className="form-control" disabled value={Email} required/>
				</div>
				<div className="mb-3">
					<label htmlFor="Geboortedatum" className="form-label">Geboortedatum</label>
					<input  id="Geboortedatum" type="date" 	min={"1900-01-01/"} max={"2010-01-01"}
						className="form-control"
						value={Geboortedatum}
						onChange={(e)=> SetGeboortedatum(e.target.value)}
					/>
				</div>

				<button
					onClick={()=>{window.history.back()}}
					className="btn btn-light w-25 m-3">
					Terug
				</button>
				<button
				id="GegevensWijzigen"
					type="submit"
					className="btn btn-blauw w-25 m-3">
					Wijzigen
				</button>
			</form>	
			</article>
		</main>
	);
}
