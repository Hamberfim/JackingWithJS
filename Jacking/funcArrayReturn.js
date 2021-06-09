// array reteun from a function
"use strict";

function catUserName(fName, mName, lName) {
    let name = fName + " " + mName;
    let fullName = fName + " " + mName + " " + lName;
    return [name, fullName];
}

let userName = catUserName("Bill", "Krachener")[0];
let userFullName = catUserName("Henry", "Willis", "McWeltch")[1];

console.log("User's name: " + userName);
console.log("User's full name: " + userFullName);

// anonymous function
let guestName = function(fName, mName, lName) {
    let name = fName + " " + mName;
    let fullName = fName + " " + mName + " " + lName;
    return [name, fullName];
}

let guestVerOne = guestName("John", "Hall")[0];
let guestVerTwo = guestName("John", "Michael", "Hall")[1];
console.log("Guest's name: " + guestVerOne);
console.log("Guest's full name: " + guestVerTwo);