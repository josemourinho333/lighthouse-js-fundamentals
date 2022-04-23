const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  if (metric === 'redness') {
    let scores = [];
    for (let i = 0; i < vegetables.length; i++) {
      scores.push(vegetables[i].redness);
    };
    let winner = Math.max(...scores);
    for (let y = 0; y < vegetables.length; y++) {
      if (winner === vegetables[y].redness) {
        let winnerName = vegetables[y].submitter;
        return winnerName;
      };
    };
  } else {
    return undefined;
  }
};

console.log(judgeVegetable(vegetables, metric));


