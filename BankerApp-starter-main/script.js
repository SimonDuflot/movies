"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKER APP

// Data

const account1 = {
  owner: "Hedi Rivas",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: "Simon Duflot",
  movements: [200, -50, 150, -100],
  interestRate: 15,
  pin: 8888,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// FUNCTIONS
const displayMovements = (movements) => {
  containerMovements.innerHTML = "";

  movements.forEach((mov, i) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

calcDisplaySummary(account1.movements);

////////////////////////////////////////LOGIN MODULE BEGIN//////////////////////////////////////
//CREATE TWO VARIABLES: they will be compared to the inputed username and pin
let loginInput = "";
let pinInput = "";

//CREATE FUNCTION initialesUsername with a parameter called username and changes it into two lower case initials
const initialesUsername = (username) => {
  const initiales = username.split(" "); //remove "space" from username, store it inside constant initiales

  let loginInfo = ""; //create function for callback

  for (let initiale of initiales) {
    //for of loop
    if (initiale.length > 0) {
      loginInfo += initiale[0].toLowerCase();
    }
  }
  return loginInfo;
};

//ADD EVENT FOR EACH LOGIN INPUT

inputLoginUsername.addEventListener("input", (e) => {
  // as we input values we store it in (e)
  loginInput = e.target.value; // we store (e) inside our created variable loginInput
});
inputLoginPin.addEventListener("input", (e) => {
  // same thing for the pin
  pinInput = e.target.value;
});

// ADD CONDITIONS FOR LOGIN
btnLogin.addEventListener("click", (e) => {
  e.preventDefault(); //prevent page from refreshing because it is annoying
  for (let i = 0; i < accounts.length; i++) {
    if (
      loginInput === initialesUsername(accounts[i].owner) &&
      Number(pinInput) === accounts[i].pin
    ) {
      containerApp.style.opacity = "1"; //show the account
      displayMovements(accounts[i].movements); //show the movements
      calcDisplayBalance(accounts[i].movements); //show main balance
      labelWelcome.textContent = `Welcome back ${accounts[i].owner} !`; //show a welcoming message
      inputLoginUsername.value = ""; //reset value, not textcontent, because it is an input
      inputLoginPin.value = ""; // reset value, not textcontent, because it is an input
    }
  }
});
/////////////////////////////////////LOGIN MODULE END/////////////////////////////////////
