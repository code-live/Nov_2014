var numbers = [6,12,54,2,65,7,99,45,89,29];

function printNumbers(limit){
	for(var i=0;i<limit;i++)
		console.log(numbers[i]);
}
function printEvenNumbers(limit){
	var count = 0;
	for(var i=0;i<numbers.length;i++){
		if(count < limit){
			if(numbers[i] % 2 == 0){
				console.log(numbers[i]);
				count++;
			}
		}
	}
}
function printOddNumbers(limit){
	var count = 0;
	for(var i=0;i<numbers.length;i++){
		if(count < limit){
			if(numbers[i] % 2 != 0){
				console.log(numbers[i]);
				count++;
			}
		}
	}
}
function compute(){
	if(arguments.length == 0){
		printNumbers(numbers.length);
	}
	else if(arguments.length == 1){
		var arg1 = arguments[0];
		if(isNaN(arg1)){
			if(arg1 == "even")
				printEvenNumbers(numbers.length);
			else if(arg1 == "odd")
				printOddNumbers(numbers.length);
			else
				console.log("Invalid arguments")	
		}
		else
			printNumbers(arg1);	
	}
	else if(arguments.length == 2){
		var arg1 = arguments[0];
		var arg2 = arguments[1];
		if(isNaN(arg1)){
				console.log("Invalid arguments")	
		}
		else if(arg2 == "even")
			printEvenNumbers(arg1,arg2);
		else if(arg2 == "odd"){
				printOddNumbers(arg1,arg2)		
		}		
		else
			console.log("Invalid arguments");
	}
	else{
		console.log("Invalid arguments");
	}
}
console.log("****compute(5)");
compute(5) //Print the first five numbers in the array
console.log("****compute()");
compute() //Print all the numbers
console.log("****compute(even)");
compute("even")//Print all the even numbers in the array
console.log("****compute(odd)");
compute("odd")//Print all the odd numbers in the array
console.log("****compute(2,even)");
compute(2,"even")//Print three even numbers
console.log("****compute(3,odd)");
compute(3,"odd")//Print three odd numbers
compute("jkfdkdsfkj")//Print an error message
compute(1,2,3,34,4)//Print an error message
