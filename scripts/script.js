$(document).ready(function () {
  
  'use strict';
  
  var character = 'Mark "Rent-boy" Renton';
  var film = 'Trainspotting';
  var quotes = [
    'Choose Life.',
    'Choose a job.',
    'Choose a career.',
    'Choose a family.',
    'Choose a f**king big television.',
    'Choose washing machines.',
    'Choose cars.',
    'Choose compact disc players.',
    'Choose electrical tin openers.',
    'Choose good health.',
    'Choose low cholesterol.',
    'Choose dental insurance.',
    'Choose fixed interest mortgage repayments.',
    'Choose a starter home.',
    'Choose your friends.',
    'Choose leisurewear and matching luggage.',
    'Choose a three-piece suit on hire purchase in a range of f**king fabrics.',
    'Choose DIY and wondering who the f**k you are on Sunday morning.',
    'Choose sitting on that couch watching mind-numbing, spirit-crushing game shows, stuffing f**king junk food into your mouth.',
    'Choose rotting away at the end of it all, pissing your last in a miserable home, nothing more than an embarrassment to the selfish, f**ked up brats you spawned to replace yourselves.',
    'Choose your future.'
  ];
  var currentQuote;
  
  $('#character').html(character);
  $('#film').html(film);
  
  function generateRandomQuote() {
    var randomQuote;
    do {
      randomQuote = quotes[Math.round(Math.random() * quotes.length)];
    } while (randomQuote === currentQuote);
    currentQuote = randomQuote;
  }
  
  generateRandomQuote();
  $('#quote-text').html(currentQuote);
  
  $('#next-button').click(function () {
    generateRandomQuote();
    $('#quote-text').html(currentQuote);
  });
  
});