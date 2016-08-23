// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAW-OXo25GXGm5ZAa8DDTHrckGc_QF0Jw",
    authDomain: "emomint-4519e.firebaseapp.com",
    databaseURL: "https://emomint-4519e.firebaseio.com",
    storageBucket: "emomint-4519e.appspot.com",
  };
  firebase.initializeApp(config);
 var database = firebase.database();

database.ref().on("child_added", function(childSnapshot, prevChildKey){

var emotion = childSnapshot.val().emotion;
console.log('andrew-emotion is: ' + emotion);
var queryURL = "https://api.spotify.com/v1/search?query=" + emotion + "&offset=0&limit=20&type=album";

$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){
    var result = response.albums.items;

    for(var i = 0; i < result.length; i++) {
      var newDiv = $('<div class="newMusic">')
      var newAlbum = $('<img>').attr('src', 'results[i].images[1].url');

      $(newDiv).append(newAlbum);

      $('#music').prepend(newDiv);
    };
});

}); // closes database.ref() 




