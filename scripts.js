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

    $(document).ready(function(){
        //Run when the button is clicked
        $("#cat-button").click(function(){
          //Execute the API call.
          var cat = $.get("https://dog.ceo/api/breeds/image/random");
          
          //Function that runs when the API runs successfully
          cat.done(function(response){
            //Because the API returns an array, get the first element.
            //Show the cat block
            $("#cat").show();
            //Set the SRC of the image to the 
            $("#cat-img").attr("src", response.message);
          });
        });
      });