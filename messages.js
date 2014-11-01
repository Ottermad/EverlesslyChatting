Parse.initialize("ea45aUA3Pwl5AFBGh95DFo6Su2UoQxxEuwNOe79r", "tBNPa5gcnvEpKS6VrQ9ZV3pytKMiPCoiwhAHKxBk");
var currentUser = Parse.User.current();
if (currentUser) {

	// Simple syntax to create a new subclass of Parse.Object.
	var Message = Parse.Object.extend("Message");
	 
	// Create a new instance of that class.
	var message = new Message();

	message.set("sender", currentUser.getUsername());
	message.set("recipient", "Ottermad");
	message.set("body", "Hello World");
	message.save()


} else {
    // show the signup or login page
    window.location.replace("http://653b029.ngrok.com/login.html");
}
