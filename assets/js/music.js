// Initialize Firebase
var database = firebase.database();

database.ref().on("child_added", function(childSnapshot, prevChildKey){

var emotion = childSnapshot.val().emotion;


var queryURL = "https://api.spotify.com/v1/search?query=" + emotion + "&offset=0&limit=5&type=album";

$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){

    // console.log("BYEEE" + response);

    var result = response.albums.items;
    var albums = {
      album1 : result[0].images[1].url,
      // album1click: result[0].external_urls.spotify,
      album2 : result[1].images[1].url,
      // album2click: result[1].external_urls.spotify,
      album3 : result[2].images[1].url,
      // album3click: result[2].external_urls.spotify
    }

    if (childSnapshot.child("albums").val() == null) {
      childSnapshot.child("albums").ref.set(albums);
    }

      // $('<div class="newMusic">')
      // var newAlbum = $('<img>').attr('src', result[i].images[1].url);

      // $(newDiv).append(newAlbum);

      // $('#music').prepend(newDiv);
    });

}); // closes database.ref() 




