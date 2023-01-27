import React, { useState} from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

function Keuzes() {
  const [value, onChange] = useState(new Date());
  var [tijd, verandertijd] = useState();
  var datalink = window.location.href.split('?')
  var link = (window.location.href - window.location.pathname + "/reserverenstoel?" + datalink[2]) + "&dag=" + {value} + "&tijd=" + {tijd};
  return (
        <div>
            <div>
                <Calendar onChange={onChange} value={value} />
            </div>
            <select value={value} onChange={verandertijd={}}>
              <option value="10.00">10 uur 's ochtends</option>
              <option value="12.00">12 uur 's middags</option>
              <option value="14.00">2 uur 's middags</option>
              <option value="16.00">4 uur 's middags</option>
              <option value="18.00">6 uur 's middags</option>
              <option value="20.00">8 uur 's avonds</option>
              <option value="22.00">10 uur 's avonds</option>
            </select>
            <button>Stoelen selecteren <a href={link}></a></button>
        </div>
  )
}

export default function ReseveerZaal() {
  return (
        <div>
             <ul class="breadcrumb">
                <li><a href="https:/localhost:44493/home">Homepagina</a></li>
                <li>Kalender</li>
            </ul> 
            <label>Kies hier de dag dat u naar de voorstelling wilt gaan.</label>
            <Keuzes/>
            <label>De zalen die op die dag beschikbaar zijn voor de voorstelling</label>
            {/*Hier zalen ophalen als die in de database staan met een function in een List*/}
        </div>
    )
}