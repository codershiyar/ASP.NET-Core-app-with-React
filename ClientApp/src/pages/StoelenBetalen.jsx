import React, { useState } from "react";
import ICalendarLink from "react-icalendar-link";

export default function ReserveerStoel() {
let [Amount, SetAmount] = useState(10);
let [Reference, SetReference] = useState("id243")
let [Url, SetUrl] = useState(window.location.origin+"/stoelenbetalen?status=sucess&Id"+Reference)
let [ApiAntwoord, SetApiAntwoord] = useState(<></>)


let TicketGegevens = JSON.parse(sessionStorage.getItem("TicketGegevens"));

const event = {
	title: TicketGegevens.Voorstelling,
	description: "Omschrijving",
	startTime: "2023-02-14T10:00:00",
	endTime: "2023-02-14T12:00:00",
	location: "Theater Laak",
};

	return (
        <main className="container m-5">
			<ul class="breadcrumb">
				<li><a href="https://localhost:44493/home">Homepagina</a></li>
				<li><a href="https://localhost:44493/dagselecteren">Kalender</a></li>
				<li><a href="https://localhost:44493/reserverenstoel">Stoel Selecteren</a></li>
				<li>Betalen</li>
        	</ul>

            <form action="https://fakepay.azurewebsites.net" method="post">	 

					<div>
						<label htmlFor="Voorstelling" className="form-label">Voorstelling {TicketGegevens.Voorstelling}</label>
						<input type="hidden" id="Voorstelling" name="Voorstelling" value={TicketGegevens.Voorstelling}/>
					</div>

					<div>
						<label htmlFor="Amount" className="form-label">Kosten {Amount}</label>
						<input type="hidden" id="Amount" name="amount" value={Amount}/>
					</div>

					<div>
						<label htmlFor="Amount" className="form-label">Reference {Reference}</label>
						<input type="hidden" id="Reference" name="reference" value={Reference}/>
					</div>

					<div>
						<label htmlFor="Url" className="form-label">Url {Url}</label>
						<input type="hidden" id="Url" name="url" value={Url}/>
					</div>


					<div >
						<button className="btn btn-blauw  m-3" >Betalen</button>
                        {/*naar de betalings API posten*/}
						<br></br>
						<hr></hr>
						{ApiAntwoord}

						<ICalendarLink event={event}>
							Voeg reservering aan kalender toe.
						</ICalendarLink>
					
				</div>				
			</form>
        </main>
    )
}
