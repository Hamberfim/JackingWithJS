// array return from a function
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

// immediately invoked function expressions (iife 'iffy') 
// often used in event handlers, listeners, 
// to prevent conflicts where same variable names are used, 
// as a wrapper around some code and popular in jQuery.
let personsName = (function() {
    let name = "Anthony" + " " + "Bourdain";
    let fullName = "Anthony" + " " + "Michael" + " " + "Bourdain";
    return [name, fullName];
}());  // parenth.() call the func immediately

let personOne = personsName[0];
let personTwo = personsName[1];
console.log("Name: " + personOne);
console.log("Full name: " + personTwo);

// anonymous array function utilizing logic and boolean
let paint  = function(width, height, isWall) {
    let area  =  width * height;
    let msg = "";
    if(isWall) {
        msg = "is the area and since it's a wall you can paint it.";
        return [area, msg];
    }
    else {
        msg = "is the area, but it's not a wall so you shouln't paint it.";
        return [area, msg];
    }

}

let surfaceOne = paint(12, 22, true);
console.log(`${surfaceOne[0]} ${surfaceOne[1]}`);

let surfaceTwo = paint(24, 15, false);
console.log(`${surfaceTwo[0]} ${surfaceTwo[1]}`);