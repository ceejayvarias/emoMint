// Initialize Firebase

var database = firebase.database();

database.ref().on('child_added', function(snap, prevChildKey){
    snap.val().emotion;
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

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
      var moviePosters = {
        movie1 : "http://image.tmdb.org/t/p/w500" + response.results[0].poster_path,
        movie2 : "http://image.tmdb.org/t/p/w500" + response.results[1].poster_path,
        movie3 : "http://image.tmdb.org/t/p/w500" + response.results[2].poster_path,
	}

    if (snap.child("movies").val() == null) {
    	snap.child("movies").ref.set(moviePosters);
    }


    });
});
