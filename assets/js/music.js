// Initialize Firebase
var database = firebase.database();

database.ref().on("child_added", function(childSnapshot, prevChildKey){
console.log("andrew" + childSnapshot.val());

var emotion = childSnapshot.val().emotion;
console.log('andrew-emotion is: ' + emotion);

var queryURL = "https://api.spotify.com/v1/search?query=" + emotion + "&offset=0&limit=20&type=album";

$.ajax({url: queryURL, method: 'GET'})
  .done(function(response){
    // console.log("BYEEE" + response);
    var result = response.albums.items;
    // console.log("HIIII" + result);

    for(var i = 0; i < result.length; i++) {
      var newDiv = $('<div class="newMusic">')
      var newAlbum = $('<img>').attr('src', result[i].images[1].url);

      $(newDiv).append(newAlbum);

      $('#music').prepend(newDiv);
    };
});

}); // closes database.ref() 




