const vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]

//differet tests
// const vegetables = [
//   {
//     submitter: 'Old Man Franklin',
//     redness: 10,
//     plumpness: 5
//   },
//   {
//     submitter: 'Sally Tomato-Grower',
//     redness: 2,
//     plumpness: 8
//   },
//   {
//     submitter: 'Hamid Hamidson',
//     redness: 4,
//     plumpness: 3
//   }
// ]

const metric = 'd'


const judgeVegetable = function (vegetables, metric) {
  let measure = metric;
  if (measure === metric) {
    let scores = [];
    for (let i = 0; i < vegetables.length; i++) {
      scores.push(vegetables[i][metric]);
    }
    let winner = Math.max(...scores);
    for (let y = 0; y < vegetables.length; y++) {
      if (winner === vegetables[y][metric]) {
        let winnerName = vegetables[y].submitter;
        return winnerName;
      }
    }
  } else {
    return undefined;
  }
};

console.log(judgeVegetable(vegetables, metric));


