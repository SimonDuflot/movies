//Destructuring Arrays
//Enhanced Objects Literals
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

let restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprece Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    // order (starterIndex,mainIndex) {}
    //return the starter and main course
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  hours: openingHours,
  numGuests: 5,
};

// const arr = ["Bella", 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

// const [x, y, z] = arr;
// console.log([x, y, z]);
// console.log(arr);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);
// console.log([main, secondary]);

//Destructure and restructure :
// const temp = main; // temp = Italian
// console.log(temp);
// main = secondary; // main = pizzeria
// console.log(main);
// secondary = temp;
// console.log(secondary);

//Use this instead:
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Helps when changing orders inside of an array

console.log(restaurant.order(2, 1));
//What destructuring lets us do:
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);
//Otherwise we would have to use:
const start = restaurant.order(2, 1)[0];
const mainP = restaurant.order(2, 1)[1];
console.log(start);
console.log(mainP);

//Nested destructuring
const nested = [1, 2, [3, 4]];
const [i, , [k, j]] = nested;
console.log(i, j, k);
//Default values
const [o = 1, p = 1, q = 1] = [8, 9];
console.log(o, p, q);

//Destructuring Arrays
const { name, hours, categories } = restaurant;
console.log(name, hours, categories); // Instead of calling the objects: restaurant.name, restaurant.categories, restaurant.hours
//Renaming variables
const {
  name: restaurantName,
  hours: weeklyHours,
  categories: tags,
} = restaurant;

const { mainMenu: menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu);

//Mutating variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 23, b1: 11, c1: 7 };
({ a1, b1 } = obj);
console.log(a1, b1);

//Nested objects
const {
  fri: { open: op, close: cl },
} = weeklyHours;
console.log(o, cl);

//Spread operator = copy
const arr1 = [1, 2, 3];
const newArr = [7, 8, ...arr1];
console.log(newArr);
console.log(...newArr);

//Copy Array and Add
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu.push(""));
console.log(restaurant.mainMenu);

//Join 2 Arrays
const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenu);

const str = "Alexander";
console.log(...str);
console.log(...(str + "S."));
console.log(...str, " ", "S.");

//reST operator
const [a2, b2, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a2, b2, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { fri, ...weekday } = restaurant.hours;
console.log(fri, weekday);

// const add = (num1,num2,num3) => {
//   return num1,num2,num3;
// };
// console.log(add(1,2,3));
const add = (...numbers) => {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(2, 5, 32, 3, 5, 7, 8, 9, 32, 1));

const sum2 = [1, 2, 3];
console.log(add(...sum2));

//Le spread operator est utilisé pour étendre un tableau ou un objet.
//Il permet de décomposer les éléments d'un tableau ou les propriétés d'un objet pour les utiliser dans un autre contexte.
const tableau1 = [1, 2, 3];
const tableau2 = [4, 5, ...tableau1];
console.log(tableau2); // affiche [4,5,1,2,3]

// Le rest operator est utilisé pour rassembler plusieurs arguments
// en un seul tableau. Il est souvent utilisé dans les fonctions pour
// gérer un nombre variable d'arguments.
function maFonction(...args) {
  console.log(args);
}
maFonction(1, 2, 3); // affiche [1,2,3]
// Dans cet exemple, le rest operator a été utilisé pour rassembler
// les arguments passés à la fonction maFonction dans un tableau
// appelé args.

//Short circuiting (&& and ||)
console.log("-------- OR --------");

console.log(3 || "Hedi");
console.log("" || "Mancha");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("------ AND -------");
console.log(0 && "Hedi");
console.log(7 && "Hedi");
console.log("Hedi" && 23 && null && "hedi");

//Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

//Logical Assignment Operator
const rest1 = {
  name: "Capri",
  numGuests: 0,
};
const rest2 = {
  name: "Mushroom",
  owner: "Mario & Luigi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND assignment operator
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);

//Looping Arrays: the for-of loop
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu2) console.log(item); // destructuration du tableau menu2 sans ses clefs
console.log(menu2);

for (let [i, el] of menu2.entries()) console.log(i, el); //contient le couple clef/valeur dans un tableau pour chaque élément

// Optional chaining (?.)
// without optional chaining
if (restaurant.hours && restaurant.hours.mon) {
  console.log(restaurant.hours.mon.open);
}

// with optional chaining
console.log(restaurant.hours.mon?.open);

