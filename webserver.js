var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
	var url = request.url;
	if(url == "/"){
		response.end("index.html not found");
	}
	else if(url.match(/Cricketers/) != null){
		getCricketers(request,response);
	}
	else if(url.match(/Hello/) != null){
		greet(request,response);
	}
	else if(url.match(/Hi/) != null){
		greetJSONP(request,response);
	}
	else if(url.match(/Cities/) != null){
		getCitiesList(request,response);
	}
	else if(url.match(/Timer/) != null){
		response.end(new Date() + "");
	}
	else if(url.match(/World/) != null){
		getInfo(request,response);
	}
	else{
		var fileName = url.substring(1);
		sendFile(fileName,response);
	}
});
function sendFile(fileName,response){
	fs.readFile(fileName,function(err,data){
		if(err)
 			response.end("File " + fileName + " not found");
		else
			response.end(data);
	});
}
server.listen(8080);
console.log("Server is running and waiting for requests");

function getCricketers(request,response){
	var data = {
		cricketerslist : [
			{name:"Virat",age:26,country:"India"},
			{name:"Shikar Dawan",age:28,country:"India"},
			{name:"Rohit Sharma",age:28,country:"India"},
			{name:"De Villiers",age:34,country:"SA"},
			{name:"George Bailey",age:28,country:"Australia"}
		]
	};
	response.end(JSON.stringify(data));
}
function greetJSONP(request,response){
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var callback = queryString.callback;
	if(callback == "ajsdglksajdfgaklsjdfhg"){
		var name = queryString.name;
		var obj = { message : "Hello " + name};
		var output = JSON.stringify(obj);
		output = callback + "(" + output + ")";
		response.end(output);	
	}
	else
		response.end("I'm confused");
}

function greet(request,response){
	response.setHeader("Access-Control-Allow-Origin",
	"*");
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var name = queryString.name;
	var output = { message : "Hello " + name};
	response.end(JSON.stringify(output));
}


function getCitiesList(request,response){
	var cities = ["Pune","Chennai","London","Cochin","Mumbai","Shimla","Houston","New York"];
	response.end(JSON.stringify(cities));
}
function getInfo(request,response){
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var country = queryString.country;
	var output = {capital:"Not available in DB"};
	if(country == "India")
		output = {capital:"New Delhi"};
	else if(country == "USA")
		output = {capital:"Washington DC"};
	else if(country == "UK")
		output = {capital:"London"};
	response.end(JSON.stringify(output));	
}