import {StuurBericht} from "../components/Mailer";

async function emailsturen() {
    var naam = document.getElementById('naam');
    var email = document.getElementById('email');
    let dataOpvragen = await fetch('https://groep-8-theather-laak.netlify.app/api/getuser' + email)
    var token = await fetch('https://groep-8-theather-laak.netlify.app/api/gettoken' + dataOpvragen)
    var link = "https://groep-8-theather-laak.netlify.app/Wachtwoord/Aanpassen?email=" + email + "&token=" + token;
	StuurBericht(("Klik op de link om uw wachtwoord aan te passen. " + <a href={link}>Wachtwoord aanpassen.</a>),email,naam);
    return alert("De E-mail is succesvol verstuurt");
}



export default function WWVergeten() {

    return (
        <main className="container mt-5">
            <form>

        <div className="mb-3">
			<label className="form-label" htmlFor="Naam">Naam: (verplicht)</label>
			<input type="text" className="form-control" required placeholder="Voer hier uw naam in" id="Naam"/>
		</div>

        <div className="mb-3">
	        <label className="form-label" htmlFor="EmailAdres">Emailadres: (verplicht)</label>
	        <input type="email" className="form-control" required placeholder="Voer hier uw e-mailadres in" id="EmailAdres"/>
        </div>
        <div>
            <button className="btn-blauw btn w-100 mt-3" onClick={emailsturen}>Email sturen</button>
        </div>
            </form>
        </main>
    )
}	