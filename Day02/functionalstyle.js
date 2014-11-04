console.log([12,4,56,3,123,74,8,3,234,987].filter(function(num){return num %2 == 0}));

console.log([12,4,56,3,123,74,8,3,234,987].filter(function(num){return num %2 != 0}));

console.log([12,4,56,3,123,74,8,3,234,987].reduce(function(previous,next){
	return previous + next;
}));

console.log([12,4,56,3,123,74,8,3,234,987].reduce(function(previous,next){
	return previous>next?previous:next;
}));

//numbers.forEach(function(num){console.log(num)});

