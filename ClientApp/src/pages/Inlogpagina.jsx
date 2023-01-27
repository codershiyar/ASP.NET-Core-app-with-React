import {React,useState,useRef} from "react";
import ReCAPTCHA from "react-google-recaptcha"
import Cookies from 'js-cookie'

{/* dingen die nog moeten gebeuren als we mails kunnen versturen:
	- Gebruikers kunnen 2FA instellen. 
*/}
async function LoginUser(credentials) {
	return fetch('https://localhost:7117/api/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	}).then(data => data.json())
}

async function reCaptchaVerify(token){
	return fetch ("https://localhost:7117/api/recaptcha/verifieer",{
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	  },
	body:JSON.stringify(token)
	}).then(data => data.json());

}

export let IngelogdeGebruiker; 
export default function Inlogpagina() {
	const [WachtwoordWeergaaf, setWachtwoordWeergaaf] = useState(false);
  	const ToggleWachtwoord = () => {setWachtwoordWeergaaf(!WachtwoordWeergaaf);};

	const [Email, setEmail] = useState('.');
  	const [Password, setPassword] = useState('.');
	const [IngelogdBlijven, setIngelogdBlijven] = useState();
	const [Alert, setAlert] = useState();
	const CaptchaRef = useRef(null)

  const handleSubmit = async e => {
    e.preventDefault();
	let Token = CaptchaRef.current.getValue();
	CaptchaRef.current.reset();

	if(Token.length>100){
		let AntwoordCaptchaVerify = await reCaptchaVerify(Token);
		console.log(AntwoordCaptchaVerify.isSuccessStatusCode)
		if (AntwoordCaptchaVerify.isSuccessStatusCode) {
			const response = await LoginUser({
				Email: Email,
				Password
			});
			if ('accessToken' in response) {
				IngelogdeGebruiker = response;
				if(IngelogdBlijven ===undefined){
					sessionStorage.setItem('IngelogdeGebruiker', JSON.stringify(response));
					 window.dispatchEvent(new Event("SessionIngelogdeGebruiker"));
				}else{
					Cookies.set('IngelogdeGebruiker', JSON.stringify(response), { expires: 0.125 })
					// localStorage.setItem('IngelogdeGebruiker', JSON.stringify(response));
					window.dispatchEvent(new Event("IngelogdeGebruiker"));
				}
				window.location.href = "/"+(response["roles"].toString()).toLowerCase();
			} else {
				setAlert(<div className="alert alert-danger mb-3 mt-3" role="alert">{response.message}  </div>)
			}
		}else{
			setAlert(<div className="alert alert-danger mb-3 mt-3" role="alert">Onverwachte error</div>)
		}
	
	}else{
		setAlert(<div className="alert alert-danger mb-3 mt-3" role="alert">Inlogpoging is mislukt, u moet zich eerst verifieren dat u geen robot bent </div>)
	}  	
  }

	return (
			<main className="m-5">	
				<form className="row g-3" onSubmit={handleSubmit} >	   
				    {Alert}
					<div>
						<div className="m-3">
							<label htmlFor="Email" className="form-label">Email (verplicht)</label>
							<input type="email" className="form-control" required autoComplete="Email" id="Email" placeholder="Voer hier email in"  onChange={e => setEmail(e.target.value)}/>
						</div>

						<div className="m-3">
							<label htmlFor="Wachtwoord" className="form-label">Wachtwoord  (verplicht)</label>
							<input id="Wachtwoord" type={WachtwoordWeergaaf ? "text" : "password"} className="form-control" required autoComplete="current-password" placeholder="Voer hier uw wachtwoord in"  onChange={e => setPassword(e.target.value)}/>
						</div>
						
						<div className="m-3">
							<img src="./show-password.png" width={40} onClick={ToggleWachtwoord} alt="Icon om wachtwoord weer te geven bij opclick"/>
						</div>
					

			
						<div className="m-3">
							<input type="checkbox" className="form-check-input ml-3" onChange={(e)=>{setIngelogdBlijven(e.target.value)}}/>
							<label htmlFor="BlijvenIngelogd" className="form-label ">Gegevens onthouden </label>
						</div>

						<div className="m-3">
							<label htmlFor="WachtwoordVergeten" className="form-label" style={{marginRight: "10px"}}>Wachtwoord Vergeten?</label>
							<a href="/wachtwoord/vergeten" id="WachtwoordVergeten" >Klik hier</a>		
						</div>

						<div className="col-md-6 mt-3">
							<label htmlFor="VerficatieChecker" className="form-label">Verifieer dat u geen robot bent: (verplicht)</label>
							<ReCAPTCHA id="VerficatieChecker" sitekey={"6Le4DhskAAAAAE2CWj-lmqLl5hEDbMILq0lFDhWr"} ref={CaptchaRef} />
						</div>


						<div className="flex">
								<a href="/registreren" className="btn btn-light w-50 m-3">Account aanmaken</a>	
								<button className="btn btn-blauw w-50 m-3" type="submit" id="InloggenKnop">Inloggen</button>
						</div>
					</div>				
				</form>	
			</main>
		);
		
	
	}	
