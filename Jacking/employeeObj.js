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


function findEmployee(employee) {
    return `Found ${employee.firstName} ${employee.lastName} in ${employee.department}.`;
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

const empArray = {
    {
        employees: {
            firstName: 'Rob',
            lastName: 'Jerico',
            title: 'CFO',
            department: 'Information Technology'
        },
        {
            firstName: 'Guy',
            lastName: 'Richey',
            title: 'Media Manager',
            department: 'Communications'
        },
        {
            firstName: 'Lisa',
            lastName: 'Bowenship',
            title: 'Manager',
            department: 'Payroll'
        },
        {
            firstName: 'Wendy',
            lastName: 'Streets',
            title: 'Copy Editor',
            department: 'Communications'
        },
        {
            firstName: 'Paul',
            lastName: 'Docheski',
            title: 'Assistant Directory',
            department: 'Human Resources'
        }
    }

};

console.log(empArray);
console.log("Type is " + typeof (empArray));
let foundBowenship = findEmployee(empArray.employee.lastName);
console.log(foundBowenship);

var car = {

    manufacturer: {

        toyota: {

            vitz: {

                color: "Blue",

                bodyType: "Hatchback"

            },

            corolla: {

                color: "Silver",

                bodyType: "Sedan"

            }
        },

        Honda: {

            civic: {

                color: "White",

                bodyType: "Hatchback"

            },

            city: {

                color: "Black",

                bodyType: "Sedan"

            }
        }
    }
};