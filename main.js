// Teht 1, Päivämäärä
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


// Teht 2, Guessing game
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


// Teht 3, Kerto ja jakolasku
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


