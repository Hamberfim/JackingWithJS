// prompt user for input via functions and display it back to user
// declare global scope variables
let fName;
let userAge;
let userLocation;

// user input
function getUserNameAge() {
    fName = prompt("What is your first name? ");
    userAge = prompt("How old are you? ");
    userLocation = prompt("Where do you live? "); 
}

// display gathered info
function displayUserInfo() {
    alert(`Hello, ${fName}! Your ${userAge} years old.`);
    alert(`Wow, ${userLocation} is a beautiful place.`);
}

// call user input function
getUserNameAge();
// call display function
displayUserInfo();
