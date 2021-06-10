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