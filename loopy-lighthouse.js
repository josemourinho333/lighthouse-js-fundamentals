// for (let x = 100; x <= 200; x++) {
//   if ((x % 3 === 0) && (x % 4 !== 0)) {
//     console.log('Loopy');
//   } else if ((x % 4 === 0) && (x % 3 !== 0)) {
//     console.log('Lighthouse');
//   } else if ((x % 3 === 0) && (x % 4 === 0)) {
//     console.log('LoopyLighthouse');
//   } else {
//     console.log(x);
//   }
// }

//updated function to take in new values, multiples, and different words
const loopyLighthouse = function(range, multiples, words) {
  for (let start = range[0]; start <= range[1]; start++) {
    if ((start % multiples[0] === 0) && (start % multiples[1] !== 0)) {
      console.log(words[0]);
    } else if ((start % multiples[0] !== 0) && (start % multiples[1] === 0)) {
      console.log(words[1]);
    } else if ((start % multiples[0] === 0) && (start % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else {
      console.log(start);
    }
  }
}

console.log(loopyLighthouse([1,20], [2,5], ['Batty','Beacon']));