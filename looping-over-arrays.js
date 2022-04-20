// Example Array
const amounts = [61.00, 52.55, 112.99, 5.00];

//Traditional for loops - still works
let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}

console.log('Order total is: ' + total);

// Newer for..of loops - much simpler
let newTotal = 0;
for (let amount of amounts) {
  newTotal += amount;
}

console.log('Order total is the same at ' + newTotal + ' using the newer for..of loop');

//new for..of loop with strings 
let name = 'phil';
for (let character of name) {
  console.log(character);
}