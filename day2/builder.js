function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

function CarBuilder() {
  this.car = null;

  this.step1 = function () {
    this.car = new Car();
  };

  this.step2 = function () {
    this.car.addObjects();
  };

  this.get = function () {
    return this.car.toString();
  };
}

function TruckBuilder() {
  this.truck = null;

  this.step1 = function () {
    this.truck = new Truck();
  };

  this.step2 = function () {
    this.truck.addObjects();
  };

  this.get = function () {
    return this.truck.toString();
  };
}

function Car() {
  this.wheels = 0;

  this.addObjects = function () {
    this.wheels = 4;
  };

  this.toString = function () {
    return `A car with ${this.wheels} wheels`;
  };
}

function Truck() {
  this.wheels = 0;

  this.addObjects = function () {
    this.wheels = 8;
  };

  this.toString = function () {
    return `A truck with ${this.wheels} wheels`;
  };
}

var shop = new Shop();
var carBuilder = new CarBuilder();
var truckBuilder = new TruckBuilder();
var car = shop.construct(carBuilder);
var truck = shop.construct(truckBuilder);

console.log(car);
console.log(truck);
