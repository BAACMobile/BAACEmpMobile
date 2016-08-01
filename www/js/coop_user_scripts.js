/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {

        /* graphic button  #btnCoopDetailImg */
    $(document).on("click", "#btnCoopDetailImg", function(evt)
    {
        window.location.href = 'coopDetail.html';
        /* your code goes here */
         return false;
    });

         $(document).on("click", "#btnLoanDetail", function(evt)
    {
        window.location.href = 'coopLoan.html';
        /* your code goes here */
         return false;
    });
        /* graphic button  #btnCoopDep */
    $(document).on("click", "#btnCoopDep", function(evt)
    {
        /* your code goes here */
        window.location.href = 'coopDep.html';
         return false;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
