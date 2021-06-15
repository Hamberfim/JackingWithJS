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
    this.checkAvail = function () {
        return this.numShelterRental - this.reserved;
    };

}

let oasis = new Park(
    'Oasis Park',
    '1122 Boogie Av.',
    'Tempe',
    'AZ',
    '11111',
    15,
    4);

let pines = new Park(
    'Pines Park',
    '9997 Forest Rd.',
    'Tempe',
    'AZ',
    '11111',
    18,
    6);

let lake = new Park(
    'Lake Park',
    '7693 Lake Park Ln.',
    'Tempe',
    'AZ',
    '11111',
    22,
    9);

let river = new Park(
    'River-Side Park',
    '2804 Dirt Cr.',
    'Tempe',
    'AZ',
    '11111',
    19,
    8);

let parkArray = [oasis, pines, lake, river];

// header
document.write(`<div class="container">
                    <div class="row">
                    <div class="col-12-md my-2 mx-5">
                        masthead
                    </div>
                </div>`);

// generate html thru a loop and the objects in the array
for (let i = 0; i < parkArray.length; i++) {
    //console.log(parkArray[i]);
    //let elLoopContent = document.getElementById('loopContent');

    const html = `<div class="row">
                        <div class="col-12-md mx-auto my-2">
                            <div class="card" style="min-width: 20rem;">
                                <h4 class="card-header text-white bg-dark">${parkArray[i].name}</h4>
                                <div class="card-body">
                                    ${parkArray[i].address} ${parkArray[i].city}, ${parkArray[i].state} ${parkArray[i].zip}</br>
                                    <div class="card-text text-muted">Number of Shelters: ${parkArray[i].numShelterRental}</div>
                                </div>
                                <div class="card-footer text-danger">
                                    ${parkArray[i].checkAvail()} Shelters available to rent.
                                </div>
                            </div>
                        </div>
                    </div>`;

    //elLoopContent.textContent = document.write(html);
    document.write(html);
};
document.write(`<div class="row">
                    <div class="col-12-md my-2 mx-5">
                        footer
                    </div>
                </div>
            </div>`);