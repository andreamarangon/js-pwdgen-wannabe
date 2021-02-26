//chiedo nome e salvo in variabile
var nome = prompt("Dimmi il tuo nome");
console.log(nome);

//chiedo cognome e salvo in variabile
var cognome = prompt("Dimmi il tuo cognome")
console.log(cognome);

//chiedo colore preferito e salvo in variabile
var colore = prompt("Dimmi il tuo colore preferito")
console.log(colore);

//creo password unendo le tre variabili
var password = nome + cognome + colore + 21;

//stampo password nel DOM nell'elemento con id new-password
document.getElementById('new-password').innerHTML = "La tua nuova password è: " + password;
