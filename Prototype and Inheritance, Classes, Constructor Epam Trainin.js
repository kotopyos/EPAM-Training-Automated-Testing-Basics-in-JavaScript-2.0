class Animal {
  constructor(move){
    this.move = move;
  }
}

class Cat extends Animal{

  constructor(move){
    super(move);
  }
}

const snake = new Animal("Crawling");
const barsik = new Cat("4-legged running");
console.log(snake);
console.log(barsik);