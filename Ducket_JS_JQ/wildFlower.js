"use strict";
// vars for the greeting message
let greeting = "Howdy! ";
let userName = "Anthony";
let message = ", please check your order: ";
let welcome = greeting + userName + message;

// vars for sign details
let sign = "House of the Lords";
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

// get element with id greeting
let elGreet = document.getElementById("greeting");
// replace with welcome
elGreet.textContent = welcome;

// get id userSign
let elSign = document.getElementById("userSign");
elSign.textContent = sign;

// get id tiles
let elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// get id subTotal
let elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = subTotal;

// get id shipping
let elShipping = document.getElementById("shipping");
elShipping.textContent = shipping;

// get id grandTotal
let elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = grandTotal;

// newsletter signup discount
let msg = "Want 10% off your order? Sign up for our newsletter."

function displayNewletter() {
    let elNewsLetter = document.getElementById("newsletter");
    elNewsLetter.textContent = msg;
}
// delay newsletter signup function call
setTimeout(function () {
    displayNewletter();
}, 5000);

// update message
let greetingMsg = `${userName}, Thanks for shopping with us.`

function updateMessage() {
    let elNewGreeting = document.getElementById("greeting");
    elNewGreeting.textContent = greetingMsg;
}
// delay updated message function call
setTimeout(function () {
    updateMessage();
}, 9000);