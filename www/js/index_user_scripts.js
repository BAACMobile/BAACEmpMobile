/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {

    //alert("aa");
     var keyPin = window.localStorage.setItem("keyPin","1234");
     var Numpin = 0;
     var InputKeyPin = "";

     /* button  #btn1 */
    $(document).on("click", "#btn1", function(evt)
    {
        /* your code goes here */
        InputKeyPin += 1;
        CheckPin();
        //alert(InputKeyPin);
    });

        /* button  #btn2 */
    $(document).on("click", "#btn2", function(evt)
    {
        /* your code goes here */
        InputKeyPin += 2;
        CheckPin();
        //alert(InputKeyPin);
    });

        /* button  #btn3 */

    $(document).on("click", "#btn3", function(evt)
    {
        /* your code goes here */
        InputKeyPin += 3;
        CheckPin();
        //alert(InputKeyPin);
    });

        /* button  #btn4 */
    $(document).on("click", "#btn4", function(evt)
    {
        /* your code goes here */
        InputKeyPin += 4;
        CheckPin();
        //alert(InputKeyPin);
    });

         /* button  #btn5 */
    $(document).on("click", "#btn5", function(evt)
    {
        /* your code goes here */
        InputKeyPin += 5;
        //alert(InputKeyPin);
    });

     function CheckPin(){
         if(InputKeyPin == "1234"){
             alert("WelCome");
             window.location.href = 'MainMenu.html';
         }
     }

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
