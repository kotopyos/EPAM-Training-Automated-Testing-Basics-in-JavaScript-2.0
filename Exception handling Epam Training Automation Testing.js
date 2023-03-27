//
// In a try catch construction, wrap the code: console.log (a), let a = 3.
// And display an error - ‘let must be declared’ before use. When running
// 1/0, the error 'cannot be divided by zero'
//

try {
  let dividingByZero = 1 / 0;
  console.log (a)
  let a = 3;

  if (dividingByZero == Infinity) {
    throw new Error("cannot be divided by zero");
  }

} catch (err) {

  if (err instanceof ReferenceError){
    console.log('let must be declared');
  } else {
    throw err;
  }

}
