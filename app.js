// transfer to binary number

// const number = prompt("Enter a number: ");

// binaryNumber = [];
// let tempNumber = number;
// let slots = 0;

// while (tempNumber >= 1) {
//   tempNumber = tempNumber / 2;
//   slots++;
// }

// let exponent = slots - 1;

// let newNumber = number;

// for (i = 0; i < slots; i++) {
//   if (newNumber - Math.pow(2, exponent) >= 0) {
//     newNumber -= Math.pow(2, exponent);
//     binaryNumber.push(1);
//   } else {
//     binaryNumber.push(0);
//   }
//   exponent--;
// }

// let finalNumber = "";
// binaryNumber.forEach((digit) => {
//   finalNumber += digit;
// });

// console.log(`${number} (10) = ${finalNumber} (2)`);

// ___________________________________________________________________________________________

// average wage

let amount = 0;
let sum = 0;
let input;

while (true) {
  input = prompt("Enter wage: ");
  if (input === "") break;
  sum = sum + parseInt(input);
  amount++;
}

const awgWage = sum / amount;

if (sum > 0) {
  console.log(`Average wage is ${awgWage}.`);
} else {
  console.log("Average wage could not be calculated.");
}
