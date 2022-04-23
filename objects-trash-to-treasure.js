const smartGarbage = function (trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
    console.log(bins);
  } else if (trash === 'compost') {
    bins.compost += 1;
  } else {
    console.log('no type');
  }
  console.log(bins);
}

smartGarbage('recycling', { waste: 10, recycling: 10, compost: 10});

