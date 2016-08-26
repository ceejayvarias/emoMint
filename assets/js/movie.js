// Initialize Firebase

var database = firebase.database();

console.log(sessionStorage.getItem('refresh'));
database.ref().orderByChild('date').limitToLast(1).on('child_added', function(snap, prevChildKey){
    var id;
    if(snap.val().emotion == 'happy') {
    	id = 35;
    }
    else if(snap.val().emotion == 'sad'){
        id = 18;
    } else if(snap.val().emotion == 'content'){
		id = 9648;
    } else if(snap.val().emotion == 'angry'){
		id = 28;
    }
	var queryURL = "http://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&api_key=bcc2f00706a523f852a1b201ab755717";
	var movie = [];
	if (sessionStorage.getItem('refresh') === "true") {
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			var moviePosters = {
		        movie1 : "http://image.tmdb.org/t/p/w500" + response.results[getRandNum(0, 6)].poster_path,
		        movie2 : "http://image.tmdb.org/t/p/w500" + response.results[getRandNum(7, 13)].poster_path,
		        movie3 : "http://image.tmdb.org/t/p/w500" + response.results[getRandNum(14, 20)].poster_path
			}

		    // if (snap.child("movies").val() == null) {
		    	snap.child("movies").ref.set(moviePosters);
		    // }
		    });
		
	}
	sessionStorage.setItem('refresh', "false");
});