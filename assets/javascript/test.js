$(document).ready(function() {
  
  $("#hello").click(function(){
    console.log("hello world");
  });
  
  $( "#target" ).click(function() {
    alert( "Handler for .click() called." );
  });
  
  $( "#other" ).click(function() {
    $( "#target" ).click();
  });
  
})
