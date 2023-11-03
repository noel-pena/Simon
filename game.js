var buttonColors = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];

function nextSequence(){

    var randomNum = Math.floor(Math.random() * 4);    
    var randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + nextSequence() + ".mp3");
    audio.play();

}

$('.btn').click(function(){

    var userChosenColour = $(this).attr('id');

})





