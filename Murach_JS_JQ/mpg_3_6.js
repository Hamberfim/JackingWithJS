let again = 'y';

do {
    const milesDriven = parseFloat(prompt("Enter the miles driven: "));
    const galUsed =  parseFloat(prompt("Enter the gallons of fuel used: "));

    if(milesDriven > 0 && galUsed > 0) {
        const mpg = (milesDriven / galUsed);
        const html = `${milesDriven} miles on ${galUsed} gallons = ${mpg.toFixed(2)} mpg.`;

        let elMpgOutPut = document.getElementById('mpgOutPut');
        elMpgOutPut.textContent = html;
    } else {
        alert("One or both inputs are invalid.");
    }

    again = prompt("Repeat entires? (y/n)", 'y');

} while(again == 'y');