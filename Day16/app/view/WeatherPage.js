Ext.define("Monday.view.WeatherPage",{
	extend : "Ext.Panel",
	xtype : "weatherpage",
	update : function(tempReportModel){
		this.getComponent("cityheader").setTitle(tempReportModel.get("city"));
		this.getComponent("maxlabel").setHtml("Max: " + tempReportModel.get("max"));		
		this.getComponent("minlabel").setHtml("Min: " + tempReportModel.get("min"));
		this.getComponent("humiditylabel").setHtml("Humidity: " + tempReportModel.get("humidity"));
	},
	config : {
		items : [
			{
				xtype : "titlebar",
				id : "cityheader",
				height : "10%",
				items : [
					{
						xtype : "button",
						text : "back",
						id : "backtocitiesbutton"
					}
				]
			},
			{
				xtype : "label",
				id : "maxlabel",
				html : ""
			},
			{
				xtype : "label",
				id : "minlabel",
				html : ""
			},
			{
				xtype : "label",
				id : "humiditylabel",
				html : ""
			}
		]
	}
});