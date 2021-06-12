"use strict";
// refresh button
function refresh(){
    window.location.reload("Refresh");
  }

let masthead = "Miles Per Gallon";
// populate masthead
let elMasthead = document.getElementById('masthead');
elMasthead.textContent = `${masthead}`;

// prompt user - converting to float
// get miles driven 
let userMiles = parseFloat(prompt('Enter the number of miles driven: ', 0));
// get gallons used
let galUsed = parseFloat(prompt('Enter the number of gallons used: ', 0));
// calculate mpg
let mpg = 0;
if(userMiles >=0 && galUsed >= 0) {
   mpg = parseFloat(userMiles / galUsed);
}
else {
    userMiles = 0;
    galUsed = 0;
    mpg = 0;
}


// populate label area of html doc
let elMiles = document.getElementById('miles');
elMiles.textContent = userMiles;

let elGallons = document.getElementById('gallons');
elGallons.textContent = galUsed;

let elMPG = document.getElementById('mpg');
elMPG.textContent = mpg.toFixed(2);;