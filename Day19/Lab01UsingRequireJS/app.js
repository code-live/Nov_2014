var Global = {};
require(["lib/jquery-2.1.1.min",
		 "lib/underscore-min",
		 "lib/backbone-min",
		 ], function() {
	require([
		"models/AuthenticationModel",
		"models/GameModel",
		"views/LoginView",
		"views/GameView"],function(){
	 		$().ready(function(){
	 			 	createBackboneInstances();
	 		});
	   });
});
function createBackboneInstances(){
	var authModel = new Global.AuthenticationModel();
	var gameModel = new Global.GameModel();
	
	var loginView = new Global.LoginView({model:authModel});
	var gameView = new Global.GameView({
		authModel : authModel,
		gameModel : gameModel
	});
}
