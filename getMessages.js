Parse.initialize("ea45aUA3Pwl5AFBGh95DFo6Su2UoQxxEuwNOe79r", "tBNPa5gcnvEpKS6VrQ9ZV3pytKMiPCoiwhAHKxBk");
var currentUser = Parse.User.current();

function getMessages() {
	var Message = Parse.Object.extend("Message");
	var query = new Parse.Query(Message);
	query.equalTo("recipient", currentUser.getUsername());
	query.find({
	  success: function(results) {
	
	    // Do something with the returned Parse.Object values
	    for (var i = 0; i < results.length; i++) { 
	      var object = results[i];

	      var name = object.get('sender');
	      var text = object.get('body');

	      var messageToDisplay = "<div class='message'> <em class='userNameDisplayer'>" + name + "</em>  :" + "&#9;&#9;&#9;" + text + "</div>";
  		  $('#allMessagesBox').prepend(messageToDisplay);
	    }
	  },
	  error: function(error) {
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

if (currentUser) {

	getMessages();

	$('#refresh').click(function(){
		 var myNode = document.getElementById("allMessagesBox");
		  while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		  }
		getMessages();
	});

} else {
    // show the signup or login page
    window.location.replace("http://653b029.ngrok.com/login.html");
}



