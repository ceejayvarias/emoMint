// Initialize Firebase

var database = firebase.database();

database.ref().on('child_added', function(snap){
    snap.val().emotion;
    var id;
    if(snap.val().emotion = 'happy') {
           id = 35;
            console.log("happy");
        }
    else if(snap.val().emotion = 'sad'){
            id = 18;
    } else if(snap.val().emotion = 'content'){
            id = 9648;
    } else if(snap.val().emotion = 'angry'){
            id = 28;
    }
    var queryURL = "http://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&api_key=bcc2f00706a523f852a1b201ab755717";
    var movie = [];

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
      var moviePosters = {
        movie1 : "http://image.tmdb.org/t/p/w500" + response.results[0].poster_path,
        movie2 : "http://image.tmdb.org/t/p/w500" + response.results[1].poster_path,
        movie3 : "http://image.tmdb.org/t/p/w500" + response.results[2].poster_path

      }
      snap.child("movies").ref.set(moviePosters);
    //     for (var i = 0; i < 3; i++) {
    //
    //       var movieURL = "http://image.tmdb.org/t/p/w500" + response.results[i].poster_path;
    //       moviePosters.push(movieURL);
    //       console.log(response.results[i]);
    //       console.log(response.results[i].title);
    //       movie.push(response.results[i]);
    // }
    // console.log(movie);
    });
});



//     var image = response.Poster;
//
//     if(image !== "N/A"){
//         $('#poster').attr('src', image);
//     }
// });
// }

// $('#movies').click(function(){
// apiCall()
// });


// var randomMovieArray = ['Love Actually', 'When Harry Met Sally', 'Swingers', 'The Hangover', 'Bridesmaids', 'Just Friends', 'Airplane', 'Groundhog day', 'Old School', 'Tropic Thunder'];
//
//
// function apiCall() {
//     var randomNumber = Math.floor((Math.random() * randomMovieArray.length));
//     var randomMovie = randomMovieArray[randomNumber];
//     console.log(randomMovie);
//     $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie)).then(function(response){
//         var image = response.Poster;
//
//         if(image !== "N/A"){
//             $('#poster').attr('src', image);
//         }
//     });
// }
//
// $('#movies').click(function(){
//     apiCall()
// });
