function makeMessage() {
	var v1, v2, v3, v4, v5, v6, v7;
		v1 = $("#one");
		v2 = $("#two");
		v3 = $("#three");
		v4 = $("#four");
		v5 = $("#five");
		v6 = $("#six");
		v7 = $("#seven")
		
		var alertMessage;
		if(v1.val() ==""){ alertMessage += "Missing First Name, "; v1.addClass("missing"); }
		else { v1.removeClass("missing"); }
		if(v2.val() ==""){ alertMessage += "Missing Last Name, "; v2.addClass("missing"); }
		else { v2.removeClass("missing"); }
		if(v3.val() ==""){alertMessage += "Missing Address, "; v3.addClass("missing"); }
		else { v3.removeClass("missing"); }
		if(v4.val() ==""){ alertMessage += "Missing City, "; v4.addClass("missing"); }
		else { v4.removeClass("missing"); }
		if(v5.val() ==""){ alertMessage += "Missing State, "; v5.addClass("missing"); }
		else { v5.removeClass("missing"); }
		if(v6.val() ==""){alertMessage += "Missing Zip Code, "; v6.addClass("missing"); }
		else { v6.removeClass("missing"); }
		if(v7.val() ==""){alertMessage += "Missing Phone Number, "; v7.addClass("missing"); }
		else { v7.removeClass("missing"); }
		
		if(alertMessage != ""){alert("You are missing\n" + alertMessage);}
		else {
			var message = "Welcome " + v1.val() + " " + v2.val() + "<br>";
			message += "who lives at " + v3.val() + " " + v4.val() + " " + v5.val() + " " + v6.val() + "<br>";
			message += "and whose phone number is " + v7.val() + "<br><br>";
			message += "I hope you enjoy your position with our company";
			$("#welcomeMessage").append(message);}
			
}
	
		
	