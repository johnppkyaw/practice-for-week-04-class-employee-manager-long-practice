class Employee {
  constructor(name, title, salary, manager) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    if (manager === undefined) {
      this.manager = null;
    } else {
      this.manager = manager;
    }

  }
}

module.exports = Employee;
