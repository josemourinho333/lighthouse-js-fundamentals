const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

//Declaring function
const finalPosition = function(moves) {
  //initializing final position array
  let finalPosition = [0,0];
  //iterating over all the moves in moves array
  for (const move of moves) {
    //checking then adding/subtracting in their respective array indexs in the finalPosition array
    if (move === 'north') {
      finalPosition[1]++;
    } else if (move === 'south') {
      finalPosition[1]--;
    } else if (move === 'east') {
      finalPosition[0]++;
    } else if (move === 'west') {
      finalPosition[0]--;
    }
  }
  //return the finalPosition values
  return finalPosition;
}

console.log(finalPosition(moves));
