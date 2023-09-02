const numbers = [ 10, 15, 20, 25, 30, 35];
const userInput = parseInt(prompt("Enter a number:"));
let nearest = numbers[0];
let difference = Math.abs(userInput - nearest);
for (let i = 1; i < numbers.length; i++) {
  let currentDifference = Math.abs(userInput - numbers[i]);
  if (currentDifference < difference) {
    nearest = numbers[i];
    difference = currentDifference;
  }
}
alert(nearest);
console.log(nearest);