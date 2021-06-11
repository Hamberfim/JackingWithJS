// rv park rental script
// rv park constructor notation
function RvRentalPark(rvParkName, rvSpaces, booked) {
    this.rvParkName = rvParkName;
    this.rvSpaces = rvSpaces;
    this.booked = booked;
    this.checkAvail = function() {
        return this.rvSpaces - this.booked;
    };

}

let oasis = new RvRentalPark('Oasis RV Park', 48, 9);
let lakeFront = new RvRentalPark('Lake Front RV Park', 22, 12);
let pines = new RvRentalPark('The Pines RV Park', 85, 33);
let hillCo = new RvRentalPark('Hill Country RV Park', 28, 5);

// Oasis RV
let elCardHeader1 = document.getElementById('cardHeader1');
elCardHeader1.textContent = oasis.rvParkName;

let elNumSpace1 =document.getElementById('numSpace1');
elNumSpace1.textContent = "Number of RV Spaces: " + oasis.rvSpaces;

let elAvailable1 = document.getElementById('available1');
elAvailable1.textContent = "Available Spaces: " + oasis.checkAvail();

// Lake Front RV
let elCardHeader2 = document.getElementById('cardHeader2');
elCardHeader2.textContent = lakeFront.rvParkName;

let elNumSpace2 =document.getElementById('numSpace2');
elNumSpace2.textContent = "Number of RV Spaces: " + lakeFront.rvSpaces;

let elAvailable2 = document.getElementById('available2');
elAvailable2.textContent = "Available Spaces: " + lakeFront.checkAvail();

// Pines RV
let elCardHeader3 = document.getElementById('cardHeader3');
elCardHeader3.textContent = pines.rvParkName;

let elNumSpace3 =document.getElementById('numSpace3');
elNumSpace3.textContent = "Number of RV Spaces: " + pines.rvSpaces;

let elAvailable3 = document.getElementById('available3');
elAvailable3.textContent = "Available Spaces: " + pines.checkAvail();

// Hill Country RV
let elCardHeader4 = document.getElementById('cardHeader4');
elCardHeader4.textContent = hillCo.rvParkName;

let elNumSpace4 =document.getElementById('numSpace4');
elNumSpace4.textContent = "Number of RV Spaces: " + hillCo.rvSpaces;

let elAvailable4 = document.getElementById('available4');
elAvailable4.textContent = "Available Spaces: " + hillCo.checkAvail();