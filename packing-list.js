const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Kitchen stuff to pack:");
//For loop
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
}

// While loop
let i = 0;
while (i<packingList.length) {
  console.log(packingList[i]);
  i++;
}