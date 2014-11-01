Parse.initialize("ea45aUA3Pwl5AFBGh95DFo6Su2UoQxxEuwNOe79r", "tBNPa5gcnvEpKS6VrQ9ZV3pytKMiPCoiwhAHKxBk");
$('#signUp').click(function(){
    //Some code
	window.location.replace("http://653b029.ngrok.com/signup.html")
});

function processForm(e) {
    if (e.preventDefault) e.preventDefault();

    /* do what you want with the form */
    var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	Parse.User.logIn(username, password, {
	  success: function(user) {
	    // Do stuff after successful login.
	    window.location.replace("http://653b029.ngrok.com/")
	  },
	  error: function(user, error) {
	    // The login failed. Check error to see why.
	  }
	});

    // You must return false to prevent the default form behavior
    return false;
}

var form = document.getElementById('login');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}