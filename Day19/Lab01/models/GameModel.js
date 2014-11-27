Global.GameModel = Backbone.Model.extend({
	defaults : {
		target : Math.round(Math.random()*100),
		attempts : 0,
		message : ""
	},
	reset : function(){
		this.set("target",Math.round(Math.random()*100));
		this.set("attempts",0);
		this.set("message","");
	},
	play : function(guess){
		this.set("attempts",this.get("attempts")+1);
		var target = this.get("target");
		var message = "";
		if(guess > target)
			message = "Aim Lower";
		else if(guess < target)
			message = "Aim Higher";
		else
			message = "You've got it in " + this.get("attempts") + " attempts";
		this.set("message",message);
	}
});