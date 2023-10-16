const percentageOfWorld1 = (pop) => {
  return (pop / 7900) * 100;
};

const populations = [68, 52, 330, 1441];
console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);
