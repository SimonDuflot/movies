//Recréez la dernière fonction "percentageOfWorld2"
// mais cette fois-ci en utilisant une fonction fléchée
// et en la stockant dans une variable nommée
// "percentageOfWorld3"

const percentageOfWorld3 = (pop) => {
  return (pop / 7900) * 100 + "%";
};

console.log(percentageOfWorld3(68));

const percentageOfWorld4 = (country, pop) => {
  let perWorld = (pop / 7900) * 100;
  return `${country} has ${pop} million people, which is about ${perWorld}% of world pop.`;
};

console.log(percentageOfWorld4("France", 68));
