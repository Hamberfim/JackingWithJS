"use strict";

// first card
// declare and initialize
let addObj = new Object();
addObj.fName = "Jo Jo";
addObj.lName = "Shabadoo";
addObj.address = "1122 Boogie-Woogie Ave.";
addObj.city = "Somewhere";
addObj.state = "NY";

// display
let elFName = document.getElementById('fName');
elFName.textContent = addObj.fName;

let elLName = document.getElementById('lName');
elLName.textContent = addObj.lName;

let elAddress = document.getElementById('address');
elAddress.textContent = addObj.address;

let elCity = document.getElementById('city');
elCity.textContent = addObj.city;

let elState = document.getElementById('state');
elState.textContent = addObj.state;

// constructor with default values
function Dog(name = "Roy", breed = "Lab", color = "Brown", age = 1) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.age = age;
}
// instantiate object
let roy = new Dog();

// display
let elDName1 = document.getElementById('dName1');
elDName1.textContent = roy.name;

let elDBreed1 = document.getElementById('dBreed1');
elDBreed1.textContent = roy.breed;

let elDColor1 = document.getElementById('dColor1');
elDColor1.textContent = roy.color;

let elDAge1 = document.getElementById('dAge1');
elDAge1.textContent = roy.age;

// instantiate object
let sukha = new Dog("Sukha", "Mini-Assie", "Light Red-Tricolor", 2);

// display
let elDName2 = document.getElementById('dName2');
elDName2.textContent = sukha.name;

let elDBreed2 = document.getElementById('dBreed2');
elDBreed2.textContent = sukha.breed;

let elDColor2 = document.getElementById('dColor2');
elDColor2.textContent = sukha.color;

let elDAge2 = document.getElementById('dAge2');
elDAge2.textContent = sukha.age;