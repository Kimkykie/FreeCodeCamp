$(document).ready(function () {
  //Default player turn to X
  var playerTurn = 'X';
  //Computer turn
  var compTurn = 'O';
  //Array to store value for win
  var turns = ['','','','','','','','',''];
  //Keep track of comp turn
  var gameOn = false;
  var count = 0;
//Change players turn to O and computers to X
  $("#turnX").click(function () {
    playerTurn = 'O';
    compTurn = 'X';
    $('#turnO').removeClass("inactive");
    $('#turnX').addClass("inactive");
    reset();
  });
//Change players turn to X and computers to O
  $("#turnO").click(function () {
    playerTurn = 'X';
    compTurn = 'O';
    $('#turnX').removeClass("inactive");
    $('#turnO').addClass("inactive");
    reset();
  });

  function computerTurn() {
    //break while loop
    var taken = false;
    while (taken === false && count!== 5) {
      //comps random turn
      var computersMove = (Math.random()*9).toFixed();
      var move = $("#"+computersMove).text();
      if (move === '') {
        $("#"+computersMove).text(compTurn);
        taken = true;
        turns[computersMove] = compTurn;
      }
    }
  }

  function playCheck(turn,id) {
    var spotTaken = $("#"+id).text();
    if (spotTaken === '') {
      count++;
      $('#'+id).text(playerTurn);
        turns[id] = playerTurn;
      winCondition(turns,playerTurn);
      if (gameOn === false) {
        computerTurn();
        winCondition(turns,compTurn);
      }
    }
  }

  function winCondition(turnArray, currentTurn) {
    if (turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Top row across 0, 1 and 2 spots)");
        location.reload();
    }
    else if (turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Top row across 2, 4 and 6 spots)");
        location.reload();
    }

    else if (turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Top row down 0, 3 and 6 spots)");
        location.reload();
    }
    else if (turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Top row across 0, 4 and 8 spots)");
        location.reload();
    }
    else if (turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Middle row down 1, 4 and 7 spots)");
        location.reload();
    }
    else if (turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Third row across 2, 5 and 8 spots)");
        location.reload();
    }
    else if (turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Middle row across 3, 4 and 5 spots)");
        location.reload();
    }
    else if (turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn ) {
        gameOn = true;
        reset();
        alert("Player " + currentTurn + " wins(Bottom row across 6, 7 and 8 spots)");
        location.reload();
    }
    else {
      gameOn = false;
    }

  }

  $(".tic").click(function () {
    var slot = $(this).attr('id');
    playCheck(playerTurn,slot);
  });

  function reset() {
    var turns = ['','','','','','','','',''];
    count=0;
    $(".tic").text('');
    gameOn = false;
  }


  //End of document.ready
});
