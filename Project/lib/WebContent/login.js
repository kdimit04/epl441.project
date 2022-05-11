	var userClinical="TestC";
	var userSecretary="TestS";
	var userHealth="TestH";
	var userMedical="TestM";
	var pass="pass";
	var data = {};
	Login = function () {
	    var data = {};
	    $("#LoginPage input").each(function () {
	        var key = $(this).attr("id");
	        data[key] = $(this).val();
	    })

	    $("#LoginPage select").each(function () {
	        var key = $(this).attr("id");
	        data[key] = $(this).val();
	    })
	
			if(data.Department==="Clinical staff"){
					if(data.username==userClinical && data.password==pass){
						console.log("Clinical");
						var url="file:///C:/Users/doulg/Documents/GitHub/epl441.project/Project/lib/WebContent/"
						url+=$("#clinical").attr("href");
						url+="?#";
						window.location.assign(url);
						//$("#click_href")[0].click();
					}
			}
			else if(data.Department==="Medical Staff"){
					if(data.username==userMedical && data.password==pass){
						console.log("Medical");
						var url="file:///C:/Users/doulg/Documents/GitHub/epl441.project/Project/lib/WebContent/"
						url+=$("#medical").attr("href");
						url+="?#";
						window.location.assign(url);
						//$("#click_href")[0].click();
					}
			}
			else if(data.Department==="Health Manager"){

					if(data.username==userHealth && data.password==pass){
						console.log("Health");
						var url="file:///C:/Users/doulg/Documents/GitHub/epl441.project/Project/lib/WebContent/"
						url+=$("#health").attr("href");
						url+="?#";
						window.location.assign(url);
						//$("#click_href")[0].click();
					}
			}
			else if(data.Department==="Receptionist"){
					if(data.username==userSecretary && data.password==pass){
						console.log("Receptionist");
						var url="file:///C:/Users/doulg/Documents/GitHub/epl441.project/Project/lib/WebContent/"
						url+=$("#Receptionist").attr("href");
						url+="?#";
						window.location.assign(url);
						//$("#click_href")[0].click();
					}
			}
	};

	$(document).ready(function () {
			console.log("Opened");
	    $('#LoginButton').on('click', function () {
	        Login();
	    });
	});
