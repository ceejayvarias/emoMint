// Initialize Firebase
var database = firebase.database();

database.ref().on('child_added', function(snapshot, prevChildkey){
	// console.log(snapshot.val().emotion);
	var key = snapshot.key;
	var date = snapshot.val().date; //must convert later
	var convertedDate = moment(date).format("MMM DD, YYYY hh:mm a")
	// console.log("time converting: " + convertedDate);
	var emotion = snapshot.val().emotion;
	var image = snapshot.val().image;
	// console.log(music);

	// var d = $('<div>');
	var i = $('<img>');
	var row = $('<tr>');
	i.attr('src', image);
	i.css('width', 50);
	row.attr('data-date', convertedDate);
	row.attr('data-image', image);
	row.attr('data-emotion', emotion);
	row.attr('data-key', key);
	row.addClass('log');
	// row.append(i);
	
	var tdImage = $('<td>');
	tdImage.append(i);
	var tdDate = $('<td>');
	tdDate.text(convertedDate);
	var tdEmotion = $('<td>');
	tdEmotion.text(emotion);
	row.append(tdImage);
	row.append(tdDate);
	row.append(tdEmotion);
	$('#table-body').append(row);
});

$(document).on('click', '.log', function(){
	var key = $(this).data('key');
	var movie = [], music = [];
	var element = this;
	database.ref().child(key).once('value', function(snapshot){
		var movieRef = snapshot.child("movies");
		var musicRef = snapshot.child("albums");
		music.push(musicRef.val().album1);
		music.push(musicRef.val().album2);
		music.push(musicRef.val().album3);
		movie.push(movieRef.val().movie1);
		movie.push(movieRef.val().movie2);
		movie.push(movieRef.val().movie3);
		$('#poster').empty();
		$('#cover').empty();
		$('#selfie').empty();
		// console.log(this);
		var i = $('<img>');
		$('#selfie').append(i.attr('src', $(element).data('image')));

		//set movies
		for (var j = 0; j < 3; j++) {
			var li = $('<li>');
			var i = $('<img>');
			var film = "movie" + j;
			li.append(i.attr('src', movie[j]));
			$('#poster').append(li);
		}

		//set music
		for (var j = 0; j < 3; j++) {
			var li = $('<li>');
			var i = $('<img>');
			li.append(i.attr('src', music[j]));
			$('#cover').append(li);
		}
	})

})
