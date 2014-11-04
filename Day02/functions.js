function amazon(activity){
	activity();
}
var purchase = function(item){
	return function(){
		console.log("Purchasing " + item);
	}
}
amazon(purchase("CD"));
amazon(purchase("Book"));
amazon(purchase("Shirt"));




function doSomething(parameter1){
	parameter1();
}

var shop = function(){console.log("On Flipkart");};
doSomething(shop);

function killTime(){
	console.log("Watching TV");
}
doSomething(killTime);

doSomething(function(){
	console.log("Scratching my head");
});


var i = 10;
var str = "String";
var fn = function(){};

var work = function(hours){
	console.log("Works " + hours + " hours a day");
};
work(12);
work();

var eat = function(){
	console.log("Eating");
};
eat();