emotions ('happy', function(num){
  let sound = '';
  for (let i = 0; i < num; i++) {
    sound += 'ha';
  }
  return sound + '!';
});

function emotions(mood, laugh) {
  console.log("I am " + mood + ", " + laugh(2));
};

