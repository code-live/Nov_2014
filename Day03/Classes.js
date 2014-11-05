function Book(theTitle,thePrice){
	this.title = theTitle;
	this.price = thePrice;
	this.buy = function(site){
		console.log("Buying " + this.title + " from " + site);
	}
}
var b1 = new Book("JavaScript:Good parts",2000);
console.log(b1.title + ", " + b1.price);
b1.buy("FK");

var b2 = new Book("Practical ExtJS4",3000);
console.log(b2.title + ", " + b2.price);
b2.buy("Amazon");