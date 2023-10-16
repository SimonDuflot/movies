"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKER APP

// Data

const account1 = {
  owner: "Simon Duflot",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  // get balance() {
  //   return this.movements.reduce((acc, mov) => acc + mov, 0);
  // },
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  // get balance() {
  //   return this.movements.reduce((acc, mov) => acc + mov, 0);
  // },
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  // get balance() {
  //   return this.movements.reduce((acc, mov) => acc + mov, 0);
  // },
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  // get balance() {
  //   return this.movements.reduce((acc, mov) => acc + mov, 0);
  // },
};

const accounts = [account1, account2, account3, account4];

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

////////////////////////////////
/////////////////////////////// FUNCTIONS
//FUNCTION DISPLAY MOVEMENTS
const displayMovements = (movements, sort = false, ascending = false) => {
  containerMovements.innerHTML = "";

  //let sortMov = sort ? movements.slice().sort((a, b) => a - b) : movements;
  let sortMov;
  if (sort && !ascending) {
    sortMov = movements.slice().sort((a, b) => a - b);
  } else if (sort && ascending) {
    sortMov = movements.slice().sort((a, b) => b - a);
  } else {
    sortMov = movements;
  }
  sortMov.forEach((mov, i) => {
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
//FUNCTION SORT MOVEMENTS
let sorted = false;
let ascended = false;
btnSort.addEventListener("click", () => {
  if (!sorted) {
    //on first click => go from unsort to sort from high to low
    displayMovements(currentAccount.movements, true, false);
    sorted = true;
    ascended = false;
  } else if (sorted && !ascended) {
    // on second click => sort from low to high
    displayMovements(currentAccount.movements, true, true);
    ascended = true;
  } else {
    //come back to unsorted
    displayMovements(currentAccount.movements, false, false);
    sorted = false;
    ascended = false;
  }
});
//FUNCTION GET USERNAMES
const getUsernames = (accs) => {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((el) => el[0])
      .join("");
  });
};
getUsernames(accounts); //INITIALIZATION GET USERNAMES FOR ALL ACCOUNTS SINCE FOREACH LOOPS

//FUNCTION DISPLAY CURRENT BALANCE
const calcDisplayBalance = (acc) => {
  acc.balance = acc.movements.reduce((a, mov) => a + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
//FUNCTION DISPLAY SUMMARY ( IN, OUT, INTEREST )
const calcDisplaySummary = (movements) => {
  const income = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * currentAccount.interestRate) / 100)
    .filter((int) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
//FUNCTION UPDATE UI
const updateUi = (acc) => {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc.movements);
};
//IMPLEMENTING LOGIN
let currentAccount;
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(" ")[0]
    } !`;
    containerApp.style.opacity = 1; // display UI
    inputLoginUsername.value = ""; //clear inputed values
    inputLoginPin.value = "";
    updateUi(currentAccount);
  } else {
    labelWelcome.textContent = "Mauvais identifiants !";
    setTimeout(() => {
      labelWelcome.textContent = "Log in to get started";
    }, 5000);
    inputLoginUsername.value = ""; //clear inputed values
    inputLoginPin.value = "";
  }
});
//IMPLEMENTING TRANSFERS
btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  let balance = currentAccount.balance;
  let amount = Number(inputTransferAmount.value);
  let receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc &&
    balance >= amount &&
    currentAccount !== receiverAcc
  ) {
    currentAccount.movements.push(amount * -1);
    receiverAcc.movements.push(amount);
    console.log("oui");
    //update UI
    updateUi(currentAccount);
  }
  inputTransferAmount.value = "";
  inputTransferTo.value = "";
});

btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  let user = inputCloseUsername.value;
  let pin = Number(inputClosePin.value);
  if (user === currentAccount.username && pin === currentAccount.pin) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1); //splice(start, deleteCount, item1, item2, /* …, */ itemN)
    containerApp.style.opacity = 0;
    labelWelcome.textContent = "Log in to get started";
  }
  inputCloseUsername.value = "";
  inputClosePin.value = "";
});

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  let loanAmount = Math.floor(inputLoanAmount.value);
  let requestedAmount = currentAccount.movements.some(
    (mov) => mov >= (loanAmount * 10) / 100
  );
  if (loanAmount > 0 && requestedAmount) {
    currentAccount.movements.push(loanAmount);
    console.log("oui");
    updateUi(currentAccount);
  }
  inputLoanAmount.value = "";
});

console.log((-2.345).toFixed(2));
