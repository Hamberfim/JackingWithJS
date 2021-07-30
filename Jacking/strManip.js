"use strict";

// function to count and display the number of characters
function displayCount() {

    let word = document.getElementById('word').value;

    let myBr = '<br>';

    let phrase = word + " <-- has XX characters (not including spaces).";
    let newPhrase = "";

    if(phrase.includes('XX')) {
        word = word.split(" ").join("");  // remove space to count only letters
        newPhrase = phrase.replace('XX', `${word.length}`);
        
    }
    let elPhrase = document.getElementById('phrase');
    elPhrase.textContent = newPhrase;

}

// function to calculate and display grams in cups
function convertGramsToCups() {
    let grams = document.getElementById('grams').value;

    let cups = grams / 125.00;  // 120-130 grams equals a 'light' cup measurement
    cups = cups.toFixed(2);

    let converted = grams + " gram(s) is approximately XX cup(s).";
    let cupResults = "";

    if(converted.includes('XX')) {
        cupResults = converted.replace('XX', cups);
    }

    let elResults = document.getElementById('results');
    elResults.textContent = cupResults;
}
