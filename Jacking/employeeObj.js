// create an employee object and console out some info
'use strict';

function userData(firstName, lastName, title, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.department = department;
}

let empJohnson = new userData('Glen', 'Johnson', 'Manager', 'Sales');

console.log(empJohnson);
console.log("Type is " + typeof(empJohnson));
console.log("Mr. " + empJohnson.lastName + " is currently a " + empJohnson.title + " in the " + empJohnson.department + " department.");


function findEmployee(employee) {
    return `Found ${employee.firstName} ${employee.lastName} in ${employee.department}.`;
}

const empWilliam = {
    firstName:'Bill', 
    lastName:'William', 
    title:'CTO', 
    department:'Information Technology'
};


let foundEmp = findEmployee(empWilliam);
console.log(foundEmp);
console.log("Type is " + typeof(foundEmp));