var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request,response){
	var url = request.url;
	if(url == "/"){
		response.end("index.html not fjquery-2.1.1.min.jsound");
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

function getInfo(request,response){
	var queryString = require("url")
					.parse(request.url,true)
					.query;
	var country = queryString.country;
	var output = "Not available in DB";
	if(country == "India")
		output = "New Delhi";
	else if(country == "USA")
		output = "Washington DC";
	else if(country == "UK")
		output = "London";
	response.end(output);	
}