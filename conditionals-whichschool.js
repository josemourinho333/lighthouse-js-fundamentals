const whichSchool  = function (age) {
  if (age < 13) {
    return 'Elementary School';
    // console.log('Elementary school if age is below 13');
  } else if (age <= 18) {
    return 'Secondary School';
    // console.log('Secondary school if age is between 13 and 18');
  } else if (age > 18) {
    return 'Lighthouse Labs';
    // console.log('Lighthouse Labs in all other cases');
  }
}
