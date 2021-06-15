"use strict";

// park constructor
function Park(name, address, city, state, zip, numShelterRental, reserved) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.numShelterRental = numShelterRental;
    this.reserved = reserved;
    this.checkAvail = function() {
        return this.numShelterRental - this.reserved;
    };

}



let parkArray;

// generate html thru a loop and object