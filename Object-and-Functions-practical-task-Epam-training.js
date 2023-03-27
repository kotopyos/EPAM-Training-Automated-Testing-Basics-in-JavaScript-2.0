//
//    Creating car object, adding color property, changing its value to the "green"
//
let car = {
  color: "black",
  power: 240,
  showPower() {
    console.log("Power of the car is " + this.power + "hp.")
  }
}

car.color = "green";
// car.showPower();  //uncomment to check the func



//
//   Pears and apples are accepted to the warehouse, write a function that returns the result of 
//   adding the number of accepted pears and apples
//
let warehouse = {
  peers: 30,
  apples: 20,
  addingPeers (addedPeers) {
    this.peers += addedPeers;
    return `${addedPeers} were added to the warehouse making overall amount - ${this.peers}.`;
  },
  addingApples (addedApples) {
  this.apples += addedApples;
  return `${addedApples} were added to the warehouse making overall amount - ${this.apples}.`;
  }
  
}
// console.log(warehouse.addingPeers(40));  // uncomment to check if the funcs are ok
// console.log(warehouse.addingApples(60));


//
//   Your name is saved in the payment terminal, write a function to define the name in the terminal 
//   (if you entered your name, then hello + name, if not, then there is no such name)
//
function nameDefine (name) {
  if (name) {
    console.log("Hello " + name);
  } else {
    console.log("There is no such name")
  }
}

// nameDefine();         // uncomment to check if the func is ok
// nameDefine("George")  //


//
//  Write a function for calculating the type of argument and type output to the console
//
function typeDefine (dataType) {
  console.log(typeof dataType);
}


//
// Write a function that determines whether a number is prime or not.
// !! Done in 15 seconds (Yes, I copypasted right from the stackoverflow :P ). Thanks to Ihor Sakaliuk
// https://stackoverflow.com/a/40200710
function isPrime(num) {
      for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}

