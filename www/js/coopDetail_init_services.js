/*global data_support, intel */

/* --------------
 initialization
  the xdkFilter argument can be set to a function that
   receives the data of the service method and can return alternate data
   thus you can reformat dates or names, remove or add entries, etc.
   -------------- */

/*global angular*/
 angular.module('myApp',['ionic']).config(['$controllerProvider', function($controllerProvider) {
	$controllerProvider.allowGlobals();

     //var policyNo = document.getElementById("txt-policyNo").value;
		//var citizenID = document.getElementById("txt-citizenID").value;
		//alert(policyNo+"|"+citizenID);
		var serviceURL = "http://localhost:19478/coopdetail/12345";
		//alert(serviceURL);
		$.getJSON(serviceURL, function(data) {
			$.each(data, function(index, data_obj) {
				//alert(data_obj.CoopID);
        document.getElementById("txt-CoopID").innerHTML =  data_obj.CoopID ;

        document.getElementById("txt-ownShares").innerHTML =  data_obj.ownShares + ' บาท';
        document.getElementById("txt-instanceShares").innerHTML =  data_obj.instanceShares + ' บาท';
        document.getElementById("txt-lastInstance").innerHTML =  data_obj.lastInstance + ' บาท';
				//$("#txt-phone").val(data_obj.phone);
				});
			});

}]);

