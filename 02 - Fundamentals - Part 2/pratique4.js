//Créez une fonction nommée "describePop"
//Cette fonction a deux paramètres: country et population
// Elle retourne une string : "China has 1441 million people, so it's about 18.2% of the world population."

function percentageOfWorld1(pop) {
  let perWorld = (pop / 7900) * 100;
  return perWorld;
}

function describePop(country, pop) {
  return `${country} has ${pop} million people, it's about ${percentageOfWorld1(
    pop
  )}% of the world population.`;
}

console.log(describePop("France", 68));

//CORRECTION
const describePop = function (country, pop) {
  const percentage = percentageOfWorld1(pop);
  const description = `${country} has ${pop} million people, which is about ${percentage}% of world population.`;
  console.log(description);
};

describePop("Portugal", 10);
describePop("China", 1441);
describePop("USA", 332);

const describePop = (country, pop) => {
  return `${country} has ${pop} million people, which is about ${percentage}% of world population.`;
};
