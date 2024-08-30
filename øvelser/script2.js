let d = new Date();
let b = d.getHours();
console.log(b);
if (b > 5 && b < 10) {
  console.log("Godmorgen");
} else if (b > 10 && b < 18) {
  console.log("Goddag");
} else if (b >= 18 && b < 24) {
  console.log("Godaften");
} else {
  console.log("Godnat");
}
