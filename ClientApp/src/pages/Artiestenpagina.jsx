import React, { Component } from "react";
import "./../../Custom.css";

export default function ArtiestenPagina() {
	return (
        <div className="vormzonderrand">
            <ul className="list-unstyled">
                <h1 className="display-4">Hallo 'Naam'</h1>
                <li>Je groepen/bands/toneelgezelschappen</li>
                <li>Voor testen wat willekeurige bands</li>
                <ul>
                    <li>The Beatles</li>
                    <li>Snollebollekes</li>
                    <li>Band 1</li>
                    <li>Band 2</li>
                </ul>
            </ul>
            <button>Groepssamenstelling aanpassen</button>
            <input id="Groepssamenstelling" hidden placeholder="Wat is de naam van de groep, band of toneelgezelschap?"/>
            <button id="Groepssamenstelling" hidden className="btn btn-success">Samenstelling verhogen</button>
            <button id="Groepssamenstelling" hidden className="btn btn-blauw">Samenstelling verlagen</button>
            <label placeholder="Wilt u zich toevoegen aan een groep, band of toneelgezelschap?"/>
            <input placeholder="Wat is de naam van de groep, band of toneelgezelschap?"/>
            <button>Toevoegen</button>
            <label placeholder="Wilt u zich verwijderen uit een groep, band of toneelgezelschap?"/>
            <button>Verwijderen</button>
        </div>
    )
}