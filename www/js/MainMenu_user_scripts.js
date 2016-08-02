/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {

        /* graphic button  รายละเอียดพนักงาน */
    $(document).on("click", ".uib_w_8", function(evt)
    {
        window.location.href = 'EmpDetail.html';
         return false;
    });

        /* graphic button  #btnLoanFund */
    $(document).on("click", "#btnLoanFund", function(evt)
    {
        window.location.href = 'LoanFund.html';
         return false;
    });

        /* graphic button  #btnCoop */
    $(document).on("click", "#btnCoop", function(evt)
    {
        window.location.href = 'coop.html';
         return false;
    });

        /* graphic button  #btnBenefit */
    $(document).on("click", "#btnBenefit", function(evt)
    {
        window.location.href = 'Benefits.html';
         return false;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
