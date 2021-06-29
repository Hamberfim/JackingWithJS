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

// create park shelter objects
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

let cactus = new Park(
    'Cactus Bend',
    '6321 Cactus Bend Pl.',
    'Tempe',
    'AZ',
    '85281',
    14,
    7);

// add some ammenities
oasis.pool = false;
oasis.electricity = false;
oasis.playground = true;

pines.pool = true;
pines.electricity = true;
pines.playground = true;

lake.pool = false;
lake.electricity = true;
lake.playground = true;

river.pool = false;
river.electricity = true;
river.playground = false;

mountView.pool = true;
mountView.electricity = true;
mountView.playground = true;

cactus.pool = false;
cactus.electricity = false;
cactus.playground = false;

// park shelter array
let parkArray = [oasis, pines, lake, river, mountView, cactus];

// generate html thru a loop and populate it with the objects in the array
function DisplayParks() {
    let elParkName = "";
    let isCheckedPool = "";
    let isCheckedElec = "";
    let isCheckedPlay = "";

    for (let i = 0; i < parkArray.length; i++) {
        // console.log(parkArray[i]);

        // check if ammenities are avalable
        if(parkArray[i].pool === true){
            isCheckedPool = "<input type='checkbox' checked='checked' />";
        }
        else {
            isCheckedPool = "<strong>N/A</strong>";
        }

        if(parkArray[i].electricity === true){
            isCheckedElec = "<input type='checkbox' checked='checked' />";
        }
        else {
            isCheckedElec = "<strong>N/A</strong>";
        }

        if(parkArray[i].playground === true){
            isCheckedPlay = "<input type='checkbox' checked='checked' />";
        }
        else {
            isCheckedPlay = "<strong>N/A</strong>";
        }

        // html -- placeholder on href
        elParkName += "<span class='text-primary text-uppercase h5'><a href='index.html&?" + parkArray.indexOf(parkArray[i]) + "'target='_blank'>" + parkArray[i].name + "</a></span>" + "<br/>";
        elParkName += "<span class='text-secondary'>" + parkArray[i].address + " " + parkArray[i].city + ", " + parkArray[i].state + " " + parkArray[i].zip + "</span><br/>";
        elParkName += "<span class='text-secondary'>Number of Shelters: </span>" + "<strong>" + parkArray[i].numShelterRental + "</strong><br/>";
        elParkName += "<span class='text-danger'><em>Shelters available to reserve: </em></span><strong>" + parkArray[i].checkAvail() + "</strong></span><br/>";
        elParkName += "<span class=''><label>Pool:&nbsp;</label>" + isCheckedPool + "&nbsp;&nbsp;&nbsp;";
        elParkName += "<span class=''><label>Electricity:&nbsp;</label>" + isCheckedElec + "&nbsp;&nbsp;&nbsp;";
        elParkName += "<span class=''><label>Playground:&nbsp;</label>" + isCheckedPlay + "<br/><br/>";
    };

    document.getElementById('parkInfo').innerHTML = elParkName;
};
// call the function to display the park shelters
DisplayParks();