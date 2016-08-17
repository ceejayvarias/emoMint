$(document).ready(function(){
function spotify() {
	var queryURL = "https://api.spotify.com/v1/search?query=" + /*keyword*/ + "&offset=0&limit=20&type=album";

$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){
}


}); // closes document ready