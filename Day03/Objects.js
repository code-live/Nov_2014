//Array,String,Date,Math,Object,Function,Number
var arr1 = new Array(1,2,3,4)
var arr2 = [1,2,3,4];

var dt = new Date();

var str1 = new String("Hello");
var str2  = "Hello";

//JSON
var person2 = {
	name : "Sam",
	age : 23
};

var person1 = new Object();
person1.name = "Sam";
person1.age = 12;

var book1 = new Object();
book1.title = "AJAX";
book1.price = 100;
book1.read = function(){
	console.log("Reading " + this.title);
};
book1.read();




