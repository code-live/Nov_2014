Ext.define("Monday.view.LoginPage",{
	extend : "Ext.Panel",
	xtype : "loginpage",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Login",
				height : "5%"
			},
			{
				xtype : "textfield",
				placeHolder : "User Name",
				id : "usernametext"
			},
			{
				xtype : "passwordfield",
				placeHolder : "Password",
				id : "passwordtext"
			},
			{
				xtype : "button",
				text : "Submit",
				id : "submitbutton"
			},
			{
				xtype : "button",
				text : "Dummy",
				id : "dummybutton"
			},
			{
				xtype : "label",
				id : "messagelabel"
			}
		]
	},
	doSomethingSilly : function(a,b){
		this.getComponent("usernametext").setValue(a);
		this.getComponent("passwordtext").setValue(b);
	}
});