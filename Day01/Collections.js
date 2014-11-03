//Array
var countries = [];
countries["India"] = "New Delhi";
countries["USA"] = "Washington DC";
countries["UK"] = "London";
for(var key in countries){
	var capital = countries[key];
	console.log(key + ": " + capital);	
} 

var arr1 = [];
var langs = ["Java","Groovy","Scala","Ruby"];
for(var i=0;i<langs.length;i++){
	console.log(langs[i]);
}

var numbers = [1,2.34,"three","three point one four",false];
for(var i=0;i<numbers.length;i++){
	console.log(numbers[i]);
}