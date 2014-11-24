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
				xtype : "label",
				id : "messagelabel"
			}
		]
	}
});