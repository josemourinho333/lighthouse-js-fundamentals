const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// for loop method
// const chooseStations = function (stations) {
//   //Initializing new array for eligible stations
//   const goodStations = [];
//   //Iterating over all the stations in stations array
//   for (let i = 0; i < stations.length; i++) {
//     //Condition check to find eligible ones
//     if (stations[i][1] >= 20 && ((stations[i][2] === 'school') || (stations[i][2] === 'community centre')) ) {
//       //adding the eligible stations into the new array
//       goodStations.push(stations[i][0]);
//     }
//   }
//   return goodStations;
// }

// for..of method
const chooseStations = function (stations) {
  //initializing new array for eligible stations
  const goodStations = [];
  //for..of method to go over all the data in the array
  for (let [name, capacity, type] of stations) {
    //conditional to pass eligible stations only
    if (capacity >= 20 && ((type === 'school') || (type === 'community centre')) ) {
      //eligible stations pushed to fill the new empty array
      goodStations.push(name);
    }
  }
  return goodStations;
}


console.log(chooseStations(stations));