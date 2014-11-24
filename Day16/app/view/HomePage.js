Ext.define("Monday.view.HomePage",{
	extend : "Ext.Panel",
	xtype : "homepage",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Welcome",
				height : "5%"
			},
			{
				xtype : "list",
				store : "CityStore",
				itemTpl : "{name}"
			}
		]
	}
});