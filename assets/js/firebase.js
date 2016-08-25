// Initialize Firebase
var database = firebase.database();

database.ref().on('child_added', function(snapshot, prevChildkey){
	// console.log(snapshot.val().emotion);
	var date = snapshot.val().date; //must convert later
	var emotion = snapshot.val().emotion;
	var movie = snapshot.val().movies;
	var music = snapshot.val().albums;
	var image = snapshot.val().image;
	// console.log(music);

	// var d = $('<div>');
	var i = $('<img>');
	var row = $('<tr>');
	i.attr('src', image);
	i.css('width', 50);
	row.attr('data-date', date);
	row.attr('data-movie1', movie.movie1);
	row.attr('data-movie2', movie.movie2);
	row.attr('data-movie3', movie.movie3);
	row.attr('data-music1', music.album1);
	row.attr('data-music2', music.album2);
	row.attr('data-music3', music.album3);
	row.attr('data-image', image);
	row.attr('data-emotion', emotion);
	row.addClass('log');
	// row.append(i);
	
	var tdImage = $('<td>');
	tdImage.append(i);
	var tdDate = $('<td>');
	tdDate.text(date);
	var tdEmotion = $('<td>');
	tdEmotion.text(emotion);
	row.append(tdImage);
	row.append(tdDate);
	row.append(tdEmotion);
	$('#table-body').append(row);
});

$(document).on('click', '.log', function(){
	$('#poster').empty();
	$('#cover').empty();
	$('#selfie').empty();
	console.log(this);
	var i = $('<img>');
	$('#selfie').append(i.attr('src', $(this).data('image')));

	//set movies
	for (var j = 1; j < 4; j++) {
		var li = $('<li>');
		var i = $('<img>');
		li.append(i.attr('src', $(this).data('movie' + j)));
		$('#poster').append(li);
	}

	//set music
	for (var j = 1; j < 4; j++) {
		var li = $('<li>');
		var i = $('<img>');
		li.append(i.attr('src', $(this).data('music' + j)));
		$('#cover').append(li);
	}
})