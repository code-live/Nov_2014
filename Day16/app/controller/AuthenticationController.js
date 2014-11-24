Ext.define("Monday.controller.AuthenticationController",{
	extend : "Ext.app.Controller",
	config : {
		control : {
			"#submitbutton" : {
				tap : "loginButtonTapped"
			}
		}
	},
	loginButtonTapped : function(){
		alert("Tap");
	}	
});