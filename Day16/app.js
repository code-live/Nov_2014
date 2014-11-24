Ext.Loader.setConfig({disableCaching:false});
Ext.application({
	name : "Monday",
	appFolder : "app",
	controllers : ["AuthenticationController"],
	models : [],
	stores : [],
	views : ["LoginPage"],
	launch : function(){
		Ext.create("Ext.Panel",{
			layout : "card",
			fullscreen : true,
			items : [
				{
					xtype : "loginpage",
					id : "loginpage"
				}
			]
		});
	}
});