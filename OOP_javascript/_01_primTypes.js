"use strict";

let myName = "ANTHONY";
let lowercaseName = myName.toLowerCase();
let firstLetter = myName.charAt(0);
let nameLength = myName.length;
let middleIndex = nameLength / 2;
let middleOfName = myName.substring(middleIndex, middleIndex + 2);

let elMyName = document.getElementById('myName');
elMyName.textContent = myName;

let elLowerName = document.getElementById('lowerName');
elLowerName.textContent = lowercaseName;

let elFirstLetter = document.getElementById('firstLetter');
elFirstLetter.textContent = firstLetter;