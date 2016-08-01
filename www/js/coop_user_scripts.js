/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  #btnCoopDetail */
    $(document).on("click", "#btnCoopDetail", function(evt)
    {
        /* your code goes here */
        window.location.href = 'coopDetail.html';
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
