// Initialize Firebase
var database = firebase.database();

//function that generates a random number used to randomize movies/music suggestions
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//grabs the last child that was added and sets music suggestions
database.ref().orderByChild("date").limitToLast(1).on("child_added", function(childSnapshot, prevChildKey){

var emotion = childSnapshot.val().emotion;

var queryURL = "https://api.spotify.com/v1/search?query=" + emotion + "&offset=0&limit=50&type=album";

$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){

    var result = response.albums.items;
    var albums = {
      album1 : result[(getRandNum(0, 12))].images[1].url,
      album2 : result[(getRandNum(13, 25))].images[1].url,
      album3 : result[(getRandNum(26, 38))].images[1].url,
      album4 : result[(getRandNum(39, 50))].images[1].url
    }

    if (childSnapshot.child("musicuploaded").val()) {
      childSnapshot.child("albums").ref.set(albums);
      childSnapshot.child("musicuploaded").ref.set(false);
      $('#cover').empty();
      for (var key in albums) {
        var li = $('<li>');
        var i = $('<img>');
        var a = $('<a>');
        i.addClass('thumbnail');
        i.attr('src', albums[key]);
        a.append(i);
        a.attr('href', albums[key]);
        a.attr('target', '_blank');
        li.append(a);
        $('#cover').append(li);
      }
    }
    });

}); // closes database.ref() 

        


