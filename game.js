var buttonColors = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];

var userClickedPattern = [];

var gameStart = false

var level = 0

$(document).keydown(function() {

    if(!gameStart){

        $('#level-title').text("Level " + level);
        nextSequence();
        gameStart = true

    }


})

//click functionality
$(".btn").click(function(){

    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

})

function nextSequence(){

    level++;
    var randomNum = Math.floor(Math.random() * 4);    
    var randomChosenColor = buttonColors[randomNum];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
    $('#level-title').text("Level " + level);


}

function playSound(randomChosenColor){

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

}

function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
      setTimeout(function () {

      $("#" + currentColor).removeClass("pressed");

    }, 100);

}








