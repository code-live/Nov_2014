var ContactsDB = {
	db : null,
	init : function(dbname,version,description,size){
		this.db = openDatabase(dbname,version,description,size);
	},
	createTable : function(query,callback){
		this.db.transaction(function(txn){
			txn.executeSql(query,[],function(tx){
				callback("Table created successfully");
			});
		});
	},
	execute : function(query,parameters,success,error){
		this.db.transaction(function(txn){
			txn.executeSql(query,
				parameters,
				function(tx,result){
					success(result);
				},
				function(tx,err){
					error(err);
				});
		});	
	}
};