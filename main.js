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
let button = document.getElementById('button');
let vastaus = document.getElementById('vastaus');

  button.onclick = function randomFunc() {
    let input = document.getElementById('numero').value;
    var randomnum = Math.floor(Math.random() * 10 +1);

    if (input == randomnum) {
        vastaus.innerHTML = "Oikein! :3"
    } else {
        vastaus.innerHTML = "Väärin! >:("
    }
  }


// Teht 3, Kerto ja jakolasku
let button = document.getElementById('kertonappi');
let button = document.getElementById('jakonappi');