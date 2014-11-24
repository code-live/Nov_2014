Ext.Loader.setConfig({disableCaching:false});
Ext.application({
	name : "Monday",
	appFolder : "app",
	controllers : ["AuthenticationController","HomeController"],
	models : ["City","TemperatureReport"],
	stores : ["CityStore"],
	views : ["LoginPage","HomePage","WeatherPage"],
	launch : function(){
		//Viewport is a Panel with card layout and fullscreen true
		//It's created during startup by default
		Ext.Viewport.add({xtype:"loginpage",id:"loginpage"});
		Ext.Viewport.add({xtype:"homepage",id:"homepage"});
		
		
		
		
		/*Ext.create("Ext.Panel",{
			id : "rootpanel",
			layout : "card",
			fullscreen : true,
			items : [
				{
					xtype : "loginpage",
					id : "loginpage"
				},
				{
					xtype : "homepage",
					id : "homepage"
				}
			]
		});*/
	}
});