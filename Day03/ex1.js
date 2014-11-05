var personCollection = [];
function init(){
	document.getElementById("addbutton").onclick = addButtonClicked;
}
function addButtonClicked(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var email = document.getElementById("email").value;
	addPerson(name,age,email);
	displayPersons();
}
function displayPersons(){
	document.getElementById("personstable").style.display = "block";
	var personToBeAdded = personCollection[personCollection.length-1];
	var row = "<tr>";
	row += "<td>" + personToBeAdded.name + "</td>";
	row += "<td>" + personToBeAdded.age + "</td>";
	row += "<td>" + personToBeAdded.email + "</td>";
	row += "</tr>";
	document.getElementById("personstbody").innerHTML += row;
}
function addPerson(n,a,e){
	var person = {
		name : n,
		age : a,
		email : e
	};
	personCollection.push(person);
}