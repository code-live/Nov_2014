$().ready(function(){
	$("#search").on("keypress",movieSearched);
	window.onpopstate = backButtonClicked;
});

function backButtonClicked(e){
	if(e.state){
		var data = e.state;
		displayMovieList(data);
	}	
}

function displayMovieList(data){
	$("#search").val(data.title);
	$("#searchcount").html(data.total + " results found");
	var movies = data.movies;
	$("#movieslist").html("");
	movies.forEach(function(movie){
		var li = GLOBAL.movieTemplate
			.replace("{THUMBNAIL}",movie.thumbnail)
			.replace("{MOVIENAME}",movie.name)
			.replace("{YEAR}",movie.year)
			.replace("{CAST}",movie.cast);
		$("#movieslist").append(li);	
	});
	$("#movieslist").listview("refresh");
	
}

var GLOBAL = {
	baseUrl : "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q=MOVIENAME",
	movieTemplate : "<li><img src='{THUMBNAIL}'></img><section class='movie'><br/><span>{MOVIENAME}</span><br/><span>{YEAR}</span><br/><span>{CAST}</span></section></li>"
};
function movieSearched(e){
	var keyCode = e.which;
	if(keyCode == 13)//Enter key is pressed
	searchMoviesInRottenTomatoes($("#search").val());
}
function displaySearchResults(result){
	$("#searchcount").html(result.total + " results found");
	var movies = result.movies;
	$("#movieslist").html("");
	var dataToBeStoredInHistory = [];
	for(var i=0;i<movies.length;i++){
		var thumbnail = movies[i].posters.thumbnail;
		var name = movies[i].title;
		var year = movies[i].year;
		var cast = "";
		movies[i]
			.abridged_cast
			.forEach(function(actor){
				cast += actor.name + ", "
			});
		dataToBeStoredInHistory.push({
			name : name,
			year : year,
			cast : cast,
			thumbnail : thumbnail
		});
		var li = GLOBAL.movieTemplate
			.replace("{THUMBNAIL}",thumbnail)
			.replace("{MOVIENAME}",name)
			.replace("{YEAR}",year)
			.replace("{CAST}",cast);
		$("#movieslist").append(li);	
	}
	$("#movieslist").listview("refresh");
	var state = {
		title : $("#search").val(),
		total : result.total,
		movies : dataToBeStoredInHistory
	}
	if(window.history){
		window.history.pushState(state);
	}
}
function searchMoviesInRottenTomatoes(movie){
	var url = GLOBAL.baseUrl.replace("MOVIENAME",movie);
	$.ajax({
		url : url,
		dataType : "jsonp",
		jsonpCallback : "JSON_CALLBACK",
		success : function(response){
			if(response)
			   displaySearchResults(response);
		}
	});
}