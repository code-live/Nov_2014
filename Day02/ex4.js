function initialize(){
	document.getElementById("loginbutton").onclick = loginButtonClicked;
	document.getElementById("logoutbutton").onclick = logoutButtonClicked;
}

function authenticate(userName,password){
	return userName == "admin" && password == "admin";
}

function loginButtonClicked(){
	var userName = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(authenticate(userName,password)){
		document.getElementById("login").style.display = "none";
		document.getElementById("home").style.display = "block";	
		document.getElementById("error").style.display = "none";
	}
	else{
		document.getElementById("error").style.display = "block";
	}			

}
function logoutButtonClicked(){
	document.getElementById("login").style.display = "block";
	document.getElementById("home").style.display = "none";	
}
