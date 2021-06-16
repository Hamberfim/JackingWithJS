"use strict";

// park rental shelter constructor
function Park(name, address, city, state, zip, numShelterRental, reserved) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.numShelterRental = numShelterRental;
    this.reserved = reserved;
    this.checkAvail = function () {
        return this.numShelterRental - this.reserved;
    };

}

let oasis = new Park(
    'Oasis Park',
    '1122 Boogie Av.',
    'Tempe',
    'AZ',
    '85281',
    15,
    4);

let pines = new Park(
    'Pines Park',
    '9997 Forest Rd.',
    'Tempe',
    'AZ',
    '85281',
    18,
    6);

let lake = new Park(
    'Lake Park',
    '7693 Lake Park Ln.',
    'Tempe',
    'AZ',
    '85281',
    22,
    9);

let river = new Park(
    'River-Side Park',
    '2804 Dirt Cr.',
    'Tempe',
    'AZ',
    '85281',
    19,
    8);

let mountView = new Park(
    'Mountain View Park',
    '4800 CamelBack Rd.',
    'Tempe',
    'AZ',
    '85281',
    9,
    6);

// park shelter array
let parkArray = [oasis, pines, lake, river, mountView];

// generate html thru a loop and populate it with the objects in the array
function DisplayParks() {
    let elParkName = "";
    for (let i = 0; i < parkArray.length; i++) {
        console.log(parkArray[i]);
        elParkName += "<span class='text-primary text-uppercase h5'>" + parkArray[i].name + "</span>" + "<br/>";
        elParkName += "<span class='text-secondary'>" + parkArray[i].address + " " + parkArray[i].city + ", " + parkArray[i].state + " " + parkArray[i].zip + "</span><br/>";
        elParkName += "<span class='text-secondary'>Number of Shelters: </span>" + "<strong>" + parkArray[i].numShelterRental + "</strong><br/>";
        elParkName += "<span class='text-danger'><em>Shelters available to reserve: </em></span><strong>" + parkArray[i].checkAvail() + "</strong></span><br/><br/>";
    };

    document.getElementById('parkInfo').innerHTML = elParkName;
};
// call the function to display the park shelters
DisplayParks();