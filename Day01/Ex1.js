var array = [];
array["name"] = 'Sam';
array["age"] = 12;
array["country"] = "India";
array["city"] = "Pune";

var queryString = "?";
for(var key in array){
	queryString += key + "=" + array[key];
	queryString += "&";
}
queryString = queryString.substring(0,queryString.length-1);
console.log(queryString);