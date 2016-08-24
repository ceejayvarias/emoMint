// Initialize Firebase
var database = firebase.database();

database.ref().on('child_added', function(snapshot){
	console.log(snapshot.val().emotion);
	database.ref().update({
		'check': 'good'
	})
	var date = snapshot.val().date; //must convert later
	var emotion = snapshot.val().emotion;
	var movie = snapshot.val().movie;
	var music = snapshot.val().music;

});