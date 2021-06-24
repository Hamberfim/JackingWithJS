"use strict";

function displayCount() {

    let word = document.getElementById('word').value;
    // elJob.textContent = job;

    let phrase = word + " has XX characters.";
    let newPhrase = "";

    if(phrase.includes('XX')) {
        word = word.split(" ").join("");  // remove space to count only letters
        newPhrase = phrase.replace('XX', word.length);
        
    }
    let elPhrase = document.getElementById('phrase');
    elPhrase.textContent = newPhrase;

}
