/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  Back */
    $(document).on("click", "#btnback", function(evt)
    {
        /* your code goes here */
          window.location.href = 'MainMenu.html';
    });

  }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
