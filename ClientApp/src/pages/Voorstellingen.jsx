import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function VoorstellingenWeergeven() {
	const [data, setData] = useState([]);

	useEffect(() => {
		async function getData() {
			const data = await getVoorstellingen();
			setData(data);
		}
		getData();
	}, []);

	return (
		<>
			<a id="Toevoegen" href="voorstellingen/toevoegen" className="btn btn-dark">
				Toevoegen
			</a>
			<table className="table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Titel</th>
						<th>Omschrijving</th>
						<th>Prijs</th>
						<th>VoorstellingDatumEnTijd</th>
						<th>VoorstellingZaal</th>
						<th>Artiesten</th>
						<th>Beheren</th>
						<th>Verwijderen</th>
					</tr>
				</thead>
				<tbody>
					{data.map((voorstelling) => (
						<tr key={voorstelling.id}>
							<td>{voorstelling.id}</td>
							<td>{voorstelling.titel}</td>
							<td>{voorstelling.omschrijving}</td>
							<td>{voorstelling.prijs}</td>
							<td>{voorstelling.voorstellingDatumEnTijd}</td>
							<td>{voorstelling.voorstellingZaal}</td>
							<td>{voorstelling.artiesten}</td>
							<td>
								<a
									href={`/voorstellingen/beheren/${voorstelling.id}`}
									className="btn btn-secondary">
									⚙
								</a>
							</td>
							<td>
								<button
									className="btn btn-blauw"
									onClick={() => {
										deleteVoorstelling(voorstelling.id);
										window.location.reload();
									}}>
									🗑
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export function VoorstellingBeheren() {
	const [data, setData] = useState(null);
	var url = useLocation().pathname.split("/");

	const [id, setId] = useState();
	const [titel, setTitel] = useState();
	const [omschrijving, setOmschrijving] = useState();
	const [prijs, setPrijs] = useState();
	const [datumEnTijdBegin, setDatumEnTijdBegin] = useState();
	const [datumEnTijdEind, setDatumEnTijdEind] = useState();
	const [zaal, setZaal] = useState();
	const [artiesten, setArtiesten] = useState();

	useEffect(() => {
		async function getData() {
			const data = await getVoorstelling(url[url.length - 1]);
			setData(data);
		}
		getData();
	}, []);

	useEffect(() => {
		if (data != null) {
			setId(data.id);
			setTitel(data.titel);
			setOmschrijving(data.omschrijving);
			setPrijs(data.prijs);
			if (data.voorstellingDatumEnTijd != null) {
				setDatumEnTijdBegin(String(data.voorstellingDatumEnTijd.Begin));
				setDatumEnTijdEind(String(data.voorstellingDatumEnTijd.Eind));
			}
			setZaal(data.zaal);
			setArtiesten(data.artiesten);
		}
	}, [data]);

	return data === null ? (
		<>Aan het laden</>
	) : (
		<>
			<label htmlFor="id">ID</label>
			<input
				id="id"
				defaultValue={id === null ? "" : id}
				onChange={(e) => setId(e.target.value)}
				type="number"
				required
			/>
			<br />
			<label htmlFor="titel">Titel</label>
			<input
				id="titel"
				defaultValue={titel === null ? "" : titel}
				onChange={(e) => setTitel(e.target.value)}
				type="text"
				required
			/>
			<br />
			<label htmlFor="omschrijving">Omschrijving</label>
			<input
				id="omschrijving"
				defaultValue={omschrijving === null ? "" : omschrijving}
				onChange={(e) => setOmschrijving(e.target.value)}
				type="text"
				required
			/>
			<br />
			<label htmlFor="prijs">Prijs</label>
			<input
				id="prijs"
				defaultValue={prijs === null ? "" : prijs}
				onChange={(e) => setPrijs(e.target.value)}
				type="number"
				required
			/>
			<br />
			<label htmlFor="datumEnTijdBegin">Begindatum en -tijd</label>
			<input
				id="datumEnTijdBegin"
				defaultValue={datumEnTijdBegin === null ? "" : datumEnTijdBegin}
				onChange={(e) => setDatumEnTijdBegin(e.target.value)}
				type="datetime"
				required
			/>
			<br />
			<label htmlFor="datumEnTijdEind">Einddatum en -tijd</label>
			<input
				id="datumEnTijdEind"
				defaultValue={datumEnTijdEind === null ? "" : datumEnTijdEind}
				onChange={(e) => setDatumEnTijdEind(e.target.value)}
				type="datetime"
				required
			/>
			<br />
			<label htmlFor="zaal">Zaal ID</label>
			<input
				id="zaal"
				defaultValue={zaal === null ? "" : zaal}
				onChange={(e) => setZaal(e.target.value)}
				type="number"
				required
			/>
			<br />
			<label htmlFor="artiesten">Artiesten ID</label>
			<input
				id="artiesten"
				defaultValue={artiesten === null ? "" : artiesten}
				onChange={(e) => setArtiesten(e.target.value)}
				type="number"
				required
			/>
			<br />
			<button
				className="btn btn-dark"
				onClick={() => {
					editVoorstelling(data.id, {
						id: id,
						titel: titel,
						omschrijving: omschrijving,
						prijs: prijs,
						voorstellingDatumEnTijd:
							datumEnTijdBegin + "-" + datumEnTijdEind,
						voorstellingZaal: zaal,
						artiesten: artiesten,
					});
				
				}}>
				Opslaan
			</button>
		</>
	);
}

export function VoorstellingToevoegen() {
	const [titel, setTitel] = useState();
	const [omschrijving, setOmschrijving] = useState();
	const [prijs, setPrijs] = useState();
	const [datumEnTijdBegin, setDatumEnTijdBegin] = useState();
	const [datumEnTijdEind, setDatumEnTijdEind] = useState();
	let HandleSubmit = (e)=>{
		e.preventDefault();
		addVoorstelling({
			titel: titel,
			omschrijving: omschrijving,
			prijs: parseInt(prijs),
			voorstellingDatumEnTijd: null,
			voorstellingDatumEnTijd: {
				Begin: new Date(datumEnTijdBegin),
				Eind: new Date(datumEnTijdEind),
			},
		});

	}
	return (
		<>
			<form className="container mt-3" onSubmit={HandleSubmit}>
		<div className="mb-3">
			<label htmlFor="titel">Titel</label>
			<input
				id="Titel"
				className="form-control"
				onChange={(e) => setTitel(e.target.value)}
				type="text"
				required
			/>
			</div>
			<div className="mb-3">
			<label htmlFor="Omschrijving">Omschrijving</label>
			<input
				id="Omschrijving"
				className="form-control"
				onChange={(e) => setOmschrijving(e.target.value)}
				type="text"
				required
			/>
			</div>
			<div className="mb-3">
			<label htmlFor="Prijs">Prijs</label>
			<input
				id="Prijs"
				className="form-control"
				onChange={(e) => setPrijs(e.target.value)}
				type="number"
				required
			/>
			</div>
			<div className="mb-3">
			<label htmlFor="DatumEnTijdBegin">Begindatum en -tijd</label>
			<input  className="form-control"
				id="DatumEnTijdBegin"
				defaultValue={datumEnTijdBegin === null ? "" : datumEnTijdBegin}
				onChange={(e) => setDatumEnTijdBegin(e.target.value)}
				type="datetime-local"
				required
			/>
			</div>

			<div className="mb-3">
				<label htmlFor="DatumEnTijdEind">Einddatum en -tijd</label>
				<input className="form-control"
					id="DatumEnTijdEind"
					onChange={(e) => setDatumEnTijdEind(e.target.value)}
					type="datetime-local"
					required 
					/>
				
			</div>
			<br />
			<button id="Opslaan" className="btn btn-dark w-100">
				Opslaan
			</button>
			</form>
		</>
	);
}

async function getVoorstellingen() {
	const response = await fetch("https://localhost:7117/api/voorstellingen");
	const data = await response.json();
	return data;
}

async function getVoorstelling(id) {
	const response = await fetch(
		`https://localhost:7117/api/voorstellingen/${id}`
	);
	const data = await response.json();
	return data;
}

async function editVoorstelling(id, voorstelling) {
	await fetch(`https://localhost:7117/api/voorstellingen/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(voorstelling),
	});
	window.history.back();
}

async function addVoorstelling(voorstelling) {
	await fetch("https://localhost:7117/api/voorstellingen", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(voorstelling),
	});
	window.history.back();
}

async function deleteVoorstelling(id) {
await fetch(`https://localhost:7117/api/voorstellingen/${id}`, {
		method: "DELETE",
});

}
