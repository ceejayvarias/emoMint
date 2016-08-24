// Initialize Firebase
var database = firebase.database();

database.ref().on('child_added', function(snapshot){
	console.log(snapshot.val().emotion);
	var date = snapshot.val().date; //must convert later
	var emotion = snapshot.val().emotion;
	var movie = snapshot.val().movie;
	var music = snapshot.val().albums;
	var image = snapshot.val().image;
	console.log(music);

	// var d = $('<div>');
	var i = $('<img>');
	var row = $('<tr>');
	i.attr('src', image);
	i.css('width', 50);
	row.attr('data-date', date);
	row.attr('data-movie', movie); //fix later
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
	console.log(this);
	var i = $('<img>');
	i.css('width', 200);
	i.attr('src', $(this).data('image'));
	$('#mintOfTheDay').append(i);
	i.attr('src', $(this).data('music1'));
	$('#mintOfTheDay').append(i);
	i.attr('src', $(this).data('music2'));
	$('#mintOfTheDay').append(i);
	i.attr('src', $(this).data('music3'));
	$('#mintOfTheDay').append(i);
})