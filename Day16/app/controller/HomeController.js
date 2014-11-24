Ext.define("Monday.controller.HomeController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			citiesList : "#citieslist",
			weatherPage : "#weatherpage"
		},
		control : {
			"#citieslist" : {
				itemtap : "getWeatherReport"
			}
		}
	},
	getWeatherReport : function(a,b,c,record){
		var city = record.get("name");
		if(this.getWeatherPage() == undefined){
			Ext.Viewport.add({
				xtype : "weatherpage",
				id : "weatherpage"
			});
		}
		var weatherPageReference = this.getWeatherPage();
		this.connectToWeatherMap(weatherPageReference,city);
	},
	connectToWeatherMap : function(weatherPageReference,city){
		
		Monday.model.TemperatureReport.getProxy().setExtraParams({
			units : "metric",
			q : city
		});
		Monday.model.TemperatureReport.load(city,{
			success : function(record){
				record.set("city",city);
				weatherPageReference.update(record);
				Ext.Viewport.setActiveItem(2);
			}
			
		});
		
		/*Ext.Ajax.request({
			url : "http://api.openweathermap.org/data/2.5/weather",
			params : {
				q : city,
				units :  "metric"
			},
			method : "GET",
			useDefaultXhrHeader : false,
			error : function(){
				
			},
			success : function(xhr){
				var result = Ext.JSON.decode(xhr.responseText);
				var max = result.main.temp_max;
				var min = result.main.temp_min;
				var humidity = result.main.humidity;
				var tempReport = Ext.create("Monday.model.TemperatureReport");
				tempReport.set("city",city);
				tempReport.set("max",max);
				tempReport.set("min",min);
				tempReport.set("humidity",humidity);
				weatherPageReference.update(tempReport);
				Ext.Viewport.setActiveItem(2);
			}
		});*/
	}
});