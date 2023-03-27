//
// 1. Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular
// expression that matches the strings
// ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
//
let taskString = 'ahb acb aeb aeeb adcb axeb';
console.log(
  taskString.match(/a.b/g)
);

//
// 2. Given the string '2 + 3 223 2223'. Write a regex that finds line 2
// + 3 without capturing the rest
//
let secondTaskString =  '2 + 3 223 2223';
console.log(
  secondTaskString.match(/2\s\x2B\s3/)
);

//
// 3. Get the day, month and year of the current date and output it to
// the console separately
//
let now = new Date();

console.log(
  `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
);