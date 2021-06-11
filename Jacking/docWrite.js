"use strict";

let masthead = "Miles Per Gallon";
// populate masthead
let elMasthead = document.getElementById('masthead');
elMasthead.textContent = `${masthead}`;

// prompt user - converting to float
// get miles driven 
const userMiles = parseFloat(prompt('Enter the number of miles driven: '));
// get gallons used
const galUsed = parseFloat(prompt('Enter the number of gallons used: '));
// calculate mpg
const mpg = parseFloat(userMiles / galUsed);
