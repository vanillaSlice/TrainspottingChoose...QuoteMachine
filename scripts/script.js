$(document).ready(function () {
  
  'use strict';
  
  var character = 'Mark "Rent-boy" Renton',
    film = 'Trainspotting',
    quotes = [
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
      'Choose rotting away at the end of it all, p**sing your last in a miserable home, nothing more than an embarrassment to the selfish, f**ked up brats you spawned to replace yourselves.',
      'Choose your future.'
    ],
    quoteParams = {id: '#quote-text'};
  
  function typeText(params) {
    if (params.currentIndex <= params.text.length) {
      $(params.id).html('<span>' + params.text.substring(0, params.currentIndex) + '</span>' +
                        '<span class="hidden">' + params.text.substring(params.currentIndex) + '</span>');
      params.timeout = setTimeout(function () { typeText(params); }, 25);
      params.currentIndex += 1;
    }
  }
  
  function typeQuote() {
    quoteParams.text = quotes[Math.round(Math.random() * (quotes.length - 1))];
    quoteParams.currentIndex = 0;
    clearTimeout(quoteParams.timeout);
    typeText(quoteParams);
  }
  
  function typeCharacter() {
    typeText({id: '#character', text: character, currentIndex: 0});
  }
  
  function typeFilm() {
    typeText({id: '#film', text: film, currentIndex: 0});
  }
  
  typeQuote();
  typeCharacter();
  typeFilm();

  $('#next-button').click(function () {
    typeQuote();
  });
  
  $('#tweet-button').click(function () {
    window.open('https://twitter.com/intent/tweet?text="' + encodeURIComponent(quoteParams.text) + '"&hashtags=trainspotting');
  });
  
});