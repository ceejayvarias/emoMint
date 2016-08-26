// Initialize Firebase
var database = firebase.database();
database.ref().on('child_added', function(snapshot, prevChildkey){
	var key = snapshot.key;
	var date = snapshot.val().date;
	var convertedDate = moment(date).format("MMM DD, YYYY hh:mm a")
	var emotion = snapshot.val().emotion;
	var image = snapshot.val().image;

	var i = $('<img>');
	var row = $('<tr>');
	i.attr('src', image);
	i.css('width', 50);
	row.attr('data-date', convertedDate);
	row.attr('data-emotion', emotion);
	row.attr('data-key', key);
	row.addClass('log');
	
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

//function that displays the music and movies
function setEntertainment(arr, type){
		for (var j = 0; j < arr.length; j++) {
			var li = $('<li>');
			var i = $('<img>');
			var a = $('<a>');
			i.addClass('thumbnail');
			i.attr('src', arr[j]);
			a.attr('href', arr[j]);
			a.attr('target', '_blank');
			a.append(i);
			li.append(a);
			if (type == 'movie') {
				$('#poster').append(li);
			}
			else if(type == 'music') {
				$('#cover').append(li);
			}
		}
}

//on click for logs
$(document).on('click', '.log', function(){
	var key = $(this).data('key');
	var movie = [], music = [];
	database.ref().child(key).once('value', function(snapshot){
		var movieRef = snapshot.child("movies");
		var musicRef = snapshot.child("albums");
		var journal = snapshot.child("journal").val();
		var image = snapshot.child("image").val();
		var emotion = snapshot.child("emotion").val();
		music.push(musicRef.val().album1);
		music.push(musicRef.val().album2);
		music.push(musicRef.val().album3);
		music.push(musicRef.val().album4);
		movie.push(movieRef.val().movie1);
		movie.push(movieRef.val().movie2);
		movie.push(movieRef.val().movie3);
		movie.push(movieRef.val().movie4);
		$('#personPhoto').empty();
		var i = $('<img>');
		$('#personPhoto').append(i.attr('src', image));
		$('#entry').html("Emotion at the time: " + emotion + "<br>" + journal);
		$('#poster').empty();
		$('#cover').empty();
		setEntertainment(movie, 'movie');
		setEntertainment(music, 'music');

	});
});