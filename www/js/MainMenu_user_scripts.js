/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers
 */
 function register_event_handlers()
 {


     /* button  #btnEmpDetail */
    $(document).on("click", "#btnEmpDetail", function(evt)
    {
        /* your code goes here */
        window.location.href = 'EmpDetail.html';
         return false;
    });

        /* button  #btnCoop */
    $(document).on("click", "#btnCoop", function(evt)
    {
        /* your code goes here */
        window.location.href = 'coop.html';
         return false;
    });

        /* button  #btnLoanFun */
    $(document).on("click", "#btnLoanFun", function(evt)
    {
        /* your code goes here */
        window.location.href = 'LoanFun.html';
         return false;
    });

        /* button  #btnBenefits */
    $(document).on("click", "#btnBenefits", function(evt)
    {
        /* your code goes here */
        window.location.href = 'Benefits.html';
         return false;
    });

    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
