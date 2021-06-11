"use strict";

let masthead = "Miles Per Gallon";
// populate masthead
let elMasthead = document.getElementById('masthead');
elMasthead.textContent = `${masthead}`;

// prompt user - converting to float
// get miles driven 
const userMiles = parseFloat(prompt('Enter the number of miles driven: ', 0));
// get gallons used
const galUsed = parseFloat(prompt('Enter the number of gallons used: ', 0));
// calculate mpg
const mpg = parseFloat(userMiles / galUsed);

// populate label area of html doc
let elMiles = document.getElementById('miles');
elMiles.textContent = userMiles;

let elGallons = document.getElementById('gallons');
elGallons.textContent = galUsed;

let elMPG = document.getElementById('mpg');
elMPG.textContent = mpg;