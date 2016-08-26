// Initialize Firebase

var database = firebase.database();

//grabs the last child that was added and sets movie suggestions
database.ref().orderByChild('date').limitToLast(1).on('child_added', function(snap, prevChildKey){
    var id;
    var emotion = snap.val().emotion;

    if(emotion == 'happy') {
    	id = 35;
    }
    else if(emotion == 'sad'){
        id = 18;
    } else if(emotion == 'content'){
		id = 9648;
    } else if(emotion == 'angry'){
		id = 28;
    }

	var queryURL = "http://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&api_key=bcc2f00706a523f852a1b201ab755717";
	
	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		var results = response.results;
		var moviePosters = {
	        movie1 : "http://image.tmdb.org/t/p/w500" + results[getRandNum(0,4)].poster_path,
	        movie2 : "http://image.tmdb.org/t/p/w500" + results[getRandNum(5,9)].poster_path,
	        movie3 : "http://image.tmdb.org/t/p/w500" + results[getRandNum(10,14)].poster_path,
	        movie4 : "http://image.tmdb.org/t/p/w500" + results[getRandNum(15,20)].poster_path
		}

		if (snap.child("movieuploaded").val()) {
	    	snap.child("movies").ref.set(moviePosters);
	    	snap.child("movieuploaded").ref.set(false);
	    	$('#poster').empty();
		    for (var key in moviePosters) {
		      var li = $('<li>');
		      var i = $('<img>');
		      	var a = $('<a>');
				i.addClass('thumbnail');
				i.attr('src', moviePosters[key]);
				a.append(i);
				a.attr('href', moviePosters[key]);
				a.attr('target', '_blank');
				li.append(a);
		      $('#poster').append(li);
		    }
	    }
	    
	});	
});