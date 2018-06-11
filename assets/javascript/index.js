$(document).ready(function(){

  $("#restartBtn").on("click", function(){
    $("td").each(function(){
      $("td").text("");
      $("td").css("color", "black");
      $("td").css("pointer-events","auto");
    });
    $("#message").text("Welcome to Tic Tac Toe");
  });

  var turn = 0;
  $("td").on("click", function(){
    if (turn % 2 == 0){
      $(this).text("X");
    } else {
      $(this).text("O");
    }
    turn++;
    // $(this).prop("disabled", true);
    $(this).css("pointer-events","none");
    checkWinner($(this));
  });

  function checkWinner(id){
    // Horizontal Victory
    if ($("#cell1").text() != "" && $("#cell1").text() == $("#cell2").text() && $("#cell1").text() == $("#cell3").text()){
      $("#message").text($("#cell1").text() + " has won!");
    } else if ($("#cell4").text() != "" && $("#cell4").text() == $("#cell5").text() && $("#cell4").text() == $("#cell6").text()){
      $("#message").text($("#cell4").text() + " has won!");
    } else if ($("#cell7").text() != "" && $("#cell7").text() == $("#cell8").text() && $("#cell7").text() == $("#cell9").text()){
      $("#message").text($("#cell7").text() + " has won!");
    }
    // Vertical Victory
    if ($("#cell1").text() != "" && $("#cell1").text() == $("#cell4").text() && $("#cell1").text() == $("#cell7").text()){
      $("#message").text($("#cell1").text() + " has won!");
    } else if ($("#cell2").text() != "" && $("#cell2").text() == $("#cell5").text() && $("#cell2").text() == $("#cell8").text()){
      $("#message").text($("#cell2").text() + " has won!");
    } else if ($("#cell3").text() != "" && $("#cell3").text() == $("#cell6").text() && $("#cell3").text() == $("#cell9").text()){
      $("#message").text($("#cell3").text() + " has won!");
    }
    // Diagonal Victory
    if ($("#cell1").text() != "" && $("#cell1").text() == $("#cell5").text() && $("#cell1").text() == $("#cell9").text()){
      $("#message").text($("#cell1").text() + " has won!");
    } else if ($("#cell3").text() != "" && $("#cell3").text() == $("#cell5").text() && $("#cell3").text() == $("#cell7").text()){
      $("#message").text($("#cell3").text() + " has won!");
    }
	// Ties
	if ($("#cell1").text() != "" &&  $("#cell2").text() != "" &&  $("#cell3").text() != "" &&  $("#cell4").text() != "" &&  $("#cell5").text() != "" &&  $("#cell6").text() != "" &&  $("#cell7").text() != "" &&  $("#cell8").text() != "" &&  $("#cell9").text() != "") {
	  $("#message").text("Draw!");
	}
  }
})
