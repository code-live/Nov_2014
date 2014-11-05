var person = {
	name : "Sam",
	age : 12,
	hobbies : ["TV","Books"],
	work : function(){
		console.log(this.name + " is working");
	}
};
console.log(person.name);
console.log(person["name"]);

var property = "salary";
if(person[property] != undefined)
	console.log(person[property]);
var behavior = "work";
person[behavior]();