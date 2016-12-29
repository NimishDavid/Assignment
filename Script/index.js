function validate(){ //Function to validate username and password using AJAX call.
	var userName = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == "200") {
			var response = this.responseText;
			response = JSON.parse(response); // Converting response text into object.
			if(response.status == "200") { // Login successful.
				document.getElementById("error").style.display = "none";
				window.alert(response.message); // Display login success alert.
				window.location = "home.html"; // Redirecting to home page.
				return true;
			}
			else { // Login fail. Username or password incorrect.
				document.getElementById("error").innerHTML = response.message; // Display login failure message.
				document.getElementById("error").style.display = "block";
				return false;
			}
		}
	}
	xhttp.open("POST", "https://exptest.herokuapp.com/api/login", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("userName="+userName+"&password="+password);
	return false;
}

function confirmLogout() { // Function to confirm logout operation.
    var ask = window.confirm("Are you sure you want to logout?");
    if (ask) {

        window.alert("Logout successful");
        document.location.href = "index.html"; // Redirect to login page.

    }

}
