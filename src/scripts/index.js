/*
 * Text Constants
 */

const character = 'Mark "Rent-boy" Renton';
const film = 'Trainspotting';
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
 * DOM Elements
 */

const characterElement = $('.js-character');
const filmElement = $('.js-film');
const quoteElement = $('.js-quote');
const nextBtnElement = $('.js-next-btn');
const tweetBtnElement = $('.js-tweet-btn');

/*
 * Functions
 */

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomQuote() {
  return getRandomElement(quotes);
}

function Typer(element, text) {
  let timeout;
  let currentIndex = 0;

  return {
    start: function typeText() {
      if (currentIndex > text.length) {
        return;
      }

      element.html(
        `<span>${text.substring(0, currentIndex)}</span>`
        + `<span class="hidden">${text.substring(currentIndex)}</span>`,
      );

      currentIndex += 1;

      timeout = setTimeout(typeText, 25);
    },

    stop: () => clearTimeout(timeout),

    text,
  };
}

/*
 * Typers
 */

const characterTyper = Typer(characterElement, character);
const filmTyper = Typer(filmElement, film);
let quoteTyper = Typer(quoteElement, getRandomQuote());

/*
 * Buttons
 */

nextBtnElement.click(() => {
  quoteTyper.stop();
  quoteTyper = Typer(quoteElement, getRandomQuote());
  quoteTyper.start();
});

tweetBtnElement.click(() => {
  window.open(encodeURI(`https://twitter.com/intent/tweet?text="${quoteTyper.text}"&hashtags=${film.toLowerCase()}`));
});

/*
 * Initialise
 */

characterTyper.start();
filmTyper.start();
quoteTyper.start();