// Example

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`${day}, we open at ${open}`);
// }

// For loop object
const properties = Object.keys(openingHours);
console.log(properties); // Array(3) [ "thu", "fri", "sat" ]
let openStr = `We are open on ${properties.length} days:`;
for (let day of properties) {
  openStr += ` ${day},`;
}
console.log(openStr);

const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);
console.log(entries);

for (let hours of entries) {
  console.log(hours);
}

// [key, value]
//for (let {day,hour} of entries) {
//   console.log(day,hour);
// }
for (let [day, { open, close }] of entries) {
  console.log(day, open, close);
}

const orderSet = new Set([
  "pasta",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
  "pizza",
]);
console.log(orderSet);
console.log(orderSet.size);
console.log(new Set("Hedi"));
console.log(orderSet.has("Pomodoro"));
console.log(orderSet.has("pizza"));

orderSet.add("Garlic Bread");
console.log(orderSet);
orderSet.delete("Garlic Bread");
console.log(orderSet);

// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = [
  "waiter",
  "waiter",
  "manager",
  "cook",
  "cook",
  "manager",
  "chef",
];
const staffUnique = new Set(staff);
console.log(staffUnique);

// Maps: fundamentals:
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);
console.log(rest.set(3, "San Francisco, USA"));
console.log(rest.get("name"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");

console.log(rest.get(true));
console.log(rest.get("open"));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
console.log(rest.has("categories"));
// rest.clear() efface tout
rest.delete(2);
console.log(rest);

// Maps: iteration

const question = new Map([
  ["question", "Which programming language is best ?"],
  [1, "C"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", "3"],
  [true, "Good answer !"],
  [(false, "Try again you dumb fuck")],
]);

console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// const answer = Number(prompt("Your answer"));
// alert(question.get(question.get("correct") === answer));

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1. Créez un tableau 'events' des différents évènements qui se sont déroulés (sans doublons).;

// const events = new Set(gameEvents.values())];
// const events = [...new Set(gameEvents.values())]; // transforme map en set et ajoute(...) la totalite des valeurs de la const gameEvents
// console.log(events);
const events = new Set();

for (let key of gameEvents.values()) {
  // on boucle à l'interieur de set, puisque set n'accepte pas les doublons, chaque valeur sera unique
  events.add(key);
}
console.log(events);

//2. Une fois que le match est terminé, il a été prouvé que le carton jaune (yellow card) de la 64ème minute n'était pas justifié. Vous devrez donc effacer cette évènement du Map.

gameEvents.delete(64);

//3. Calculez et loggez la string suivante sur la console : "An event happened, on average, every 9 minutes" (gardez à l'esprit qu'un jeu dure 90 minutes).
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const minutes = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${minutes / gameEvents.size} minutes`
);

//4. Bouclez sur 'gameEvents' et loggez chaque élément dans la console, en indiquant s'il l'action a lieu en première ou en deuxième mi-temps, comme ceci : [FIRST HALF] 17: ⚽ GOAL

for (const [minute, event] of gameEvents) {
  const half = minute <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${half} ${minute}: ${event}`);
}

// Working with strings - Part 1
const airline = "TAP Air Portugal";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.indexOf("a")); //quand un indexof ne trouve rien il renvoit -1
console.log(airline.lastIndexOf("a"));

console.log(airline.length);
console.log("B747".length);

console.log(airline.slice());
console.log(airline.slice(4, 9));

console.log(airline.slice(0, airline.indexOf(" "))); // du début jusqu'a un espace
console.log(airline.lastIndexOf(" " + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// 1 //
function evenOrOdd(number) {
  //Even or Odd
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(evenOrOdd(32));
console.log(evenOrOdd(23));
// 2 //
function username(str) {
  const temp = str.split(" ");
  let result = "";
  for (let name of temp) {
    result += name[0];
  }
  return result.split("").join(".");
}

console.log(username("Louis De Funes")); // L.D.F
console.log(username("Brigitte Macron")); //B.M

// 3 //
// function positiveSum(arr) {
//   let result = 0;
//   for (let num of arr) {
//     if (num > 0) {
//       result += num;
//     }
//   }
//   return result;
// }

// console.log(positiveSum(1, 2, 3, 4, 5, 6, 7));
// console.log(positiveSum(10, 2, -5, 4, -6));

let thing = ["a", "b", "c", "d", "e", "f"];
console.log(thing.slice(2));
console.log(thing.slice(2, 4));
