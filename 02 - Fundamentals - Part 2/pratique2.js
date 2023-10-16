"use strict";

function percentageOfWorld1(country, pop) {
  const perWorld = (pop / 7900) * 100;
  console.log(pop, country, perWorld);
  console.log(
    `${country} has ${pop} million people, so it's about ${perWorld}% of the world population.`
  );
}

percentageOfWorld1("France", 68);
const korea = percentageOfWorld1("South Korea", 52);
const uk = percentageOfWorld1("The United Kingdom", 68);

console.log(percentageOfWorld1("France", 68));

//Function declaration

function percentageOfWorld1(population) {
  return (population / 7900) * 100 + "%";
}

//Function expression

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100 + "%";
};

const perFrance = percentageOfWorld1(68);
const perUk = percentageOfWorld1(68);
const perKorea = percentageOfWorld1(52);
console.log(perFrance, perUk, perKorea);

const perFrance2 = percentageOfWorld2(68);
const perUk2 = percentageOfWorld2(68);
const perKorea2 = percentageOfWorld2(52);
console.log(perFrance2);
