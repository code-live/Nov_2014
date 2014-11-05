function initialize(){
	document.getElementById("loginbutton").onclick = loginButtonClicked;
	document.getElementById("logoutbutton").onclick = logoutButtonClicked;
	if(localStorage){
		showFirstScreen();
	}
}

function showFirstScreen(){
	if(localStorage.getItem("username") && 
		localStorage.getItem("password")){
			//send username and password to the server for authentication
			document.getElementById("login").style.display = "none";
			document.getElementById("home").style.display = "block";
	}
}

function authenticate(userName,password){
	return userName == "admin" && password == "admin";
}
function storeCredentialsInLocalStorage(userName,password){
	if(localStorage){
		localStorage.setItem("username",userName);
		localStorage.setItem("password",password);
	}
}
function loginButtonClicked(){
	var userName = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(authenticate(userName,password)){
		document.getElementById("login").style.display = "none";
		document.getElementById("home").style.display = "block";	
		document.getElementById("error").style.display = "none";
		if(document.getElementById("remember").checked){
			storeCredentialsInLocalStorage(userName,password);
		}
	}
	else{
		document.getElementById("error").style.display = "block";
	}			

}
function clearCredentialsFromLocalStorage(){
	if(localStorage){
		localStorage.removeItem("username");
		localStorage.removeItem("password");
	}
}
function logoutButtonClicked(){
	document.getElementById("login").style.display = "block";
	document.getElementById("home").style.display = "none";	
	clearCredentialsFromLocalStorage();
}
