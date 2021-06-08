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
console.log("Type is " + typeof (empJohnson));
console.log("Mr. " + empJohnson.lastName + " is currently a " + empJohnson.title + " in the " + empJohnson.department + " department.");

// search func to find employee
function findEmployee(employee) {
    return `Found ${employee.firstName} ${employee.lastName}, ${employee.title} in ${employee.department}.`;
}

const empWilliam = {
    firstName: 'Bill',
    lastName: 'William',
    title: 'CTO',
    department: 'Information Technology'
};


let foundEmp = findEmployee(empWilliam);
console.log("Type is " + typeof (foundEmp));
console.log(foundEmp);

// nested employee array
const empArray = {
    Employees: {
        Communications: {
            Director: {
                firstName: 'Rob',
                lastName: 'Jerico',
                title: 'CFO',
                department: 'Communications'
            },
            MediaManager: {
                firstName: 'Guy',
                lastName: 'Richey',
                title: 'Media Manager',
                department: 'Communications'
            },
            SrEditor: {
                firstName: 'Lenardo',
                lastName: 'Biotelli',
                title: 'Sr. Editor',
                department: 'Communications'
            },
            Editor: {
                firstName: 'Kim',
                lastName: 'Samson',
                title: 'Editor',
                department: 'Communications'
            }
        },
        HumanResources: {
            Director: {
                firstName: 'Lisa',
                lastName: 'Bowenship',
                title: 'Manager',
                department: 'Human Resources'
            },
            Payroll: {
                firstName: 'Wendy',
                lastName: 'Harlow',
                title: 'Accountant',
                department: 'Human Resources'
            },
            AccountsPayable: {
                firstName: 'Joe',
                lastName: 'Streets',
                title: 'Accountant',
                department: 'Human Resources'
            },
            Invoicing: {
                firstName: 'Mary',
                lastName: 'Zumrie',
                title: 'Accountant',
                department: 'Human Resources'
            },
            AssistantDir: {
                firstName: 'Paul',
                lastName: 'Docheski',
                title: 'Assistant Directory',
                department: 'Human Resources'
            }
        }
    }
};


console.log(empArray);
console.log("Type is " + typeof (empArray));
let foundCommManager = findEmployee(empArray.Employees.Communications.MediaManager);
console.log(foundCommManager);
let foundAsstDir = findEmployee(empArray.Employees.HumanResources.AssistantDir);
console.log(foundAsstDir);
let foundInvoicing = findEmployee(empArray.Employees.HumanResources.Invoicing);  
console.log(foundInvoicing);

// loop thru Communications
for(var element in empArray.Employees.Communications) {
    console.log(element, empArray.Employees.Communications[element]);
}
console.log("\n");  // space in output

// loop thru HumanResources
for(var element in empArray.Employees.HumanResources) {
    console.log(element, empArray.Employees.HumanResources[element]);
}