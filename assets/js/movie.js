



var randomMovieArray = ['Love Actually', 'When Harry Met Sally', 'Stepbrothers', 'The Hangover', 'Bridesmaids', 'Just Friends', 'Airplane', 'Groundhog day', 'Old School', 'Tropic Thunder'];


function apiCall() {
	var randomNumber = Math.floor((Math.random() * randomMovieArray.length + 1));
	var randomMovie = randomMovieArray[randomNumber];
	console.log(randomMovie);
	$.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie)).then(function(response){
		var image = response.Poster;

		if(image !== "N/A"){
			$('img').attr('src', image);
		}
	});
}

$('#movies').click(function(){
	apiCall()
});
