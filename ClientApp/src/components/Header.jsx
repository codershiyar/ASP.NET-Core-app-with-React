import React, { useEffect, useState } from "react";
import style from "../style.css";
import Uitlogknop from "./Uitlogknop";
import Cookies from "js-cookie";

export default function Header() {
	let [IngelogdeGebruiker, setIngelogdeGebruiker] = useState(
		Cookies.get("IngelogdeGebruiker") != null
			? JSON.parse(Cookies.get("IngelogdeGebruiker"))
			: JSON.parse(sessionStorage.getItem("IngelogdeGebruiker"))
	);
	window.addEventListener("IngelogdeGebruiker", () => {
		setIngelogdeGebruiker(JSON.parse(Cookies.get("IngelogdeGebruiker")));
	});

	window.addEventListener("SessionIngelogdeGebruiker", () => {
		setIngelogdeGebruiker(
			JSON.parse(sessionStorage.getItem("IngelogdeGebruiker"))
		);
	});

	let NavItemsPerRole = {
		Beheerder: [
			"Artiesten",
			"Gebruikers",
			"Reserveringen",
			"Ruimtes",
			"Tickets",
			"Voorstellingen",
			"Zalen",
			"Profiel",
		],
		Gebruiker: [
			"Home",
			"Doneren",
			"Voorstellingen",
			"Profiel",
			"Tickets",
			"Reserveringen",
		],
		Medewerker: [
			"Artiesten",
			"Reserveringen",
			"Zalen",
			"Tickets",
			"Profiel",
		],
		Bezoeker: ["Home", "Doneren", "Registreren", "Inloggen"],
	};

	let NavItems = (props) => {
		return NavItemsPerRole[props.Role].map((NavItem, Index) => {
			let NavItemPath = "/" + NavItem.toString().toLowerCase();
			return (
				<li
					className="nav-item"
					key={Index}>
					{window.location.pathname === NavItemPath ? (
						<a
							className="nav-link active"
							aria-current={NavItem}
							href={NavItemPath}>
							{NavItem}
						</a>
					) : (
						<a
							className="nav-link"
							href={NavItemPath}>
							{NavItem}
						</a>
					)}
				</li>
			);
		});
	};
	let UitloggenKnop = () => {
		return IngelogdeGebruiker != null ? <Uitlogknop /> : "";
	};

	return (
		<nav
			className="navbar bg-light"
			aria-label="MenuLabel">
			<div className="container">
				<a
					className="navbar-brand"
					href="/">
					<img
						src="logo-laaktheater.png"
						alt="Logo van theater Laak, hij bevat een rode vierkant en erin zit het woord Laak met wittekleur en er onderin staat het woord Theader in rode kleur"
						width="65"
					/>
					<span>
						{" "}
						{IngelogdeGebruiker != null ? (
							<>Welkom {IngelogdeGebruiker.naam}</>
						) : (
							""
						)}
					</span>
				</a>
				<ul
					className="nav"
					id="MenuLabel">
					<NavItems
						Role={
							IngelogdeGebruiker != null
								? IngelogdeGebruiker.roles[0]
								: "Bezoeker"
						}
					/>
					<UitloggenKnop />
				</ul>
			</div>
		</nav>
	);
}
