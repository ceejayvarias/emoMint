

 // Initialize Firebase
 var config = {
   apiKey: "AIzaSyDAW-OXo25GXGm5ZAa8DDTHrckGc_QF0Jw",
   authDomain: "emomint-4519e.firebaseapp.com",
   databaseURL: "https://emomint-4519e.firebaseio.com",
   storageBucket: "emomint-4519e.appspot.com",
 };
 firebase.initializeApp(config);

var database = firebase.database();

database.ref().on('child_added', function(snap){
	snap.val().emotion);
});

var randomMovieArray = ['Love Actually', 'When Harry Met Sally', 'Swingers', 'The Hangover', 'Bridesmaids', 'Just Friends', 'Airplane', 'Groundhog day', 'Old School', 'Tropic Thunder'];


function apiCall() {
	var randomNumber = Math.floor((Math.random() * randomMovieArray.length));
	var randomMovie = randomMovieArray[randomNumber];
	console.log(randomMovie);
	$.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie)).then(function(response){
		var image = response.Poster;

		if(image !== "N/A"){
			$('#poster').attr('src', image);
		}
	});
}

$('#movies').click(function(){
	apiCall()
});
