$(document).ready(function(){
  var suits = ["hearts", "diamonds", "spades", "clubs"];
  var numbers = ["ace", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

  suits.forEach(function(suit) {
    numbers.forEach(function(number) {
      $(".result").append("<li>" + number + " of " + suit + "</li>");
    });
  });
});
