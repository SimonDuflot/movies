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
  describe() {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and has ${this.capital} as it's capital.`
    );
  },
  checkIsland: function () {
    (this.isIsland = this.neighbours.lenghth) === 0 ? true : false;
  },
};

// (this.isIsland = !Boolean(this.neighbours.length))

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);
