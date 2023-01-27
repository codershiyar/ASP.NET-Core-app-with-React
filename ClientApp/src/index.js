import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound"
import Header from "./components/Header";
import Footer from "./components/Footer";

import Homepagina from "./pages/Homepagina";
import Inlogpagina from "./pages/Inlogpagina";
import Registreerpagina from "./pages/Registreerpagina";
import WWVergeten from "./pages/Wachtwoordvergetenemail";
import WWVergetennaemail from "./pages//Wachtwoordvergeten";
import ReseveerZaal from "./pages/Stoelenkalender";

import Doneerpagina from "./pages/Doneerpagina";
import Begunstigersportaal from "./pages/Begunstigersportaal";
import Profiel from "./pages/Profiel";
import ProfielBewerken from "./pages/ProfielBewerken";
import ReserveerStoelen from "./pages/Reserveer-Stoelen";

import MedewerkerPortaal from "./pages/Medewerkersportaal";
import GebruikersPortaal from "./pages/Gebruikerspagina";

import ArtiestWeergaven from "./pages/ArtiestWeergeven";
import ArtiestBewerken from "./pages/ArtiestBewerken";

import Beheerderspagina from "./pages/Beheerderspagina";

import StoelenBetalen from "./pages/StoelenBetalen";



import { VoorstellingenWeergeven, VoorstellingBeheren, VoorstellingToevoegen } from "./pages/Voorstellingen";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
	<>
		<Header />
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepagina />} />
				<Route path="/home" element={<Homepagina />} />
				<Route path="/dagselecteren" element={<ReseveerZaal />}/>
				<Route path="/stoelenbetalen" element={<StoelenBetalen />} />
				<Route path="/inloggen" element={<Inlogpagina />} />
				<Route path="/registreren" element={<Registreerpagina />} />
				<Route path="/wachtwoord/vergeten" element={<WWVergeten />}/>
				<Route path="/Wachtwoord/aanpassen" element={<WWVergetennaemail />}/>
				<Route path="/doneren" element={<Doneerpagina />} />
				<Route path="/doneren/begunstigersportaal" element={<Begunstigersportaal />}/>
				<Route path="/reserverenstoel" element={<ReserveerStoelen />}/>				
				<Route path="/profiel" element={<Profiel />} />
				<Route path="/profiel/bewerken" element={<ProfielBewerken />} />
				<Route path="/gebruiker" element={<GebruikersPortaal />} />
				<Route path="/medewerker" element={<MedewerkerPortaal />} />
				<Route path="/artiesten" element={<ArtiestWeergaven />}/>
				<Route path="/artiesten/bewerken" element={<ArtiestBewerken />}/>
                <Route path="/beheerder" element={<Beheerderspagina />} />
                <Route path="/voorstellingen" element={<VoorstellingenWeergeven />} />
                <Route path="/voorstellingen/beheren/*"  element={<VoorstellingBeheren />} />
                <Route path="/voorstellingen/toevoegen" element={<VoorstellingToevoegen />} />
				<Route path="*" element={<NotFound/>} ></Route>
			</Routes>
			
		</BrowserRouter>
		<Footer />
	</>
);
