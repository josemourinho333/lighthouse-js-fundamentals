//Declaring sound variable where 'ha's will go
let sound = '';
// Anonymous function expression, takes in number of ha's we want to output
const laugh = function(number) {
  //iteration
  for (i = 0; i < number; i++ ) {
    //adds each ha's stored in the sound variable declared globally
    sound += 'ha';
  };
  //returns all the ha's after iteration and attachs !
  return sound + '!';
}

//console logging for test
console.log(laugh(20));