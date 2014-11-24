Ext.define("Monday.controller.AuthenticationController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			userName : "#usernametext",
			password : "#passwordtext",
			//rootPanel : "#rootpanel"
		},
		control : {
			"#submitbutton" : {
				tap : "loginButtonTapped"
			}
		}
	},
	loginButtonTapped : function(){
		if(this.getUserName().getValue() == 
			this.getPassword().getValue()){
				Ext.Viewport.setActiveItem(1);
				//this.getRootPanel().setActiveItem(1);
		}
	}	
});