// operators

lName = "Jackson";
console.log(lName == 'William');
console.log(lName != 'William');
console.log('');

months = 12;
console.log(months >= 10);
console.log(months <= 10);
console.log('');

rate = 0.03;
console.log(rate / 100 >= 0.01);
console.log(rate / 100 <= 0.01);
console.log('');

// Not a Number (NaN)
console.log(isNaN('23'));
console.log(isNaN(23));
console.log(Number.isNaN('23'));
console.log(isNaN('twenty-three'));
console.log('');

if (lName != 'William' && months >= 10) {
    console.log('Both expressions are true');
}

if (lName == 'William' || months >= 10) {
    console.log('One of the expressions are true');
}

if (!isNaN(months)) {
    console.log('Is not a "NOT A NUMBER (!isNaN)"');
}
console.log('');

const pizza = 'pizza';
for (let i = 0; i < pizza.length; i++) {
    let element = pizza[i];
    console.log(element)
}
console.log('');

let count = pizza.length;
while (count > 0) {
    console.log(count);
    count--;
}

let counter = 1;
let elCountWhile = document.getElementById('countWhile');
document.write('Take off in...</br>');
while (counter < 6) {
    elCountWhile.textContent = document.write(counter + "...");;
    counter++;
}
document.write('</br>');


let elCountFor = document.getElementById('countFor');
for (let i = 5; i > 0; i--) {
    elCountFor.textContent = document.write(i + "...");
}
document.write('</br>BLAST OFF!');