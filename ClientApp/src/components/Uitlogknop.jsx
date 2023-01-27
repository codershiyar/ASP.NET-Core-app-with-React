import React from "react";
import Cookies from 'js-cookie'

export let LogUit = () => {
	// localStorage.removeItem("IngelogdeGebruiker");
	Cookies.remove('IngelogdeGebruiker')
	sessionStorage.removeItem("IngelogdeGebruiker");
	window.location.href = "/inloggen";
};

export default function Uitlogknop() {

    
	return (
		<li className="nav-item">
			<button type="button" className="btn btn-light" onClick={LogUit}>Uitloggen</button>
		</li>
	);
}
