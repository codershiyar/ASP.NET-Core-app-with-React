import React from "react";

export default function NotFound() {
let Locatie = window.location.href;
 return(
        <main className="container mt-5">
           <div className="notfound-card">
               <a >404 Ongeldige URL</a >
             <hr></hr>
               <p> U hebt bereikt:</p>
               <p> {Locatie}</p>
            <hr></hr>
               <p> U wordt binnen 3 seconden doorgestuurd naar de homepagina</p>
           </div>

           {setTimeout(()=>{ window.location.replace("/");  },3000)}
           </main>
           )
}
