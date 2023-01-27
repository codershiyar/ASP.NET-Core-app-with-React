import React,{ useEffect, useState } from "react";
import "./../Custom.css";
import SeatPicker from "react-seat-picker";

async function rijen() {
	let dataOpvragen = await fetch("./Controllers/api/zaal/getStoelenInRuimte/" + 1);
	const rijen = (await dataOpvragen.length) / 10;
	return rijen;
}

async function Stoelentabel() {
	let dataOpvragen = await fetch(
		"./Controllers/api/zaal/getStoelenInRuimte/" + 1
	);
	return (
		// dataOpvragen.map(dataOpvragen => {

		//     for (let i = 1; i <= 3; i++) {

		//         for (let j = 1; j <= 10; j++) {
		//         }
		//     }
		//     JSON.stringify(dataOpvragen)
		// })
		dataOpvragen.map((dataOpvragen) => {
			for (let i = 1; i <= 3; i++) {
				<input type="checkbox" />;
				for (let j = 1; j <= 10; j++) {
					<input type="checkbox" />;
				}
			}
		})
	);
}

export default function ReserveerStoel(){
		
	const [Positie, setPositie] = useState(0);
	const [StoelId, setStoelId] = useState();

	var link = window.location.origin + "/stoelenbetalen";
	sessionStorage.setItem("TicketGegevens", 
	JSON.stringify({Voorstelling:"Delftaren Heros",
	Zaal:"B1",
	stoel: Positie,
})
	)
		let addSeatCallback = ({ row, number, id }, addCb) => {
			console.log({ row, number, id })
			setPositie(number)
			addCb(row, number, id, async () => { 
				setStoelId(id)
			})
			  
		  }
		const rows = [
			[
				{tooltip: '1ste rang', id: 1, number: 1, isReserved: false },
				{tooltip: '1ste rang', id: 2, number: 2, isReserved: false },
				{tooltip: '1ste rang', id: 3, number: 3, isReserved: false },
				{tooltip: '1ste rang', id: 4, number: 4, isReserved: false },
				{tooltip: '1ste rang', id: 5, number: 5, isReserved: false },
				{tooltip: '1ste rang', id: 6, number: 6, isReserved: false },
				{tooltip: '1ste rang', id: 7, number: 7, isReserved: false },
				{tooltip: '1ste rang', id: 8, number: 8, isReserved: false },
				{tooltip: '1ste rang', id: 9, number: 9, isReserved: false },
				{tooltip: '1ste rang', id: 10, number: 10, isReserved: false },
				{tooltip: '1ste rang', id: 11, number: 11, isReserved: false },
				{tooltip: '1ste rang', id: 12, number: 12, isReserved: false },
				{tooltip: '1ste rang', id: 13, number: 13, isReserved: false },
				{tooltip: '1ste rang', id: 14, number: 14, isReserved: false },
				{tooltip: '1ste rang', id: 15, number: 15, isReserved: false },
				{tooltip: '1ste rang', id: 16, number: 16, isReserved: false },
				{tooltip: '1ste rang', id: 17, number: 17, isReserved: false },
				{tooltip: '1ste rang', id: 18, number: 18, isReserved: false },
				{tooltip: '1ste rang', id: 19, number: 19, isReserved: false },
				{tooltip: '1ste rang', id: 20, number: 20, isReserved: false }
			],
			[
				{tooltip: '1ste rang', id: 21, number: 21, isReserved: false },
				{tooltip: '1ste rang', id: 22, number: 22, isReserved: false },
				{tooltip: '1ste rang', id: 23, number: 23, isReserved: false },
				{tooltip: '1ste rang', id: 24, number: 24, isReserved: false },
				{tooltip: '1ste rang', id: 25, number: 25, isReserved: false },
				{tooltip: '1ste rang', id: 26, number: 26, isReserved: false },
				{tooltip: '1ste rang', id: 27, number: 27, isReserved: false },
				{tooltip: '1ste rang', id: 28, number: 28, isReserved: false },
				{tooltip: '1ste rang', id: 29, number: 29, isReserved: false },
				{tooltip: '1ste rang', id: 30, number: 30, isReserved: false },
				{tooltip: '1ste rang', id: 31, number: 31, isReserved: false },
				{tooltip: '1ste rang', id: 32, number: 32, isReserved: false },
				{tooltip: '1ste rang', id: 33, number: 33, isReserved: false },
				{tooltip: '1ste rang', id: 34, number: 34, isReserved: false },
				{tooltip: '1ste rang', id: 35, number: 35, isReserved: false },
				{tooltip: '1ste rang', id: 36, number: 36, isReserved: false },
				{tooltip: '1ste rang', id: 37, number: 37, isReserved: false },
				{tooltip: '1ste rang', id: 38, number: 38, isReserved: false },
				{tooltip: '1ste rang', id: 39, number: 39, isReserved: false },
				{tooltip: '1ste rang', id: 40, number: 40, isReserved: false }
			],
			[
				{tooltip: '2de rang', id: 41, number: 41, isReserved: false },
				{tooltip: '2de rang', id: 42, number: 42, isReserved: false },
				{tooltip: '2de rang', id: 43, number: 43, isReserved: false },
				{tooltip: '2de rang', id: 44, number: 44, isReserved: false },
				{tooltip: '2de rang', id: 45, number: 45, isReserved: false },
				{tooltip: '2de rang', id: 46, number: 46, isReserved: false },
				{tooltip: '2de rang', id: 47, number: 47, isReserved: false },
				{tooltip: '2de rang', id: 48, number: 48, isReserved: false },
				{tooltip: '2de rang', id: 49, number: 49, isReserved: false },
				{tooltip: '2de rang', id: 50, number: 50, isReserved: false },
				{tooltip: '2de rang', id: 51, number: 51, isReserved: false },
				{tooltip: '2de rang', id: 52, number: 52, isReserved: false },
				{tooltip: '2de rang', id: 53, number: 53, isReserved: false },
				{tooltip: '2de rang', id: 54, number: 54, isReserved: false },
				{tooltip: '2de rang', id: 55, number: 55, isReserved: false },
				{tooltip: '2de rang', id: 56, number: 56, isReserved: false },
				{tooltip: '2de rang', id: 57, number: 57, isReserved: false },
				{tooltip: '2de rang', id: 58, number: 58, isReserved: false },
				{tooltip: '2de rang', id: 59, number: 59, isReserved: false },
				{tooltip: '2de rang', id: 60, number: 60, isReserved: false },
			],
			[
				{tooltip: '2de rang', id: 61, number: 61, isReserved: false },
				{tooltip: '2de rang', id: 62, number: 62, isReserved: false },
				{tooltip: '2de rang', id: 63, number: 63, isReserved: false },
				{tooltip: '2de rang', id: 64, number: 64, isReserved: false },
				{tooltip: '2de rang', id: 65, number: 65, isReserved: false },
				{tooltip: '2de rang', id: 66, number: 66, isReserved: false },
				{tooltip: '2de rang', id: 67, number: 67, isReserved: false },
				{tooltip: '2de rang', id: 68, number: 68, isReserved: false },
				{tooltip: '2de rang', id: 69, number: 69, isReserved: false },
				{tooltip: '2de rang', id: 70, number: 70, isReserved: false },
				{tooltip: '2de rang', id: 71, number: 71, isReserved: false },
				{tooltip: '2de rang', id: 72, number: 72, isReserved: false },
				{tooltip: '2de rang', id: 73, number: 73, isReserved: false },
				{tooltip: '2de rang', id: 74, number: 74, isReserved: false },
				{tooltip: '2de rang', id: 75, number: 75, isReserved: false },
				{tooltip: '2de rang', id: 76, number: 76, isReserved: false },
				{tooltip: '2de rang', id: 77, number: 77, isReserved: false },
				{tooltip: '2de rang', id: 78, number: 78, isReserved: false },
				{tooltip: '2de rang', id: 79, number: 79, isReserved: false },
				{tooltip: '2de rang', id: 80, number: 80, isReserved: false }
			],
			[
				{tooltip: '2de rang', id: 81, number: 81, isReserved: false },
				{tooltip: '2de rang', id: 82, number: 82, isReserved: false },
				{tooltip: '2de rang', id: 83, number: 83, isReserved: false },
				{tooltip: '2de rang', id: 84, number: 84, isReserved: false },
				{tooltip: '2de rang', id: 85, number: 85, isReserved: false },
				{tooltip: '2de rang', id: 86, number: 86, isReserved: false },
				{tooltip: '2de rang', id: 87, number: 87, isReserved: false },
				{tooltip: '2de rang', id: 88, number: 88, isReserved: false },
				{tooltip: '2de rang', id: 89, number: 89, isReserved: false },
				{tooltip: '2de rang', id: 90, number: 90, isReserved: false },
				{tooltip: '2de rang', id: 91, number: 91, isReserved: false },
				{tooltip: '2de rang', id: 92, number: 92, isReserved: false },
				{tooltip: '2de rang', id: 93, number: 93, isReserved: false },
				{tooltip: '2de rang', id: 94, number: 94, isReserved: false },
				{tooltip: '2de rang', id: 95, number: 95, isReserved: false },
				{tooltip: '2de rang', id: 96, number: 96, isReserved: false },
				{tooltip: '2de rang', id: 97, number: 97, isReserved: false },
				{tooltip: '2de rang', id: 98, number: 98, isReserved: false },
				{tooltip: '2de rang', id: 99, number: 99, isReserved: false },
				{tooltip: '2de rang', id: 100, number: 100, isReserved: false },
			],
			[
				{tooltip: '2de rang', id: 101, number: 101, isReserved: false },
				{tooltip: '2de rang', id: 102, number: 102, isReserved: false },
				{tooltip: '2de rang', id: 103, number: 103, isReserved: false },
				{tooltip: '2de rang', id: 104, number: 104, isReserved: false },
				{tooltip: '2de rang', id: 105, number: 105, isReserved: false },
				{tooltip: '2de rang', id: 106, number: 106, isReserved: false },
				{tooltip: '2de rang', id: 107, number: 107, isReserved: false },
				{tooltip: '2de rang', id: 108, number: 108, isReserved: false },
				{tooltip: '2de rang', id: 109, number: 109, isReserved: false },
				{tooltip: '2de rang', id: 110, number: 110, isReserved: false },
				{tooltip: '2de rang', id: 111, number: 111, isReserved: false },
				{tooltip: '2de rang', id: 112, number: 112, isReserved: false },
				{tooltip: '2de rang', id: 113, number: 113, isReserved: false },
				{tooltip: '2de rang', id: 114, number: 114, isReserved: false },
				{tooltip: '2de rang', id: 115, number: 115, isReserved: false },
				{tooltip: '2de rang', id: 116, number: 116, isReserved: false },
				{tooltip: '2de rang', id: 117, number: 117, isReserved: false },
				{tooltip: '2de rang', id: 118, number: 118, isReserved: false },
				{tooltip: '2de rang', id: 119, number: 119, isReserved: false },
				{tooltip: '2de rang', id: 120, number: 120, isReserved: false }
			],
			[
				{tooltip: '3de rang', id: 121, number: 121, isReserved: false },
				{tooltip: '3de rang', id: 122, number: 122, isReserved: false },
				{tooltip: '3de rang', id: 123, number: 123, isReserved: false },
				{tooltip: '3de rang', id: 124, number: 124, isReserved: false },
				{tooltip: '3de rang', id: 125, number: 125, isReserved: false },
				{tooltip: '3de rang', id: 126, number: 126, isReserved: false },
				{tooltip: '3de rang', id: 127, number: 127, isReserved: false },
				{tooltip: '3de rang', id: 128, number: 128, isReserved: false },
				{tooltip: '3de rang', id: 129, number: 129, isReserved: false },
				{tooltip: '3de rang', id: 130, number: 130, isReserved: false },
				{tooltip: '3de rang', id: 131, number: 131, isReserved: false },
				{tooltip: '3de rang', id: 132, number: 132, isReserved: false },
				{tooltip: '3de rang', id: 133, number: 133, isReserved: false },
				{tooltip: '3de rang', id: 134, number: 134, isReserved: false },
				{tooltip: '3de rang', id: 135, number: 135, isReserved: false },
				{tooltip: '3de rang', id: 136, number: 136, isReserved: false },
				{tooltip: '3de rang', id: 137, number: 137, isReserved: false },
				{tooltip: '3de rang', id: 138, number: 138, isReserved: false },
				{tooltip: '3de rang', id: 139, number: 139, isReserved: false },
				{tooltip: '3de rang', id: 140, number: 140, isReserved: false }
			],
			[
				{tooltip: '3de rang', id: 141, number: 141, isReserved: false },
				{tooltip: '3de rang', id: 142, number: 142, isReserved: false },
				{tooltip: '3de rang', id: 143, number: 143, isReserved: false },
				{tooltip: '3de rang', id: 144, number: 144, isReserved: false },
				{tooltip: '3de rang', id: 145, number: 145, isReserved: false },
				{tooltip: '3de rang', id: 146, number: 146, isReserved: false },
				{tooltip: '3de rang', id: 147, number: 147, isReserved: false },
				{tooltip: '3de rang', id: 148, number: 148, isReserved: false },
				{tooltip: '3de rang', id: 149, number: 149, isReserved: false },
				{tooltip: '3de rang', id: 150, number: 150, isReserved: false },
				{tooltip: '3de rang', id: 151, number: 151, isReserved: false },
				{tooltip: '3de rang', id: 152, number: 152, isReserved: false },
				{tooltip: '3de rang', id: 153, number: 153, isReserved: false },
				{tooltip: '3de rang', id: 154, number: 154, isReserved: false },
				{tooltip: '3de rang', id: 155, number: 155, isReserved: false },
				{tooltip: '3de rang', id: 156, number: 156, isReserved: false },
				{tooltip: '3de rang', id: 157, number: 157, isReserved: false },
				{tooltip: '3de rang', id: 158, number: 158, isReserved: false },
				{tooltip: '3de rang', id: 159, number: 159, isReserved: false },
				{tooltip: '3de rang', id: 160, number: 160, isReserved: false }
			],
			[
				{tooltip: '3de rang', id: 161, number: 161, isReserved: false },
				{tooltip: '3de rang', id: 162, number: 162, isReserved: false },
				{tooltip: '3de rang', id: 163, number: 163, isReserved: false },
				{tooltip: '3de rang', id: 164, number: 164, isReserved: false },
				{tooltip: '3de rang', id: 165, number: 165, isReserved: false },
				{tooltip: '3de rang', id: 166, number: 166, isReserved: false },
				{tooltip: '3de rang', id: 167, number: 167, isReserved: false },
				{tooltip: '3de rang', id: 168, number: 168, isReserved: false },
				{tooltip: '3de rang', id: 169, number: 169, isReserved: false },
				{tooltip: '3de rang', id: 170, number: 170, isReserved: false },
				{tooltip: '3de rang', id: 171, number: 171, isReserved: false },
				{tooltip: '3de rang', id: 172, number: 172, isReserved: false },
				{tooltip: '3de rang', id: 173, number: 173, isReserved: false },
				{tooltip: '3de rang', id: 174, number: 174, isReserved: false },
				{tooltip: '3de rang', id: 175, number: 175, isReserved: false },
				{tooltip: '3de rang', id: 176, number: 176, isReserved: false },
				{tooltip: '3de rang', id: 177, number: 177, isReserved: false },
				{tooltip: '3de rang', id: 178, number: 178, isReserved: false },
				{tooltip: '3de rang', id: 179, number: 179, isReserved: false },
				{tooltip: '3de rang', id: 180, number: 180, isReserved: false }
			],
			[
				{tooltip: '3de rang', id: 181, number: 181, isReserved: false },
				{tooltip: '3de rang', id: 182, number: 182, isReserved: false },
				{tooltip: '3de rang', id: 183, number: 183, isReserved: false },
				{tooltip: '3de rang', id: 184, number: 184, isReserved: false },
				{tooltip: '3de rang', id: 185, number: 185, isReserved: false },
				{tooltip: '3de rang', id: 186, number: 186, isReserved: false },
				{tooltip: '3de rang', id: 187, number: 187, isReserved: false },
				{tooltip: '3de rang', id: 188, number: 188, isReserved: false },
				{tooltip: '3de rang', id: 189, number: 189, isReserved: false },
				{tooltip: '3de rang', id: 190, number: 190, isReserved: false },
				{tooltip: '3de rang', id: 191, number: 191, isReserved: false },
				{tooltip: '3de rang', id: 192, number: 192, isReserved: false },
				{tooltip: '3de rang', id: 193, number: 193, isReserved: false },
				{tooltip: '3de rang', id: 194, number: 194, isReserved: false },
				{tooltip: '3de rang', id: 195, number: 195, isReserved: false },
				{tooltip: '3de rang', id: 196, number: 196, isReserved: false },
				{tooltip: '3de rang', id: 197, number: 197, isReserved: false },
				{tooltip: '3de rang', id: 198, number: 198, isReserved: false },
				{tooltip: '3de rang', id: 199, number: 199, isReserved: false },
				{tooltip: '3de rang', id: 200, number: 200, isReserved: false }
			],
		];
		return (
			<div className="App">
				<ul class="breadcrumb">
					<li><a href="https://localhost:44493/home">Homepagina</a></li>
					<li><a href="https://localhost:44493/dagselecteren">Kalender</a></li>
					<li>Stoel Selecteren</li>
            	</ul>
				<h1 className="screen">Podium</h1>
				<SeatPicker
					addSeatCallback={addSeatCallback}
					rows={rows}
					maxReservableSeats={25}
					visible 
					continuous 
					/>

				<label>
					<button onClick={()=>{window.history.back()}} className="btn btn-light w-100 mt-5"> Terug naar home</button>
				</label>


				<label>
					<a href={link} className="btn btn-blauw w-100 mt-5"> Reserveer Stoel</a>
				</label>
 

				<div className="seat-select">
				</div>
			
			</div>
		);
}
