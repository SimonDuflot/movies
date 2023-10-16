const myCountry = {
  country: "France",
  capital: "Paris",
  language: "French",
  population: 68,
  neighbours: [
    "Allemagne",
    "Belgique",
    "Luxembourg",
    "Espagne",
    "Suisse",
    "Italie",
  ],
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and has ${myCountry.capital} as it's capital.`
);

console.log(myCountry.population + 2);
console.log(myCountry["population"] + 2);

myCountry.population += 2;
console.log(myCountry.population);

myCountry.population -= 2;
console.log(myCountry["population"]);
