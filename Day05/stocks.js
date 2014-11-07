var GLOBAL = {
	baseUrl : "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22SYMBOL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",
	symbols : ["MS", "GOOG", "INTC", "AAPL", "GM", "FB", "INFY", "HP","ABC"]
}
$().ready(function(){
	createSymbolRows();
	loadPriceFromYahoo();
	window.setInterval("loadPriceFromYahoo()",10000);
});
function createSymbolRows(){
	for(var i=0;i<GLOBAL.symbols.length;i++){
		var row = "<tr>" ;
		row += "<td id='symbol" + GLOBAL.symbols[i] +"'>" + GLOBAL.symbols[i] + "</td>";
		row += "<td id='price" + GLOBAL.symbols[i] + "'><small>loading</small></td>";
		row += "<td id='change" + GLOBAL.symbols[i] + "'><small>loading</small></td>";
		row += "</tr>";
		$("tbody").append(row);
	}
}
function connectToYahoo(url,symbol){
	$.ajax({
		url : url, dataType:"json",
		success : function(response){
			var resultTradePrice = response.query.results.quote.LastTradePriceOnly;
			var resultChange = response.query.results.quote.Change;
			$("#price" + symbol).html(resultTradePrice);
			$("#change" + symbol).html(resultChange);
			if(resultChange.indexOf("-") == -1)
				$("#change" + symbol).css("background-color","green");
			else
				$("#change" + symbol).css("background-color","red");	
			$("#symbol" + symbol).css("color","black");	
		}
	});
}
function loadPriceFromYahoo(){
	for(var i=0;i<GLOBAL.symbols.length;i++){
		var symbol = GLOBAL.symbols[i];
		var url = GLOBAL.baseUrl.replace("SYMBOL",symbol);
		$("#symbol" + symbol).css("color","yellow");
		connectToYahoo(url,symbol);
	}	
}
