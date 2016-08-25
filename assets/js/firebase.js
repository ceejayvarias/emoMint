// Initialize Firebase
var database = firebase.database();

database.ref().on('child_added', function(snapshot){
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
	i.css('width', 200);
	$('#selfie').append(i.attr('src', $(this).data('image')));

	var li1 = $('<li>');
	var i1 = $('<img>');
	i1.css('width', 100);
	li1.append(i1.attr('src', $(this).data('movie1')));
	$('#poster').append(li1);

	var li2 = $('<li>');
	var i2 = $('<img>');
	i2.css('width', 100);
	li2.append(i2.attr('src', $(this).data('movie2')));
	$('#poster').append(li2);

	var li3 = $('<li>');
	var i3 = $('<img>');
	i3.css('width', 100);
	li3.append(i3.attr('src', $(this).data('movie3')));
	$('#poster').append(li3);

	var li1 = $('<li>');
	var i1 = $('<img>');
	i1.css('width', 100);
	li1.append(i1.attr('src', $(this).data('music1')));
	$('#cover').append(li1);

	var li2 = $('<li>');
	var i2 = $('<img>');
	i2.css('width', 100);
	li2.append(i2.attr('src', $(this).data('music2')));
	$('#cover').append(li2);

	var li3 = $('<li>');
	var i3 = $('<img>');
	i3.css('width', 100);
	li3.append(i3.attr('src', $(this).data('music3')));
	$('#cover').append(li3);

	// i.attr('src', $(this).data('music1'));
	// $('#mintOfTheDay').append(i);
	// i.attr('src', $(this).data('music2'));
	// $('#mintOfTheDay').append(i);
	// i.attr('src', $(this).data('music3'));
	// $('#mintOfTheDay').append(i);
})