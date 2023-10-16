const movements = [200, -100, 3000, 1200, -400];

for (let [i, movement] of movements) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} - deposit: ${movement}$`);
  } else {
    console.log(`Movement ${i + 1} - withdrawal: ${movement}$`);
  }
}

movements.forEach((mov, i) => {
  if (mov > 0) {
    console.log(`Movement ${i + 1} - deposit: ${movement}$`);
  } else {
    console.log(`Movement ${i + 1} - withdrawal: ${movement}$`);
  }
});
