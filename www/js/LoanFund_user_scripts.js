/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  Button */


        /* button  Button */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        /* your code goes here */
         return false;
    });

        /* button  #BtnBack */
    $(document).on("click", "#BtnBack", function(evt)
    {
         /*global activate_page */
         window.location.href = 'MainMenu.html';
         return false;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
