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


// Teht 2, 

function getRandomInt(max) {
    return Math.floor(Math.random() * max +1);
}
  
console.log(getRandomInt(10));


/* if (a === true) {

} else {

} */