var Global = {};
$().ready(function(){
	createBackboneInstances();
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
