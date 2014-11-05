var personCollection = [];
function init(){
	document.getElementById("addbutton").onclick = addButtonClicked;
	document.getElementById("removebutton").onclick = removeButtonClicked;
}
function removeButtonClicked(){
	var newCollection = [];
	for(var key in personCollection){
		var checkbox = document.getElementById("chk"+key);
		if(!checkbox.checked)
			newCollection.push(personCollection[key]);
	}
	personCollection = newCollection;
	updatePersonsTable();
}

function updatePersonsTable(){
	var rows = "";
	if(personCollection.length != 0){
		for(var key in personCollection){
			var personToBeAdded = personCollection[key];
			var row = createRow(personToBeAdded.name,personToBeAdded.age,personToBeAdded.email,key);
			rows += row;
		}
		document.getElementById("personstbody").innerHTML = rows;		
	}
	else{
		document.getElementById("personstbody").innerHTML = "";
		document.getElementById("persons").style.display = "none";
	}

}
function addButtonClicked(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var email = document.getElementById("email").value;
	addPerson(name,age,email);
	displayPersons();
}
function createRow(name,age,email,index){
	var row = "<tr>";
	row += "<td>" + name + "</td>";
	row += "<td>" + age + "</td>";
	row += "<td>" + email + "</td>";
	row += "<td><input type='checkbox' id='chk" + index + "'></td>"; 
	row += "</tr>";
	return row;
}
function displayPersons(){
	document.getElementById("persons").style.display = "block";
	var personToBeAdded = personCollection[personCollection.length-1];
	var indexToBeAdded = personCollection.length - 1;
	document.getElementById("personstbody").innerHTML += createRow(personToBeAdded.name,personToBeAdded.age,personToBeAdded.email,indexToBeAdded);
}
function addPerson(n,a,e){
	var person = {
		name : n,
		age : a,
		email : e
	};
	personCollection.push(person);
}