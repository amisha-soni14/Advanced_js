function EmployeeDetails() {
  var name= "Mayank";
  var age = 30;
  var designation = "Developer";
  var salary = 10000;
  
  var calculateBonus = function() {
    salary = salary + 1000;
  }

  return {
    name: name,
    age: age,
    designation: designation,
    //salary :salary,
    calculateBonus: calculateBonus
  }
}

var newEmployee = EmployeeDetails()

var userName = newEmployee.calculateBonus();
console.log(newEmployee.name);
console.log(newEmployee.age);
console.log(newEmployee.designation);
//console.log(newEmployee.salary);
console.log(userName);
