// Initialize Firebase
  var config = {
   apiKey: "AIzaSyDAW-OXo25GXGm5ZAa8DDTHrckGc_QF0Jw",
   authDomain: "emomint-4519e.firebaseapp.com",
   databaseURL: "https://emomint-4519e.firebaseio.com",
   storageBucket: "emomint-4519e.appspot.com",
 };

  firebase.initializeApp(config);

  var database = firebase.database();

var arr, str, int; //arbitrary

function storeFace (arr) {
	database.ref().push({
		smile: arr.smiling.value,
		date: $.now()
	})
	console.log(arr.smiling.value);
}

