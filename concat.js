// no sorting, just joining two array inputs together
const concat = function(arrayOne, arrayTwo) {
  let masterArray = [];
  masterArray = arrayOne.concat(arrayTwo);
  return masterArray;
}

//sorting added
const merge = function(arrayOne, arrayTwo) {
  let masterArray = [];
  masterArray = arrayOne.concat(arrayTwo);
  masterArray.sort();
  return masterArray;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);

