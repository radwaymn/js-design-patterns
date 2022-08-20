class Car {
  constructor(engine, doors, price, type) {
    this.engine = engine;
    this.doors = doors;
    this.price = price;
    this.type = type;
  }

  displayPrice() {
    console.log(`price: ${this.price}`);
  }

  displayType() {
    console.log(`car type: ${this.type}`);
  }
}

class Logan extends Car {
  constructor(engine, doors, price) {
    super(engine, doors, price, "Logan");
  }
}

class Tipo extends Car {
  constructor(engine, doors, price) {
    super(engine, doors, price, "Tipo");
  }
}

class CarFactory {
  constructor(type) {
    this.type = type;
  }

  createCar() {
    switch (this.type) {
      case "Logan":
        return new Logan(1600, 4, 30000);
      case "Tipo":
        return new Tipo(1600, 4, 40000);
      default:
        console.log("Invalid car type");
    }
  }
}

const c1 = new CarFactory('Logan').createCar();
c1.displayPrice();

const c2 = new CarFactory('Tipo').createCar();
c2.displayType();