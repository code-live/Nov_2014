Global.LoginView = Backbone.View.extend({
	el : "#loginsection",
	events : {
		"click #loginbutton" : "loginButtonClicked"
	},
	initialize : function(){
		$("#loginerror").css("display","none");
		this.listenTo(this.model,"change:loggedIn",this.showHideLoginView); 
	},
	showHideLoginView : function(){
		if(!this.model.get("loggedIn"))
			$(this.el).css("display","block");
	},
	loginButtonClicked : function(){
		this.model.set("userName",$("#username").val());
		this.model.set("password",$("#password").val());
		this.model.login();
		if(this.model.get("validCredentials")){
			$(this.el).css("display","none");
			$("#loginerror").css("display","none");
		}
		else{
			$("#loginerror").css("display","block");
		}
	}
});