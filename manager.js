const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, title, salary, manager){
    super(name, title, salary, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }
};

module.exports = Manager;
