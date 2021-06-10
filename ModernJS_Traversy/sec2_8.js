// var 
var person1;
// or var person1 = "Bob";
person1 = "Bob";
console.log(person1);
person1 = "Tina";
console.log(person1);

// let
let person2;
// or let person2 = "Tom"
person2 = "Tom";
console.log(person2);
person2 = "Sarah";
console.log(person2);

// const
const person3 = "John";
// const has to be assigned - error if you try: const person3;
console.log(person3);
// person3 = "Michelle"; and can not be reassign
// console.log(person3)  // error

// const as an object, elements in the object can be mutated (changed)
const person4 = {
    name:"Kim"
};
console.log(person4);
person4.name = "David";
console.log(person4);

const names = ["David", "Paul", "Mary"];
names.push("Lisa");
console.log(names);
// but you can reassign names as a new primitive value
// names = ["David", "Paul", "Mary", "Lisa"];  // error

// DOM changes
let elheaderOne = document.getElementById('headerOne');
elheaderOne.textContent = "JS Sandbox: Section 2";

// prim. data types
// string
const name = "Bill";
console.log(typeof(name));
// number
const num = 45;
console.log(typeof(num));
// boolean
const isNamed = true;
console.log(typeof(isNamed));
// null
const empty = null;
console.log(typeof(empty));  // not really an object
// symbol
const sym1 = Symbol('word');
console.log(typeof(sym1));
// Every symbol returned by Symbol() is unique...
const sym2 = Symbol('word');
console.log(sym1 === sym2);  // false, so every symbol has its own identity
console.log(Symbol() === Symbol());  // false

// ref data types
// array
const myArray = ["car", "truck", "van"]
console.log(typeof(myArray));
// object literal
const beverage = {
    substance: 'Water',
    type: 'carbinated'
}
console.log(typeof(beverage));

const todayDate  =  new Date();
console.log(typeof(todayDate));

// type conversion
let myVal;

// string to number
myVal = '1492';
console.log(typeof(myVal));
myVal = Number(myVal);
console.log(typeof(myVal));

myVal = '24';
console.log(typeof(myVal));
myVal = +myVal;  // same as saying Number(myVal);
console.log(typeof(myVal));

myVal = +'18';
console.log(myVal.toFixed(2));

// number to string
myVal = 92;
console.log(typeof(myVal));
myVal = String(myVal);
console.log(typeof(myVal));

// date to string
myVal = new Date();
console.log(typeof(myVal));
myVal = String(myVal);
console.log(typeof(myVal));

// array to string
myVal = [1, 2, 3, 4]
console.log(typeof(myVal));
myVal = String(myVal);
console.log(typeof(myVal));

// to String Method: toString()
myVal = 88;
console.log(typeof(myVal));
myVal = myVal.toString();
console.log(typeof(myVal));

myVal = parseInt('125.20');
console.log(myVal + " " + typeof(myVal));

myVal = parseFloat('125.20');
console.log(myVal + " " + typeof(myVal));

// coercion
myVal = 10;  // auto cast to string
myVal2 = '5';
const sum = myVal + myVal2;  // 10 + 5 = 105 as a string
console.log(sum + " " + typeof(sum));
const sum2 = myVal + Number(myVal2);  // 10 + 5 = 15 as a number
console.log(sum2 + " " + typeof(sum2));

// math object
const num1 = 1000;
const num2 = 500;
let myNum;

myNum = Math.PI;
console.log(myNum);
myNum = Math.round(Math.PI);
console.log(myNum);
myNum = Math.random();
console.log(myNum);
myNum = Math.random() * 20 + 1;
console.log(myNum);
myNum = Math.floor(myNum);
console.log(myNum);
myNum = Math.random() * 20 + 1;
myNum = Math.ceil(myNum);
console.log(myNum);
myNum = Math.min(22, 45, 65, 3);
console.log(myNum);
myNum = Math.max(22, 45, 65, 3);
console.log(myNum);