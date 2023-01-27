
import {React,useState,useReducer, useEffect,useRef} from "react";
import ReCAPTCHA from "react-google-recaptcha"
import {StuurBericht,RegistrerenBericht} from "../components/Mailer";
async function RegitreerUser(formData) {
	return fetch('https://localhost:7117/api/registreren', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(formData)
	}).then(data => data.json()).catch(error =>{
		//console.log(error);
		alert("Er is iets misgegaan, vernieuw pagina en probeer het nogmaals")
	})
}

export default function Registreerpagina() {

	const [WachtwoordWeergaaf, setWachtwoordWeergaaf] = useState(false);
  	const ToggleWachtwoord = () => {setWachtwoordWeergaaf(!WachtwoordWeergaaf);};

	const [Naam, setNaam] = useState();
	const [Geboortedatum, setGeboortedatum] = useState();
	const [Email, setEmail] = useState();
	const [Password, setPassword] = useState("");
	const [Alert, setAlert] = useState();
	const Top10Wachtwoorden = ["qwerty","123456","123456789","Welkom","12345","wachtwoord","welkom01","password","12345678", "1234"]
	const [WoordenDictionary, setWoordenDictionary] = useState();
	const [LijstGekraakteWachtwoord, setLijstGekraakteWachtwoord] = useState();
	const CaptchaRef = useRef(null)
	 useEffect( ()=>{
		async function fetchData() {
			try {
				let DataAanvragen = await fetch('./words_dictionary.json');
				let DataAlsJson = await DataAanvragen.json();
				setWoordenDictionary(DataAlsJson);
			} catch (error) {
				console.log(error)
			}


			let GekraakteWachtwoordAanvragen = await fetch('./lijst_van_gekraakte_wachtwoorden.txt');
			let GekraakteWachtwoordAanvragenAlsJson = await GekraakteWachtwoordAanvragen.text();
			setLijstGekraakteWachtwoord( GekraakteWachtwoordAanvragenAlsJson.split("\r\n"));

		} fetchData();
	 },[])
	 

	 let Constraints = {
		// Eerste waarde is validatie, en 2de is beschrijving.
		Min1Hoofd:[/[A-Z]/.test(Password),"Minimaal 1 hoofdletter [A-Z]"],
		Min1Klein:[/[a-z]/.test(Password),"Minimaal 1 klein [a-z]"],
		Min1Getal:[/\d/.test(Password),"Minimaal 1 getal [0-9]"],
		Min7Karakters:[Password.length>6,"Minimaal 7 karakters "],
		NietGelijkAanNaam:[Password!=Naam,"Niet gelijk aan naam [!@#$%^&*)(+=._-{}]"],
		Min1SpeciaalKarakter:[/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g.test(Password),"Minimaal 1 speciaal karakter"],
		NietInTop10:[!NietInTop10 (),"Niet in de top-10 lijst van veel voorkomende wachtwoorden"],
		IsGeenWoord:[!IsGeenWoord(),"Is geen woord"],
		NietGekraakte:[!NietGekraakte(),"Niet in de lijst van gekraakte wachtwoorden"],
	 }
	 
	const [InvoerWachtwoordValidaties,dispatch] = useReducer(reducer,Constraints);
	function reducer(state, action) {
		return { ...state, [action.type]: Constraints[action.type][0]}
	}
	
	function CheckInvoers (){
		for (const [key, value] of Object.entries(InvoerWachtwoordValidaties)) {
			dispatch({type: key});
  		}
	}

	function IsGeenWoord(){
		let IsGeenWoord = false;
		for (let Woord in WoordenDictionary) {
						if(Password == Woord){IsGeenWoord = true; break;}
		}
		return IsGeenWoord;
	}

	function NietGekraakte(){
		let IsGekraakteWachtwoord = false;
		if(Password.length>6 ){
			try {
				LijstGekraakteWachtwoord.forEach(GekraakteWachtwoord => {
					if(Password=== GekraakteWachtwoord){
						IsGekraakteWachtwoord =  true; 
						return false;
					}
				});		
			} catch (error) {
				console.log(error)
			}

	}
		return IsGekraakteWachtwoord;
	}
	function NietInTop10 (){
		let ZitInTop10 = false;
		Top10Wachtwoorden.forEach(Wachtwoord => {
		if(Wachtwoord.toUpperCase() === Password.toUpperCase())
				ZitInTop10 = true; return false;
		});
		return ZitInTop10;
	}

	const handleSubmit = async e => {
		e.preventDefault();
		const Token = CaptchaRef.current.getValue();
		if(Token.length>100){

		let WachtwoordIsGeldig = true;
		for (const [key, value] of Object.entries(InvoerWachtwoordValidaties)) { 
			if(!value)
				WachtwoordIsGeldig = value;
		}
		if(WachtwoordIsGeldig){
			const response = await RegitreerUser({
				Email: Email,
				Password,
				Geboortedatum,
				Naam
			});
			if ('message' in response ) {
				if(response.message === "Gebruiker is aangemaakt"){
					setAlert(<div className="alert alert-success mb-3 mt-3" role="alert">{response.message}  </div>)
					StuurBericht(RegistrerenBericht,Email,Naam);
					setNaam(""); setEmail(""); setPassword("");
				}else{
					setAlert(<div className="alert alert-danger mb-3 mt-3" role="alert">{response.message}  </div>)
				}
			}else{
				setAlert(<div className="alert alert-danger mb-3 mt-3" role="alert"> Error, check de ingevoerde gegevens en probeer het opnieuw </div>)
			}
		}
	}else{
		setAlert(<div className="alert alert-danger mb-3 mt-3" role="alert">Inlogpoging is misgelukt, u moet zich eerst verifieren dat u geen robot bent </div>)
	}

	}
	
    return (
<main className="container">

{Alert}

<form onSubmit={handleSubmit} >
	<div className="col-auto">
		<div className="mb-1">
			<label className="form-label" htmlFor="Naam">Naam: (verplicht)</label>
			<input type="text" className="form-control" onChange={(e)=>setNaam(e.target.value)} required placeholder="Voer uw naam in" id="Naam"/>
		</div>

<div className="mb-1">
	<label className="form-label" htmlFor="Email">Emailadres: (verplicht)</label>
	<input type="email" className="form-control" onChange={e=>setEmail(e.target.value)}  required placeholder="Voer e-mailadres in" id="Email"/>
</div>
<div className="mb-1">
		<label htmlFor="Wachtwoord" className="form-label">Wachtwoord  (verplicht)</label>
		<input onChange={(e)=>{CheckInvoers();setPassword(e.target.value)}} id="Wachtwoord" type={WachtwoordWeergaaf ? "text" : "password"} className="form-control" required autoComplete="current-password" placeholder="Voer hier uw wachtwoord in" />
</div>
<img src="./show-password.png" width={40} onClick={ToggleWachtwoord} alt="Icon om wachtwoord weer te geven bij opclick"/>
	{/* { InvoerWachtwoordValidaties.Min1Hoofd? <span className="GeldigInvoer">Minimaal 1 hoofdletter</span> : <span className="OnGeldigInvoer">Minimaal 1 hoofdletter</span>}
	{ InvoerWachtwoordValidaties.Min1Klein? <span className="GeldigInvoer">Minimaal 1 kleine letter</span> : <span className="OnGeldigInvoer">Minimaal 1 kleine letter</span>}
	{ InvoerWachtwoordValidaties.Min1SpeciaalKarakter? <span className="GeldigInvoer">Minimaal 1 speciaal karakter</span> : <span className="OnGeldigInvoer">Minimaal 1 speciaal karakter</span>}
	{ InvoerWachtwoordValidaties.Min7Karakters? <span className="GeldigInvoer">Minimaal 7 karakters</span> : <span className="OnGeldigInvoer">Minimaal 7 karakters</span>}
	{ InvoerWachtwoordValidaties.NietGelijkAanNaam? <span className="GeldigInvoer">Niet gelijk aan de inlognaam</span> : <span className="OnGeldigInvoer">Niet gelijk aan de inlognaam</span>}
	{ InvoerWachtwoordValidaties.Min1Getal? <span className="GeldigInvoer">Minimaal 1 getal</span> : <span className="OnGeldigInvoer">Minimaal 1 getal</span>}
	{ InvoerWachtwoordValidaties.NietInTop10? <span className="GeldigInvoer">Niet in de top-10 lijst van veel voorkomende wachtwoorden</span> : <span className="OnGeldigInvoer">Niet in de top-10 lijst van veel voorkomende wachtwoorden</span>}
	{ InvoerWachtwoordValidaties.IsGeenWoord? <span className="GeldigInvoer">Is geen woord</span> : <span className="OnGeldigInvoer">Is geen woord</span>}
	{ InvoerWachtwoordValidaties.NietGekraakte? <span className="GeldigInvoer">Niet in de lijst van gekraakte wachtwoorden </span> : <span className="OnGeldigInvoer">Niet in de lijst van gekraakte wachtwoorden</span>} */}

{
	Object.keys(Constraints).map((Constraint,Index) =>{
			return Constraints[Constraint][0]? <label key={Index} className="GeldigInvoer">{Constraints[Constraint][1]}</label> : <label key={Index} className="OnGeldigInvoer">{Constraints[Constraint][1]}</label>
	})
}
</div>

<div className="mb-1">
	<label className="form-label" htmlFor="GeboorteDatum">Geboortedatum: (optioneel)</label>
	<input type={"date"} className="form-control" id="GeboorteDatum" onChange={e=>setGeboortedatum(e.target.value)}/>
</div>
<div className="col-md-6 mt-3">
	<label htmlFor="VerficatieChecker" className="form-label">Verifieer dat u geen robot bent, door middel op verficatie check te drukken (verplicht)</label>
	<ReCAPTCHA id="VerficatieChecker" sitekey={"6Le4DhskAAAAAE2CWj-lmqLl5hEDbMILq0lFDhWr"} ref={CaptchaRef} />
</div>
		<div className="flex">
			<a href="/inloggen" className="btn btn-light w-50 m-3">Inloggen</a>
			<button id="Registreren" className="btn btn-blauw w-50 m-3" type="submit">Registreren</button>
		</div>

</form>

</main>
    )
}