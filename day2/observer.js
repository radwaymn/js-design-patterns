class Store {
  constructor() {
    (this.product = ""), (this.customers = []);
  }

  placeProduct(_product) {
    this.product = _product;
    this.notifyAll();
  }

  register(customer) {
    this.customers.push(customer);
  }

  unRegister(customer) {
    this.customers = this.customers.filter((person) => person != customer);
  }

  notifyAll() {
    return this.customers.forEach((customer) => customer.update(this));
  }
}

class IndividualCustomer {
  update(Store) {
    console.log(`New product added: ${Store.product}`);
  }
}

class BusinessCutomer {
  update(Store) {
    console.log(`New product added: ${Store.product}`);
  }
}

const FoodStore = new Store();

const Radwa = new IndividualCustomer();
FoodStore.register(Radwa);

const Mohamed = new IndividualCustomer();
FoodStore.register(Mohamed);

FoodStore.placeProduct('Bread');

const Sara= new IndividualCustomer();
FoodStore.register(Sara);

FoodStore.unRegister(Mohamed);

FoodStore.placeProduct('Cheese');

const companyA= new BusinessCutomer();
FoodStore.register(companyA);

FoodStore.placeProduct('Potato');
