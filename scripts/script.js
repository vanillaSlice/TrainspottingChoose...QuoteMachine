$(document).ready(function () {
  
  'use strict';
  
  var quotes = [
    {
      "quote": "The tings you own end up owning you",
      "character": "Tyler Durden",
      "film": "Fight Club",
      "primary": "rgb(14, 12, 15)",
      "secondary": "rgb(249, 11, 159)"
    },
    
    
    
    {
      "quote": "Choose Life",
      "character": "Renton",
      "film": "Trainspotting",
      "primary": "rgb(232, 107, 0)",
      "secondary": "rgb(255, 255, 255)"  
    },
    {
      "quote": "Choose Life",
      "character": "Renton",
      "film": "Trainspotting",
      "primary": "rgb(12, 12, 12)",
      "secondary": "rgb(61, 249, 0)"  
    },
    {
      "quote": "Choose Life",
      "character": "Renton",
      "film": "Trainspotting",
      "primary": "rgb(255,241,27)",
      "secondary": "rgb(10, 10, 10)"  
    }
  ];
  
  var quote;
  
  $('#new-quote-button').click(function () {
    generateNewQuote();
  });
  
  function generateNewQuote() {
    quote = '"The things you own end up owning you."';
    $('#quote').html(quote);
    $('#quote-details').html("- Tyler Durden in <span id=\"film\">Fight Club</span>");
    $('#twitter-button').attr('href', "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + " Tyler Durden") + "&hashtags=moviequotes");
    var randomNumber = Math.round(Math.random() * quotes.length);
    changeColours(quotes[randomNumber].primary, quotes[randomNumber].secondary);
  }
  
  function changeColours(primary, secondary) {
    $('body').css({'background-color': primary, 'color': secondary});
    $('#box').css('border-color', secondary);
    $('#new-quote-button').css('border-color', secondary);
    $('#twitter-button').css({'color': secondary, 'border-color': secondary});
    $("#twitter-button").hover(function() {
      $(this).css({'color': primary, 'background-color': secondary})
    }, function() {
      $(this).css({'color': secondary, 'background-color': primary})
    });
  }
  
});