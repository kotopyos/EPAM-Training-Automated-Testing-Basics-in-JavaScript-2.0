//
// 1. Given an array consisting of movie names, iterate over the array with the output of the names of
// each movie to the console
//
let movies = ["The Departed", "Snatched", "Casino", "Madagascar", "Shrek"];
movies.forEach((movieName) => console.log(movieName + ""));
console.log("------------\n");

//
//  2. Given an array of car manufacturers, convert the array to a string and back to an array
//
let manufacturers = ["Apple", "Volkswagen", "Toyota", "Samsung", "Foxconn", "Daimler AG"];
let stringifiedManufacturers = manufacturers.toString();
console.log(stringifiedManufacturers);
let convertIntoArrayManufacturers = stringifiedManufacturers.split(",");
console.log(convertIntoArrayManufacturers);
console.log("------------\n");

//
// 3. Given an array of the names of your friends, add the words hello to each element of the array
//
let friends = ["John", "William", "Leo", "Barbara", "Mario", "Alex"];
friends.forEach((friend) => console.log(`Hello ${friend}`));
console.log("------------\n");

//
// 4. Convert numeric array to Boolean
//
let fourthTaskArray = [1, 0, 4, 99, 228, 322, 0.5];
let convertedNumsToBoolean = fourthTaskArray.map(num => Boolean(num));
console.log(convertedNumsToBoolean);
console.log("------------\n");

//
// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order
//
let numArr = [1,6,7,8,3,4,5,6];
console.log(
  numArr.sort((a, b) => b - a)
);
console.log("------------\n");

//
// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3
//
let arrOfNumsGreaterThanThree = numArr.filter(num => num > 3);
console.log(arrOfNumsGreaterThanThree);
console.log("------------\n");

//
// 7. Write a function that takes two parameters - an array and a number and outputs the index of an
// array element equal to a number
//
function logIndexOfValue (arr, num) {
  console.log(arr.indexOf(num));
}
logIndexOfValue(numArr, 1); // numArr was sorted in 5th task so the output is 7
console.log("------------\n");

//
// 8. Implement a loop that will print the number 'a' until it is less than 10
//
let a = 14;
while (a > 10) {
  console.log(a);
  a--
}
console.log("------------\n");

//
// 9. Implement a loop that prints prime numbers to the console
//
let stopPoint = 50;
for (let i = 2; i <= stopPoint; i++) {
    let flag = 0;
  
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
  
    if (!flag) {
        console.log(i);
    }
}
console.log("------------\n");

//
// 10. Implement a loop that prints odd numbers to the console
//
for (let i = 0; i <= stopPoint; i++) {
  if (!(i % 2 == 0)) {
    console.log(i);
  }
}