// Initialize Firebase
var database = firebase.database();
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
database.ref().orderByChild("date").limitToLast(1).on("child_added", function(childSnapshot, prevChildKey){

var emotion = childSnapshot.val().emotion;

var queryURL = "https://api.spotify.com/v1/search?query=" + emotion + "&offset=0&limit=50&type=album";


$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){

    // console.log("BYEEE" + response);

    var result = response.albums.items;
    var albums = {
      album1 : result[(getRandNum(0, 15))].images[1].url,
      // album1click: result[0].external_urls.spotify,
      album2 : result[(getRandNum(16, 33))].images[1].url,
      // album2click: result[1].external_urls.spotify,
      album3 : result[(getRandNum(34, 50))].images[1].url
      // album3click: result[2].external_urls.spotify
    }
       console.log("album1 random test: " + albums.album1)
       console.log("album2 random test: " + albums.album2)
       console.log("album3 random test: " + albums.album3)


    // if (childSnapshot.child("albums").val() == null) {
      childSnapshot.child("albums").ref.set(albums);
    // }

      // $('<div class="newMusic">')
      // var newAlbum = $('<img>').attr('src', result[i].images[1].url);

      // $(newDiv).append(newAlbum);

      // $('#music').prepend(newDiv);
    });

}); // closes database.ref() 

        


