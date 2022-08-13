class CEO {
  constructor(name, age, address) {
    if (!CEO.instance) {
      this.name = name;
      this.age = age;
      this.address = address;
      CEO.instance = this;
    }
    return CEO.instance;
  }

  toString() {
    console.log(
      `CEO info: name: ${this.name}, age: ${this.age}, address: ${this.address}`
    );
  }
}

let c1 = new CEO("ahmed", 35, "cairo");
c1.toString();
let c2 = new CEO("ali", 40, "alex");
c2.toString();
