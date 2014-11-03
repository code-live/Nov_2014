function work(){
	console.log("*****WORKING*****");
//	console.log(arguments);
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}
function work(a,b,c,d,e,f,g,h){
	console.log("I am thoroughly confused");
}
function work(a,b,c,d){
	console.log("I'm going to cry");
}
work();
work(24,7);
work(7,"days","a","week");
work(15,"hours");
work(false);


//Function hoisting
sleep();
function sleep(){
	console.log("Attend training");
}

function hello(name){
	return "Hello " + name;
}
var message = hello("Sam");
console.log(message);

function eat(items){
	console.log("Eating " + items);
}
eat("Roti, Poha");