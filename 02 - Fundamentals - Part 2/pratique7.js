const neighbours = [
  "Belgique",
  "Allemagne",
  "Suisse",
  "Espagne",
  "Italie",
  "Monaco",
];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

console.log(neighbours.indexOf("Allemagne"));

if (!neighbours.includes("Allemagne")) {
  console.log("Probably not a central European contry :D");
}

neighbours[neighbours.indexOf("Belgique")] = "Royaume indépendant Wallon";

console.log(neighbours);
