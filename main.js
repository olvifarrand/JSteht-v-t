// Teht 1,
// Päivämäärä
const d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

const h = new Date();
hour = h.getHours();

const m = new Date();
minute = m.getMinutes();

const s = new Date();
second = s.getSeconds();

kellonaika = hour + ':' + minute + ':' + second;
document.getElementById("aika").innerHTML = kellonaika;


// Teht 2, 
// Guessing game
let guessButton = document.getElementById('guessButton');
let vastaus = document.getElementById('vastaus');

  guessButton.onclick = function randomFunc() {
    let input = document.getElementById('numero').value;
    var randomnum = Math.floor(Math.random() * 10 +1);

    if (input == randomnum) {
        vastaus.innerHTML = "Oikein! :3"
    } else {
        vastaus.innerHTML = "Väärin! >:("
    }
  }


// Teht 3, 
// Multiply and divide
let kertobutton = document.getElementById('kertonappi');
let jakobutton = document.getElementById('jakonappi');

  kertobutton.onclick = function KertoLasku() {
    let numero1 = document.getElementById('ekaNum').value;
    let numero2 = document.getElementById('tokaNum').value;
    kertolasku = numero1 * numero2;
    tulos.innerHTML = kertolasku;
  }

  jakobutton.onclick = function JakoLasku() {
    let numero1 = document.getElementById('ekaNum').value;
    let numero2 = document.getElementById('tokaNum').value;
    jakolasku = numero1 / numero2;
    tulos.innerHTML = jakolasku;
  }


// Teht 4, 
// Kaava : c/5 = (f-32)/9
let lämpöButton = document.getElementById('lämpöNappi');
let CtoF = document.getElementById('CtoF');
let FtoC = document.getElementById('FtoC');

  lämpöButton.onclick = function lämpötilaLasku() {
    let numb = document.getElementById('lämpötila').value;
    CtoF = numb * 1.8 + 32;
    FtoC = (numb -32) / 1.8;
    CtoFandFtoC.innerHTML = numb + '°C on ' + CtoF + '°F<br>' + numb + '°F on ' + FtoC + '°C'
  }


// Teht 5,
// Same numbers
let sameButn = document.getElementById('checkSameButn');
let checkIfSame = document.getElementById("onkoSamat")

sameButn.onClick = function checkNumbrs() {
  let numbrss = document.getElementById('numberot').value;    
  tarquista =  numbrss.split('').every(char => char === numbrss[0]);

  if (tarquista == true) {
    checkIfSame.innerHTML = 'true'
  } else {
    checkIfSame.innerHTML = 'false'
  }
}


// Teht 6,
// URL splicing
let URLsplicer = document.getElementById('splitURL');

URLsplicer.onCLick = function hajotaURL(url_) {
  var data = url_.split("://");
  var domain = url_.split(".com");
  var address = url_.split("/");

  return [data, domain, address];


  /* var data = url_.split("://")
  var protocol = data[0];
  data = data[1].split(".com");
  var domain = data[0];
  data = data[1].split("/");

  if(data[1]){
    return [protocol, domain, data[1]]
  }

  return[protocol, domain] */
}

var url_ = "https://www.w3resource.com/javascript-exercises/"



// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-144.php
// https://stackoverflow.com/questions/22364961/parsing-a-url-as-a-string-and-splicing-each-sub-page-into-an-array