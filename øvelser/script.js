const snaps = document.getElementById("snaps");
const ol = document.getElementById("ol");
const faxe = document.getElementById("fanta");
const pepsi = document.getElementById("pmax");

// Funktion der håndterer klik og tjekker for alkoholindhold
function checkAlcohol(drink) {
  if (drink.id === "ol" || drink.id === "snaps") {
    console.log("indeholder alkohol");
  } else if (drink.id === "fanta" || drink.id === "pmax") {
    console.log("alkoholfri");
  }
}

// Tilføj event listeners til hvert billede
snaps.addEventListener("click", function () {
  checkAlcohol(snaps);
});
ol.addEventListener("click", function () {
  checkAlcohol(ol);
});
faxe.addEventListener("click", function () {
  checkAlcohol(faxe);
});
pepsi.addEventListener("click", function () {
  checkAlcohol(pepsi);
});
