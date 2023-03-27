// 1. Perform addition of various types (string + boolean, string + number, number + boolean)
console.log("Hello" + true); // Hellotrue
console.log("Hello" + 4); //Hello4
console.log(4 + true); //5

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log("Hello" * true); // NaN
console.log("Hello" * 4); // NaN
console.log(4 * true); // 4

// 3. Divide different types (string / boolean, string / number, number / Boolean)
console.log("Hello" / true); // NaN
console.log("Hello" / 4); // NaN
console.log(4 / true); // 4

// 4. Perform explicit conversion (number, string, boolean)
let value;
value = Number(228);
console.log(value); // 228
value = String("Hello"); 
console.log(value); // Hello
value = Boolean(true);
console.log(value); // true