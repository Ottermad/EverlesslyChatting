Parse.initialize("ea45aUA3Pwl5AFBGh95DFo6Su2UoQxxEuwNOe79r", "tBNPa5gcnvEpKS6VrQ9ZV3pytKMiPCoiwhAHKxBk");
var currentUser = Parse.User.current();
var name = currentUser.getUsername();

document.getElementById("userNameDisplayer").innerHTML = name;