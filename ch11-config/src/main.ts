class Car {
  engine = 0;
  move() {
    this.engine++;
    console.log(this.engine);
  }
}

const car = new Car();
car.move();
