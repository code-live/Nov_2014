var Section1View = Backbone.View.extend({
	el : "#section1",
	events : {
		"click #clickbutton" : "buttonClicked"
	},
	buttonClicked : function(){
		var name = $("#name").val();
		$("#message").text("Hello " + name);
	}
});
