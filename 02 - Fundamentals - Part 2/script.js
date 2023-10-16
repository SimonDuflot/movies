// //strict mode
// ("use strict");

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log("I can drive");

// //functions

// function logger() {
//   console.log("My name is Hedi");
// }

// //calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   //console.log(appeles,oranges)
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // Pratique fonction

// function describeCountry(country, pop, capitalCity) {
//   const string = `${country} has ${pop} millions people and its capital city is ${capitalCity}.`;
//   return string;
// }
// const france = describeCountry("France", 68, "Paris");
// const korea = describeCountry("South Korea", 52, "Seoul");
// const uk = describeCountry("Britain", 68, "London");

// console.log(france, korea, uk);

// console.log(describeCountry("France", 68, "Paris"));
// console.log(describeCountry("Corée du Sud", 52, "Seoul"));
// console.log(describeCountry("Britain", 68, "London"));

// // //Function declaration
// // function calcAge1(birthYear) {
// //   return 2037 - birthYear;
// // }

// // const age1 = calcAge1(1991);
// // console.log(age1);

// // //Function expression
// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const age2 = calcAge2(1991);
// // console.log(age1, age2);

// // //Arrow function
// // const calcAge3 = (birthYear) => 2037 - birthYear;
// // const age3 = calcAge3(1991);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) => {
// //   const age = 2037 - birthYear;
// //   const retirement = 65 - age;
// //   //return retirement
// //   return `${firstName} retires in ${retirement} years.`;
// // };

// // console.log(yearsUntilRetirement(1991, "Hedi"));
// // console.log(yearsUntilRetirement(1980, "Bob"));

// // //Functions calling other functions
// // function cutFruitPieces(fruit) {
// //   return fruit * 4;
// // }

// // const cutFruitPieces = (fruit) => {
// //   return fruit * 4;
// // };

// // function fruitProcessor(fruit1, fruit2) {
// //   const applePieces = cutFruitPieces(fruit1);
// //   const orangePieces = cutFruitPieces(fruit2);

// //   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
// //   return juice;
// // }

// // const fruitProcessor = (fruit1, fruit2) => {
// //   const applePieces = cutFruitPieces(fruit1);
// //   const orangePieces = cutFruitPieces(fruit2);

// //   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;
// //   return juice;
// // };

// console.log(fruitProcessor(2, 3));

// let playDice = () => {
//   return Math.trunc(Math.random() * 6);
// };

// let salondejeu = () => {
//   let joueur1 = playDice();
//   let joueur2 = playDice();
//   console.log(joueur1, joueur2);
//   return joueur1 > joueur2
//     ? console.log(`Joueur 1 a gagné`)
//     : console.log(`Joueur 2 a gagné`);
// };

// //Arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";
// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Hedi";
// const hedi = [firstName, "Rivas", 2037 - 1991, "teacher", friends]
// console.log(hedi);
// console.log(hedi.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// };

// const years2 = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years2.length - 1]);

// console.log(age1,age2,age3);

// const ages = [
//     calcAge(years2[0]),
//     calcAge(years2[1]),
//     calcAge(years2[years2.length - 1]),
// ];
// console.log(ages)

// //Basic array operations (methods)

// const friends2 = ['Michael', 'Steven', 'Peter'];
// //Add elements at the end = push
// const newLength = friends2.push('Jay');
// console.log(friends2);
// console.log(newLength);
// //Add elements at the beginning = unshift
// friends2.unshift('John');
// console.log(friends2)

// //Remove elements
// friends2.pop();
// const popped = friends2.pop();
// console.log(popped)
// console.log(friends2)

// friends2.shift();
// console.log(friends2)

// console.log(friends2.indexOf('Steven'));
// console.log(friends2.indexOf('Bob'));

// friends2.push(23)
// console.log(friends2.includes('Steven'));
// console.log(friends2.includes('Bob'));
// console.log(friends2.includes(23));

// if ( friends2.includes('Steven')) {
//     console.log("You have a friend in me, and Steven.")
// }

// console.log(friends2)
// friends2.splice(0,2);
// console.log(friends2);
// const newArray = friends2.slice(1, 3);
// console.log(friends2);
// console.log(newArray);

//Filter
// for (let i = 0; i < friends2.length; i++) {
//   console.log("for:", i, friends2(i));
// }
// const filteredArray = friends2.filter((friend) => {
//   console.log(friend);
//   return typeof friend === "number";
// });

//console.log(filteredArray);

//Intro to Object
const hediArray = [
  "Hedi",
  "Rivas",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// const hedi = {
//   firstName: "Hedi",
//   lastName: "Rivas",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["michael", "Peter", "Steven"],
//   hasDriversLicence: true,
// };

// console.log(hedi);

// console.log(hedi.lastName);
// console.log(hedi["lastName"]);

// const nameKey = "Name";
// console.log(hedi["first" + nameKey]);
// console.log(hedi["last" + nameKey]);

//console.log(hedi."last" + nameKey);

// const interestedIn = prompt(
//   "What do you want to know about Hedi? Choose between firstName, lastName, age, job and friends."
// );

// if (hedi[interestedIn]) {
//   console.log(hedi[interestedIn]);
// } else {
//   console.log(
//     "Wrong request! Choose between firstName, lastName, age, job and friends."
//   );
// }

// hedi.location = "Portugal";
// hedi["twitter"] = "@hediRivas";
// console.log(hedi);

// console.log(
//   `${hedi.firstName} has ${hedi.friends.length} friends, and his best friend is called ${hedi.friends[0]}`
// );

//Object methods

// calcAge: function (birthYear) {
//  return 2037 - birthYear;
// }

// calcAge: function () {
//  console.log(this);
//  return 2037 - this.birthYear;
// }

const person = {
  firstName: "Simon",
  lastName: "Duflot",
  birthYear: 1994,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: true,
  calcAge: function (year) {
    person.age = year - person.birthYear;
  },
  getSummary: function () {
    const licenceStatus = this.hasDriversLicence
      ? "has a driver's licence"
      : "has no driver's licence";
    return `${this.firstName} is a ${person.calcAge(2000)} years old ${
      this.job
    }, and he ${licenceStatus}.`;
  },
};

console.log(person.calcAge(2000));
console.log(person.getSummary());

//console.log(hedi.calcAge(1991));
//console.log(hedi['calcAge'](1991));

console.log(person.calcAge(2000));

//Iteration: the for Loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

//Looping arrays, breaking and continuing

const simonArray = [
  "Simon",
  "Rivas",
  2023 - 1994,
  "student",
  ["Michael", "Steven", "Peter"],
  true,
];

const types = [];

for (let i = 0; i < simonArray.length; i++) {
  //Reading from simonArray
  console.log(simonArray[i], typeof simonArray[i]);

  //Filling types array
  //types[i] = typeof simonArray[i];
  types.push(typeof simonArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);

//continue even when condition not met

console.log(`--- ONLY STRINGS ---`);
for (let i = 0; i < simonArray.length; i++) {
  if (typeof simonArray[i] !== "string") continue;

  console.log(simonArray[i], typeof simonArray[i]);
}

// break stops just before the ask
console.log(`--- BREAK WITH NUMBER ---`);
for (let i = 0; i < simonArray.length; i++) {
  if (typeof simonArray[i] === "number") break;

  console.log(simonArray[i], typeof simonArray[i]);
}

//Looping backwards and loops in loops

for (let i = simonArray.length - 1; i >= 0; i--) {
  console.log(i, simonArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------------Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}

//While loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weight repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end...`);
}
