"use strict";

// declare and initialize
let myName = "ANTHONY";
let lowercaseName = myName.toLowerCase();
let firstLetter = myName.charAt(0);
let nameLength = myName.length;
let middleIndex = nameLength / 2;
let middleOfName = myName.substring(middleIndex - 1, middleIndex + 2);

// display
let elMyName = document.getElementById('myName');
elMyName.textContent = myName;

let elLowerName = document.getElementById('lowerName');
elLowerName.textContent = lowercaseName;

let elFirstLetter = document.getElementById('firstLetter');
elFirstLetter.textContent = firstLetter;

let elMiddleOfName = document.getElementById('middleOfName');
elMiddleOfName.textContent = middleOfName;

// declare and initialize
let myIntCount = 12;
let fixToDoubleCount = myIntCount.toFixed(2);

let elMyIntCount = document.getElementById('myIntCount');
elMyIntCount.textContent = myIntCount;

let elFixToDoubleCount = document.getElementById('fixToDoubleCount');
elFixToDoubleCount.textContent = fixToDoubleCount;

// declare and initialize
let flagTrue = true;
let strFlag = flagTrue.toString();

// display
let elStrFlag = document.getElementById('strFlag');
elStrFlag.textContent = strFlag;