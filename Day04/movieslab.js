$().ready(init);

var GLOBAL = {
	movieCollection : []
};
function populateMovieCollectionFromLocalStorage(){
	if(localStorage.getItem("movies")){
		var obj = JSON.parse(localStorage.getItem("movies"))
		GLOBAL.movieCollection = obj.movies;	
	}
}
function init(){
	$("input:button").on("click",addMovie);
	$("#allmovies").on("click",listMoviesClicked);
	if(localStorage)
		populateMovieCollectionFromLocalStorage();
}
function createMovieRow(movie,year){
	var row = "<tr>";
	row += "<td>" + movie + "</td>";
	row += "<td>" + year + "</td>";
	row += "</tr>";
	return row;
}
function listMoviesClicked(){
	$("#message").hide();
	var display = $("#movielist").css("display");
	if(display == "none"){
		$("#movielist").show();
		var html = "";
		for(var i=0;i<GLOBAL.movieCollection.length;i++){
			var movie = GLOBAL.movieCollection[i];
			var row = createMovieRow(movie.name,movie.year);
			html += row;
		}
		$("tbody").html(html);
	}
	else{
		$("#movielist").hide();
	}
	
}
function movieDoesNotExist(movie){
	var exists = false;
	for(var i =0;i<GLOBAL.movieCollection.length;i++){
		if(GLOBAL.movieCollection[i].name == movie){
			exists = true;
			break;
		}
	}
	return exists;	
}
function addMovieToLocalStorage(){
	var obj = {
		movies : GLOBAL.movieCollection
	}
	var lsItem = JSON.stringify(obj);
	localStorage.setItem("movies",lsItem);
}
function addMovie(){
	if(!movieDoesNotExist($("#moviename").val())){
		var movie = {
			name : $("#moviename").val(),
			year : $("#movieyear").val()
		}
		GLOBAL.movieCollection.push(movie);
		$("#message").html("Movie added successfully").show();
		if(localStorage)
		 addMovieToLocalStorage();
	}
	else{
		$("#message").html("Movie already found in DB").show();
	}

}
