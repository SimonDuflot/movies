for (let electeur = 1; electeur <= 50; electeur++) {
  console.log(`Voter number ${electeur} is currently voting.`);
}

const percentageOfWorld1 = (pop) => {
  return (pop / 7900) * 100;
};

const populations = [68, 52, 330, 1441];
const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages2);

const percentages3 = [];
let i = 0;
while (i < populations.length) {
  percentages3.push(percentageOfWorld1(populations[i]));
  i++;
}
console.log(percentages3);

//for (let i = 0; i < populations.length; i++) {
//     const perc = percentageOfWorld1(populations[i]);
//     percentages2.push(perc)
// }
// console.lof(percentages2);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

if (percentages2 === percentages) {
  console.log("The arrays have the same elements");
}

const compare = (percentages, percentages2) => {
  if (percentages.length !== percentages2.length) {
    return false;
  } else {
    for (let i = 0; i < percentages.length; i++) {
      if (percentages[i] !== percentages2[i]) {
        return false;
      }
    }
    return true;
  }
};

console.log(compare(percentages, percentages2));

//USING EVERY() callback function with basic parameters
const compareArrays = (percentages, percentages2) =>
  percentages.length === percentages2.length &&
  percentages.every((element, index) => element === percentages[index]);

console.log(compareArrays(percentages, percentages2));
