//chiedo nome e salvo in variabile
var nome = prompt("Dimmi il tuo nome");
console.log(nome);

//stampo nome nel Dom nell'elemento con id name
document.getElementById('name').innerHTML = "NOME: " + nome;

//chiedo cognome e salvo in variabile
var cognome = prompt("Dimmi il tuo cognome")
console.log(cognome);

//stampo cognome nel Dom nell'elemento con id surname
document.getElementById('surname').innerHTML = "COGNOME: " + cognome;

//chiedo colore preferito e salvo in variabile
var colore = prompt("Dimmi il tuo colore preferito")
console.log(colore);

//stampo colore preferito nel Dom nell'elemento con id favourite-color
document.getElementById('favourite-color').innerHTML = "COLORE PREFERITO: " + colore;

//chiedo anno e salvo in variabile
var anno = prompt("Dimmi le ultime due cifre del tuo anno di nascita")
console.log(anno);

//stampo anno nel Dom nell'elemento con id year
document.getElementById('year').innerHTML = "ANNO DI NASCITA: " + anno;


//creo password unendo le quattro variabili
var password = nome + cognome + colore + anno;

//stampo password nel DOM nell'elemento con id new-password
document.getElementById('new-password').innerHTML = "La tua nuova password è: " + password;
