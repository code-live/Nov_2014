var math = function(logic){
	var numbers = [12,4,56,3,123,74,8,3,234,987];
	for(var i=0;i<numbers.length;i++){
		var num = numbers[i];
		logic(num);
	}
}

var max = 0;
function findMax(num){
	if(num > max)
		max = num; 
}
math(findMax);

console.log("Max: " + max);

math(function(num){
	if(num % 2 == 0)
		console.log(num + " is even");
});

math(function(num){
	if(num % 2 != 0)
		console.log(num + " is odd");
});

math(findMax);



