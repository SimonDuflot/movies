const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
//const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
//const totals = [
//   calcTip(bill[0]) + bill[0],
//   calcTip(bill[1]) + bill[1],
//   calcTip(bill[2]) + bill[2],
// ];
// console.log(tips);
// console.log(totals);

const tips = bills.map((bill) => {
  console.log(bill);
  return calcTip(bill);
});

console.log(tips);

const totals = bills.map((bill, i) => {
  return bill + tips[i];
});

console.log(totals);
