import React, { Component } from "react";
import Calendar from 'react-calendar'
import useWebSocket from 'react-use-websocket';

function Kalender() {
    const [value, onChange] = useState(new Date());
  
    return (
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    );
}
async function dataOpvragen() {
  let dataOpvragen = await fetch('./api/ruimtes/getBeschikbareRuimtes');
  return dataOpvragen;
}

export default function ReseveerZaal() {

  let datadb = {dataOpvragen} 
  const data =[datadb];
  const listItems = data.map((d) =><div id={d.ID}><input type="checkbox"/> <li>ruimte {d.ID}, Capaciteit {d.Capaciteit}, ruimte geschikt voor {d.WaarvoorGeschikt}</li></div>);

  return (
        <div>
            <h1>Zalen reserveren</h1>
            <label>Kies hier de dag dat u een zaal wilt reserveren.</label>
            <Kalender/>
            <label>De zalen die op die dag beschikbaar zijn</label>
            <label>Selecteer de zalen die u wilt reserveren</label>
            <form>
                {listItems}
                <input type="email" placeholder="Voer hier u E-mail in" required/>
                <button>Zalen reserveren</button>
            </form>
        </div>
    )
}