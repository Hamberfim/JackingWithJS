"use strict";
// get user input and calculate the average score
let total = 0;

const score1 = parseFloat(prompt("Enter first of three test scores: "));
total += score1;

const score2 = parseFloat(prompt("Enter second of three test scores: "));
total += score2;

const score3 = parseFloat(prompt("Enter third of three test scores: "));
total += score3;

// calculate average
const average = parseFloat(total / 3);

// gather html content
const html = `<p>Score 1: ${score1}</p>
              <p>Score 2: ${score2}</p>
              <p>Score 2: ${score3}</p>
              <p>Average for the htree Scores: ${average}</p>`;

// write html content
document.write();