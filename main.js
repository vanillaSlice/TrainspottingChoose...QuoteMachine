$(document).ready(function() {

  'use strict';

  /*
   * Text constants.
   */
  var characterText = 'Mark "Rent-boy" Renton';
  var filmText = 'Trainspotting';
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
    'Choose rotting away at the end of it all, p**sing your last in a miserable home, nothing more than an embarrassment to the selfish, f**ked up brats you spawned to replace yourselves.',
    'Choose your future.'
  ];

  /*
   * DOM elements.
   */
  var characterElement = $('.quote__character');
  var filmElement = $('.quote__film');
  var quoteElement = $('.quote__text');
  var nextBtnElement = $('.quote__next-btn');
  var tweetBtnElement = $('.quote__tweet-btn');

  /*
   * Typers.
   */
  var characterTyper = Typer(characterElement, characterText);
  var filmTyper = Typer(filmElement, filmText);
  var quoteTyper = Typer(quoteElement, getRandomQuote());

  // Typer takes an element and prints the text using a typing effect
  function Typer(element, text) {
    var timeout;
    var currentIndex = 0;

    return {
      start: function typeText() {
        // we've reached the end so stop typing
        if (currentIndex > text.length) {
          return;
        }

        element.html(
          '<span>' + text.substring(0, currentIndex) + '</span>' +
          '<span class="hidden">' + text.substring(currentIndex) + '</span>'
        );

        currentIndex++;

        // continue typing after timeout
        timeout = setTimeout(typeText, 25);
      },

      stop: function() {
        clearTimeout(timeout);
      },

      text: text
    };
  };

  function getRandomQuote() {
    return getRandomElement(quotes);
  }

  function getRandomElement(arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
  }

  // type new quote on next button click
  nextBtnElement.click(function() {
    quoteTyper.stop();
    quoteTyper = Typer(quoteElement, getRandomQuote());
    quoteTyper.start();
  });

  // open quote in twitter on tweet button click
  tweetBtnElement.click(function() {
    window.open(encodeURI('https://twitter.com/intent/tweet?text="' + quoteTyper.text + '"&hashtags=' + filmText.toLowerCase()));
  });

  // start typing
  characterTyper.start();
  filmTyper.start();
  quoteTyper.start();

});