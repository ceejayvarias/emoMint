// Initialize Firebase

var database = firebase.database();

database.ref().on('child_added', function(snap){
    snap.val().emotion;
    if(snap.val().emotion = 'happy') {
            var id = 35;
        } 
    else if(snap.val().emotion = 'sad'){        
            var id = 18;        
    }
    var queryURL = "http://api.themoviedb.org/3/discover/movie?with_genres=" + id + "&api_key=bcc2f00706a523f852a1b201ab755717";

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
             // console.log(response);
    for (var i = 0; i < response.length; i++) {
        var random;
        random.push(response[i].title);
    }
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