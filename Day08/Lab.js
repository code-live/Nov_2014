$().ready(function(){
	$("#search").on("keypress",movieSearched);
});
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
	for(var i=0;i<movies.length;i++){
		var thumbnail = movies[i].posters.thumbnail;
		var name = movies[i].title;
		var year = movies[i].year;
		var cast = "";
		movies[i].abridged_cast.forEach(function(actor){
			cast += actor.name + ", "
		});
		var li = GLOBAL.movieTemplate
			.replace("{THUMBNAIL}",thumbnail)
			.replace("{MOVIENAME}",name)
			.replace("{YEAR}",year)
			.replace("{CAST}",cast);
		$("#movieslist").append(li);	
	}
	$("#movieslist").listview("refresh");
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