$(document).ready(() => {
  /*
   * Text constants.
   */

  const characterText = 'Mark "Rent-boy" Renton';
  const filmText = 'Trainspotting';
  const quotes = [
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
    'Choose your future.',
  ];

  /*
   * DOM elements.
   */

  const characterElement = $('.quote__character');
  const filmElement = $('.quote__film');
  const quoteElement = $('.quote__text');
  const nextBtnElement = $('.quote__next-btn');
  const tweetBtnElement = $('.quote__tweet-btn');

  /*
   * Typers.
   */

  // Typer takes an element and prints the text using a typing effect
  function Typer(element, text) {
    let timeout;
    let currentIndex = 0;

    return {
      start: function typeText() {
        // we've reached the end so stop typing
        if (currentIndex > text.length) {
          return;
        }

        element.html(
          `<span>${text.substring(0, currentIndex)}</span>`
          + `<span class="hidden">${text.substring(currentIndex)}</span>`,
        );

        currentIndex += 1;

        // continue typing after timeout
        timeout = setTimeout(typeText, 25);
      },

      stop: () => clearTimeout(timeout),

      text,
    };
  }

  function getRandomElement(arr) {
    return arr[Math.round(Math.random() * (arr.length - 1))];
  }

  function getRandomQuote() {
    return getRandomElement(quotes);
  }

  const characterTyper = Typer(characterElement, characterText);
  const filmTyper = Typer(filmElement, filmText);
  let quoteTyper = Typer(quoteElement, getRandomQuote());

  // type new quote on next button click
  nextBtnElement.click(() => {
    quoteTyper.stop();
    quoteTyper = Typer(quoteElement, getRandomQuote());
    quoteTyper.start();
  });

  // open quote in twitter on tweet button click
  tweetBtnElement.click(() => {
    window.open(encodeURI(`https://twitter.com/intent/tweet?text="${quoteTyper.text}"&hashtags=${filmText.toLowerCase()}`));
  });

  // start typing
  characterTyper.start();
  filmTyper.start();
  quoteTyper.start();
});
