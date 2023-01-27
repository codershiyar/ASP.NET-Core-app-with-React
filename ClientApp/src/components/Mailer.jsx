import emailjs from '@emailjs/browser';
// Structuur
// emailjs.send(serviceID, templateID, templateParams, publicKey);
export const RegistrerenBericht = "U heeft zich met success geregistreerd bij Theater Laak. <br> U kunt nu inloggen bij Theater Laak"
export function StuurBericht(Bericht,Email,Naam) {
    emailjs.send("service_sezpxto", "template_ditwoaa", {from_name:"Theater Laak", message: Bericht, to_email :Email, to_name: Naam}, "ev3uV1YH6opgQiHFH");
}

// Om te gebruiken voor email te sturen bijvoorbeeld bij registreren of wachtwoord reseten
// emailjs.send("service_sezpxto", "template_ditwoaa", {message: "Test", to_email : "codershiyar@gmail.com", to_name: "Shiyar"}, "ev3uV1YH6opgQiHFH");