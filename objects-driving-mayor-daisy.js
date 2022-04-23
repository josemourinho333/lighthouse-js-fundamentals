const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
];

const speed = 38;

const carPassing = function (cars, speed) {
  let newCar = {};
  newCar.time = Date.now();
  newCar.speed = speed;

  cars.push(newCar);
  console.log(cars);
}

console.log(carPassing(cars, speed));