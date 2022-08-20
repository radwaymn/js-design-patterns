class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }

  accept(visitor) {
    visitor.visit(this);
  }
}

class ExtraSalary {
  visit(emp) {
    emp.setSalary(emp.getSalary() * 1.5);
  }
}

const emp = new Employee("sara", 10000);
const visitor = new ExtraSalary();
console.log(emp.getSalary());
emp.accept(visitor);
console.log(emp.getSalary());
