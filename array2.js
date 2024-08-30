const bamser = [
  {
    brand: "Ikea",
    farve: "Blå",
    størrelse: "150",
    dyr: "Blåhval",
    venner: ["Emma", "Felix", "Sæl"],
  },
  { brand: "Unknown", farve: "Grøn", størrelse: "20", dyr: "Sæl", venner: ["Emma", "Felix", "Blåhval"] },
];
const skabelon = document.querySelector("template").content;
const liste = document.querySelector("#minBamse");

bamser.forEach((bamse) => {
  const klon = skabelon.cloneNode(true);
  klon.querySelector("h1").textContent = bamse.dyr;
  klon.querySelector("h2").textContent = bamse.brand;
  klon.querySelector("p").textContent = bamse.størrelse;
  liste.appendChild(klon);
});

const superhelte = [
  {
    navn: "Hagemand",
    fjender: ["Skurk1", "skurk2", "skurk3"],
    styrker: ["Hage", "muller"],
    dragtfarve: "Rød",
    billede: "billeder/hagemand.jpg",
  },
  {
    navn: "Supermand",
    fjender: ["Skurk4", "skurk5", "skurk6"],
    styrker: ["Superstyrke", "flyvning", "laserblik"],
    dragtfarve: "Blå og rød",
    billede: "billeder/supermand.jpg",
  },
  {
    navn: "Batman",
    fjender: ["Skurk7", "skurk8", "skurk9"],
    styrker: ["Snedig", "kamptræning"],
    dragtfarve: "sort",
    billede: "billeder/batman.jpg",
  },
];

// Denne linje finder en HTML-skabelon ved hjælp af dens id (#superhelt-template).
// Ved at tilføje .content får vi fat i indholdet af skabelonen, som kan bruges til at klone og udfylde med superheltenes data.
const skabelon = document.querySelector("#superhelt-template").content;

// Denne linje finder et HTML-element med id'et #superhelteliste.
// Dette element bruges som container, hvor de klonede superhelte-elementer vil blive tilføjet.
const superhelteliste = document.querySelector("#superhelteliste");

// superhelte.forEach bliver gentaget gennem hvert superhelt-objekt i superhelte-arrayet.
// For hver iteration klones indholdet af skabelonen (skabelon.cloneNode(true)), så vi kan oprette en ny kopi af skabelonen for den pågældende superhelt.
superhelte.forEach((superhelt) => {
  const kopi = skabelon.cloneNode(true);

  // Udfylder informationerne om superheltens data
  kopi.querySelector("h2").textContent = superhelt.navn;
  kopi.querySelector("h3").textContent = `Styrker: ${superhelt.styrker}`;
  kopi.querySelector("p").textContent = `Fjender: ${superhelt.fjender}`;
  kopi.querySelector("div").textContent = `Dragtfarve: ${superhelt.dragtfarve}`;
  kopi.querySelector("img").src = superhelt.billede;

  // Tilføj den klonede og udfyldte artikel til superhelteliste-sektionen
  superhelteliste.appendChild(kopi);
});
