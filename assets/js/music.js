// Initialize Firebase
var database = firebase.database();

database.ref().on("child_added", function(childSnapshot, prevChildKey){

var emotion = childSnapshot.val().emotion;


var queryURL = "https://api.spotify.com/v1/search?query=" + emotion + "&offset=0&limit=3&type=album";

$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){
    // console.log("BYEEE" + response);
    var result = response.albums.items;
    // console.log("HIIII" + result);


    var albums = {
      album1 : result[0].images[1].url,
      album2 : result[1].images[1].url,
      album3 : result[2].images[1].url
      
    }

    childSnapshot.child("albums").ref.set(albums);

      // $('<div class="newMusic">')
      // var newAlbum = $('<img>').attr('src', result[i].images[1].url);

      // $(newDiv).append(newAlbum);

      // $('#music').prepend(newDiv);
    });

}); // closes database.ref() 




