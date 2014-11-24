Ext.define("Monday.model.TemperatureReport",{
	extend : "Ext.data.Model",
	config : {
		fields : [
			{name:"city"},
			{name:"max",mapping:"temp_max"},
			{name:"min",mapping:"temp_min"},
			"humidity"
		],
		proxy : {
			type : "ajax",
			method : "GET",
			useDefaultXhrHeader : false,
			url : "http://api.openweathermap.org/data/2.5/weather",
			reader : {
				type : "json",
				rootProperty : "main"
			}
		}
	}
});