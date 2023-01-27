
import {React,useState,} from "react";

async function wwveranderen() {
    let dataOpvragen = await fetch('https://groep-8-theather-laak.netlify.app/api/veranderwachtwoord')
    alert(dataOpvragen);
}

export default function WWVergetennaemail() {
    const [passwordShown, setPasswordShown] = useState(false);
  	const togglePassword = () => {
    setPasswordShown(!passwordShown);
  	};
	return (
        <div id="vorm">
            <div>
                <label htmlFor="WachtwoordInput" className="form-label">
                    voer een nieuw wachtwoord in*
                </label>
                <input type={passwordShown ? "text" : "password"} className="form-control" required id="WachtwoordInput" placeholder="Voer hier uw wachtwoord in"/>
                <label htmlFor="WachtwoordInput" className="form-label">
                voer het wachtwoord opnieuw in*
                </label>
                <input type={passwordShown ? "text" : "password"} className="form-control" required id="WachtwoordInput" placeholder="Voer hier opnieuw het wachtwoord in"/>
                <button onClick={togglePassword}>Toon wachtwoord</button>
                <button onClick={wwveranderen}>Wachtwoord veranderen</button>
            </div>
        </div>
    )
}