class Employee {
  constructor(name, salary, title, manager) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    if (manager === undefined) {
      this.manager = null;
    } else {
      this.manager = manager;
      //when manager is passed on new Employee instance, that manager's addEmployee method should be called from Employee's constructor
      //We want to add the whole instance by passing it into that method.
      manager.addEmployee(this);
    }
  }

  calculateBonus(multiplier) {
    return this.salary * multiplier;
  }
}

module.exports = Employee;
