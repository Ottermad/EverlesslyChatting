Parse.initialize("ea45aUA3Pwl5AFBGh95DFo6Su2UoQxxEuwNOe79r", "tBNPa5gcnvEpKS6VrQ9ZV3pytKMiPCoiwhAHKxBk");

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function doesUserExist(username) {
	var query = new Parse.Query(Parse.User);
	query.equalTo("username", username);  // find all the women
	$resultnum = "A";
	query.find({
	  success: function(results) {
	  	alert("yu");
	    $resultnum = results.length;
	  }
	});

	return $resultnum;
}

function isValidMsg(msg) {
  var spaces = 0;
  //Check if value is a string
  if (!(typeof msg == "string")) {
  //  alert("String not detected");
    return false;
  }

  if (msg.trim().length == 0) {
    return false;
  }
  return true;
}

$('#sendButton').click(function(){
	var currentUser = Parse.User.current();
	if (currentUser) {

		var body = document.getElementById("messageInput").value;
		var recipient = document.getElementById("recipient").value;
		if (isValidMsg(body) && isValidMsg(recipient)) {
			var query = new Parse.Query(Parse.User);
			query.equalTo("username", recipient);  // find all the women
			$resultnum = "A";
			query.find({
			  success: function(results) {
			  	if (results.length > 0) {
			  		var Message = Parse.Object.extend("Message");
					var message = new Message();
					 
					message.set("sender", currentUser.getUsername());
					message.set("recipient", recipient);
					message.set("body", body);
					 
					message.save(null, {
					  success: function(message) {
					    // Execute any logic that should take place after the object is saved.
					    alert("Sent");
					    $('.messageField').val('');

					  },
					  error: function(message, error) {
					    // Execute any logic that should take place if the save fails.
					    // error is a Parse.Error with an error code and message.
					    alert('Failed to create new object, with error code: ' + error.message);
					  }
					});

			  	} else {

			  		alert("User don't exist")

			  	}
			  }
			});

		} else {
			alert("Message and Recipient must have a value")
		}


	} else {
	    // show the signup or login page
	    window.location.replace("http://653b029.ngrok.com/login.html");
	}

});


