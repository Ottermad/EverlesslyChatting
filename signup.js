Parse.initialize("ea45aUA3Pwl5AFBGh95DFo6Su2UoQxxEuwNOe79r", "tBNPa5gcnvEpKS6VrQ9ZV3pytKMiPCoiwhAHKxBk");

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    /* do what you want with the form */
    var user = new Parse.User();
	user.set("username", document.getElementById("username").value);
	user.set("password", document.getElementById("password").value);
	user.set("email", document.getElementById("email").value);

	user.signUp(null, {
	  success: function(user) {
	    // Hooray! Let them use the app now.
	    window.location.replace("http://653b029.ngrok.com/");
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});

    // You must return false to prevent the default form behavior
    return false;
}

var form = document.getElementById('signup');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}