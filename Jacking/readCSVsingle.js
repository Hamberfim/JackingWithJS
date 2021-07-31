"use strict";

// basic read csv data
document.querySelector("#parse-button").addEventListener('click', function () {
    let file = document.querySelector("#file-input").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function (e) {
        let text = e.target.result;

        let newTextLines = "";

        if (text !== "") {
            newTextLines = text.split("\n"); // split into an array for each line

        }

        let headerTitleList = newTextLines[0].split(",");

        let titles = "";
        for (let i = 0; i < headerTitleList.length; i++) {
            titles += `<th class="text-nowrap">${headerTitleList[i]}</th>`;

        }
        document.getElementById('file-fieldHeaders').innerHTML = titles;


        let contentItemsList = newTextLines.slice(1, newTextLines.length);

        let itemsList = "";
        for (let i = 0; i < contentItemsList.length; i++) {
            itemsList += contentItemsList[i];

        }

        let rows = "";
        if (itemsList !== "") {
            rows = itemsList.split("\r"); // split on each row

        }
        // console.log(rows);

        // TODO: NEEDS FIXED - table breaks-up in markup
        let templateFields = "";
        for (let i = 0; i < rows.length; i++) {
            let rowItems = rows[i].split(",");
            for (let index = 0; index < rowItems.length; index++) {
                templateFields += `<td>${rowItems[index]}</td>`;

            }

        }
        // console.log(templateFields);
        document.getElementById('file-contents').innerHTML = templateFields;

    });

    reader.readAsText(file);
});