Parse.initialize("ea45aUA3Pwl5AFBGh95DFo6Su2UoQxxEuwNOe79r", "tBNPa5gcnvEpKS6VrQ9ZV3pytKMiPCoiwhAHKxBk");
$('#signOut').click(function(){
    //Some code
    Parse.User.logOut();
	window.location.replace("http://653b029.ngrok.com/")
});
