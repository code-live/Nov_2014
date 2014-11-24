Ext.define("Monday.store.CityStore",{
	extend : "Ext.data.Store",
	config : {
		model : "Monday.model.City",
		autoLoad : true,
		proxy : {
			url : "Cities",
			type : "ajax",
			reader : {
				type : "json",
				rootProperty : "cities"
			}
		}
	}
});