Global.AuthenticationModel = Backbone.Model.extend({
	defaults : {
		"userName" : "",
		"password" : "",
		"loggedIn" : false,
		"validCredentials" : false
	},
	login : function(){
		if(this.get("userName") == "admin" &&
			this.get("password") == "admin"){
			this.set("validCredentials",true);
			this.set("loggedIn",true);
		}
	}
});