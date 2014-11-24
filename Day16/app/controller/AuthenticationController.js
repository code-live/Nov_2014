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
			},
			"#dummybutton" : {
				tap : "dummyButtonTapped"
			},
			"#backtocitiesbutton" : {
				tap : "backToCitiesButtonTapped"
			}
		}
	},
	backToCitiesButtonTapped : function(){
		Ext.Viewport.setActiveItem(1);
	},
	dummyButtonTapped : function(){
		//this.getLoginPage()
		Ext.getCmp("loginpage").
			doSomethingSilly("Stupid","Silly");
	},
	loginButtonTapped : function(){
		if(this.getUserName().getValue() == 
			this.getPassword().getValue()){
				Ext.Viewport.setActiveItem(1);
				//this.getRootPanel().setActiveItem(1);
		}
	}	
});