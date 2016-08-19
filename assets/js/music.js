$(document).ready(function(){
function spotify() {

	var queryURL = "https://api.spotify.com/v1/search?query=" + /*keyword*/ + "&offset=0&limit=20&type=album";

$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){
  	//NEED VARIABLE FOR DATA SEARCH KEY FROM FIREBASE
  	var result = response.albums.items;

  	for(var i = 0; i < result.length; i++) {
  		var newDiv = $('<div class="newMusic">')
  		var newAlbum = $('<img>').attr('src', 'results[i].images[1].url');

  		$(newDiv).append(newAlbum);

  		$('#music').prepend(newDiv);
  	};
});
}; // closes spotify
}); // closes document ready