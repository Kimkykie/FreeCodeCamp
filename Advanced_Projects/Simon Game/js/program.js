/* Thanks to https://ayoisaiah.com/simon-game/ for the greater part of the logic required for this challenge */
$(document).ready(function() {
    //Variables
    var arr = [];
    var userArray = [];
    var computerArray = [];
    var steps = 1,
        score = 0;
    var tileIds = [1, 2, 3, 4];
    var interval,
        counter = 0,
        random,
        count = 0,
        mode = 0;
    // Strict mode set to off by default
    var strictMode = 0;

    //Activate a random style by adding an active class
    function activate() {
        $('#tile' + random).addClass('tile' + random + '-active');
    }
    //Function to reset the game
    function reset() {
        $('#tile' + random).removeClass('tile' + random + '-active');
        //Remove strict mode when game is reset
        $(".reset").prop('disabled', false);
    }

    //Function to trigger a click on a random tile
    function trigger() {
        $('#tile' + random).trigger('click', function(e) {});
    }
    // Sett Mode of game to player's turn
    function setMode() {
        mode = 1;
        $('#gameStatus').html('Player Turn');
    }

    //Function to End the game
    function endGame() {
        clearInterval(interval);
        //Reset game values to default
        reset();
        $("#gameStatus").html("Let's play");
        $(".start").removeClass('hidden');
        arr = [];
        userArray = [];
        computerArray = [];
        steps = 1;
        counter = 0;
        count = 0;
        mode = 0;
        score = 0;
        strictMode = 0;
    }
    //Function to check if user has won
    function checkWin() {
    //If user has memorized 20 steps or more alert that the player has won and continue
        if (steps > 10) {
            alert('SMARTY PANTS');
        }
        $(".reset").prop('disabled', 'disabled');
        $("#gameStatus").html("Computer's Turn");
        $(".stepsno").html(steps);
        $(".scoreno").html(score);

        mode = 0;
        arr = computerArray;
        computerArray = [];
        userArray = [];

        interval = setInterval(function() {
            count = 0;
            reset();
            //Generate random number between 1-4 to match tile ids
            random = Math.floor(Math.random() * tileIds.length + 1);
            if (arr[counter] !== undefined) {
                random = arr[counter];
            }
            setTimeout(trigger, 500);
            setTimeout(activate, 500);
            counter++;
            if (counter == steps) {
                clearInterval(interval);
                setTimeout(reset, 750);
                count = 0;
                setTimeout(setMode, 1000);
            }

        }, 750);
    }

    $(".tile").click(function(e) {
        var idNum = e.currentTarget.id.substr(4);
        //Function to play audio of clicked tile
        function playAudio() {
            var audio = document.getElementById("sound-" + idNum);
            audio.play();
        }
        playAudio();
        if (e.isTrigger) {
            computerArray.push(idNum);
        } else if (mode == 1) {
            userArray.push(idNum);
            //Logic for when Strict mode is on
            if (computerArray[count] !== userArray[count] && strictMode === 1) {
                alert('SORRY YOU LOST!');
                endGame();
            }
            //Logic for when strict mode is off
            else if (computerArray[count] !== userArray[count] && strictMode !== 1) {
                $('#gameStatus').html('Wrong Pattern. Try again');
                steps = steps - 1;
                score = score - 1;
            }
            //Success message when correct tile is clicked
            else {
                console.log('Success');
            }
            count++;
            if (count == computerArray.length) {
                mode = 0;
                counter = 0;
                steps++;
                score++;
                setTimeout(checkWin, 400);
                $(".scoreno").html(score);
            }
        }
    });
//When start button is clicked, hide it and run checkWin function
    $(".start").click(function() {
        $(this).addClass('hidden');
        checkWin();
    });
//reset button is pressed end game
    $(".reset").click(function() {
        setTimeout(endGame, 100);
    });
//Button to toggle strict mode
    $(".strict").click(function() {
        if ($(this).hasClass('stricton')) {
            $(this).removeClass('stricton');
            strictMode = 0;
        }
        else {
            $(this).addClass('stricton');
            strictMode = 1;
        }
    });

});
