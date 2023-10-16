const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "L'IMC de John Smith (28,3) est supérieur à celui de Mark Miller (23,9) !"

if (mark.bmi > john.bmi) {
  console.log(
    `L'IMC de ${mark.fullName} (${mark.bmi}) est supérieur à celui de ${john.fullName} (${john.bmi}) !`
  );
} else {
  console.log(
    `L'IMC de ${john.fullName} (${john.bmi}) est supérieur à celui de ${mark.fullName} (${mark.bmi} !)`
  );
}

const result =
  mark.bmi > john.bmi &&
  `L'IMC de ${mark.fullName} (${mark.bmi}) est supérieur à celui de ${john.fullName} (${john.bmi}) !`;
console.log(result);
