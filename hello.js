//say hello world x times
const sayHellos = function (number) {
  for (i = 0; i < number; i++) {
    console.log('Hello, world');
  }
}

sayHellos(3);

// say hello to a name
const sayHello = function (name) {
  console.log('Hello, ' + name);
}

//not ideal as I have to invoke function 3 times for different names
sayHello('Phil');
sayHello('Chloe');
sayHello('Jasmine');

