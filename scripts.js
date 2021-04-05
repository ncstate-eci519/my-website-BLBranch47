$(document).ready(function(){
    $("p").click(function(){
     $("p").hide();
 });
});

$(document).ready(function(){
    //Adds a handler for the Toggler ID
   $("#toggler").click(function(){
     //Toggles the visibility for the card with the form in it.
     $(".card").toggle();
   });
   
    //Adds a handler for when the name field is changed.
    $("#name").change(function(){
      //Creates a variable with the value of the #name form field.
      var name = $("#name").val();
      //Sets the text of any <h1> on the page to "Hello name!". Automatically updated when the form field is change and you leave the field.
      $("h1").text("Hello, "+name+"!");
    });
    });