var GLOBAL = {
	baseUrl : "http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=edpyxhran22urr7g7m7pdek8&q=MOVIENAME",
	movieTemplate : "<li  moviename='{MOVIENAME}' movieyear='{YEAR}' moviecast='{CAST}' moviethumbnail='{THUMBNAIL}'><a href='#videopage' ><img src='{THUMBNAIL}'></img><section class='movie'><br/><span>{MOVIENAME}</span><br/><span>{YEAR}</span><br/><span>{CAST}</span><br/></section></a></li>",
	movieTapped : null
};

$().ready(function(){
	$("#search").on("keypress",movieSearched);
	window.onpopstate = backButtonClicked;
	$("#videopage").on("pagebeforeshow",populateVideoPage);
	$("#searchpage").on("pagebeforeshow",stopVideo);
});

function stopVideo(){
	if(document.getElementById("video"))
		document.getElementById("video").pause();
}
function populateVideoPage(){
	var movie = GLOBAL.movieTapped;
	$("#moviename").html(movie.name);
	$("#movieyear").html(movie.year);
	$("#moviecast").html(movie.cast);
	$("#video")
		.attr("poster",movie.thumbnail)
		.attr("src","http://www.w3schools.com/html/mov_bbb.mp4");
}

function backButtonClicked(e){
	if(e.state){
		var data = e.state;
		displayMovieListFromHistory(data);
	}	
}

function displayMovieListFromHistory(data){
	$("#search").val(data.title);
	displayMoviesList(data);
}

function showVideoPage(){
	var li = $(this);
	var movie = {
		name : li.attr("moviename"),
		year : li.attr("movieyear"),
		cast : li.attr("moviecast"),
		thumbnail : li.attr("moviethumbnail")
	};
	GLOBAL.movieTapped = movie;
}

function movieSearched(e){
	var keyCode = e.which;
	if(keyCode == 13)//Enter key is pressed
	searchMoviesInRottenTomatoes($("#search").val());
}
function displayMoviesList(data){
	$("#searchcount").html(data.total + " results found");
	var movies = data.movies;
	$("#movieslist").html("");
	for(var i=0;i<movies.length;i++){
		var thumbnail = movies[i].thumbnail;
		var name = movies[i].name;
		var year = movies[i].year;
		var cast = movies[i].cast;
		var li = GLOBAL.movieTemplate
			.replace(/{THUMBNAIL}/g,thumbnail)
			.replace(/{MOVIENAME}/g,name)
			.replace(/{YEAR}/g,year)
			.replace(/{CAST}/g,cast);
		$("#movieslist").append(li);	
	}
	$("#movieslist").listview("refresh");
	$("li").on("tap",showVideoPage);
}
function pushStateToHistory(data){
	var state = {
		title : $("#search").val(),
		total : data.total,
		movies : data.movies
	}
	if(window.history){
		window.history.pushState(state);
	}
}

function displaySearchResults(result){
	var movies = [];
	result.movies.forEach(function(movie){
		var cast = "";
		movie.abridged_cast
			.forEach(function(actor){
				cast += actor.name + ", "
		});
		var obj = {
			name : movie.title,
			year : movie.year,
			cast : cast,
			thumbnail : movie.posters.thumbnail
		};
		movies.push(obj);
	});
	var data = {
		total : result.total,
		movies : movies
	};
	displayMoviesList(data);
	pushStateToHistory(data);
}

function searchMoviesInRottenTomatoes(movie){
	var url = GLOBAL.baseUrl.replace("MOVIENAME",movie);
	$.ajax({
		url : url,
		dataType : "jsonp",
		jsonpCallback : "JSON_CALLBACK",
		beforeSend:function(){
			$.mobile.loading("show");
		},
		complete:function(){
			$.mobile.loading("hide");
		},
		success : function(response){
			if(response)
			   displaySearchResults(response);
		}
	});
}