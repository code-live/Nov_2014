Global.GameView = Backbone.View.extend({
	el : "#gamesection",
	authModel : null,
	gameModel : null,
	events : {
		"click #logoutbutton" : "logoutButtonClicked",//DOESN'T MAKE SENSE TO WRITE IT HERE
		"click #playbutton" : "playButtonClicked"
	},
	playButtonClicked : function(){
		this.gameModel.play($("#guess").val());
		$("#gamemessage").text(this.gameModel.get("message"));
		$("#gameattempts").text(this.gameModel.get("attempts") + " attempts");	
	},
	logoutButtonClicked : function(){
		this.gameModel.reset();
		this.authModel.set("loggedIn",false);
		$(this.el).css("display","none");
		$("#guess").val("");
		$("#gamemessage").text("");
		$("#gameattempts").text("");		
	},
	initialize : function(cfg){
		this.authModel = cfg.authModel;
		this.gameModel = cfg.gameModel;
		
		$(this.el).css("display","none");
		this.listenTo(this.authModel,"change:loggedIn",this.displayGameView); 
	},
	displayGameView : function(){
		if(this.authModel.get("validCredentials"))
			$(this.el).css("display","block");
	}
});