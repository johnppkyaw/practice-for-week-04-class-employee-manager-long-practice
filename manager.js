const Employee = require('./employee');

class Manager extends Employee {
  constructor(name, salary, title, manager){
    super(name, salary, title, manager);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateBonus(multiplier) {
    let sum = this.salary;
    if (this.employees.length > 0) {
    sum += this._totalSubSalary();
  }
    return sum * multiplier;
  }

  _totalSubSalary() {
    return this.employees.reduce((sum, employee) => {
      if (!(employee instanceof Manager)) {
      sum += employee.salary;
      } else {
        //if the employee is also a manager,
        //must get totalSubSalary of that manager's employees
        sum += employee.salary;
        sum += employee._totalSubSalary();
      }
      return sum;
    }, 0);
  }
};

//local testing;
let manager0 = new Manager('David Wallace', 150000, 'CEO');
let manager1 = new Manager('Michael Scott', 60000, 'regional manager', manager0);
let employee00 = new Employee('Ryan Howard', 100000, 'Executive', manager0);
let employee01 = new Employee('Toby Flenderson', 60000, 'HR', manager0);
let employee1 = new Employee('Dwight Schrute', 55000, 'Assistant to the regional manager', manager1);
let employee2 = new Employee('Jim Halpert', 55000, 'Lead Sales Associate', manager1);
let employee3 = new Employee('Pam Beesly', 55000, 'Sales Associate', manager1);

console.log(manager0.employees); //Ryan, Roby, Michael
console.log(manager1.employees); //Dwight, Jim, Pam
console.log(employee1.calculateBonus(0.5)) //27500
console.log(manager1.calculateBonus(0.5)) //(165000 + 60000) * 0.5 => 112500
console.log(manager0.calculateBonus(0.5)) // (150000 + 60000 + 100000 + 60000 + 165000) * 0.5 => 267500

module.exports = Manager;
