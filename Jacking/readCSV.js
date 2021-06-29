"use strict";

// basic read csv data
document.querySelector("#parse-button1").addEventListener('click', function() {
    let file = document.querySelector("#file-input1").files[0];
    let reader = new FileReader();
    reader.addEventListener('load', function(e) {
            let text = e.target.result;
            document.querySelector("#file-contents1").textContent = text;
    });
    reader.readAsText(file);
});

// file reader (FileReader Object)
document.querySelector("#parse-button2").addEventListener('click', function() {
	if(document.querySelector("#file-input2").files.length == 0) {
		alert('Error : No file selected');
		return;
	}

	// file selected by user
	let file = document.querySelector("#file-input2").files[0];

	// new FileReader object
	let reader = new FileReader();

	// event fired when file reading finished
	reader.addEventListener('load', function(e) {
	   // contents of the file
	    let text = e.target.result;

	    document.querySelector("#file-contents2").textContent = text;
	});

	// event fired when file reading failed
	reader.addEventListener('error', function() {
	    alert('Error : Failed to read file');
	});

	// read file as text file
	reader.readAsText(file);
});