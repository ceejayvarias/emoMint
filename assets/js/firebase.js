// Initialize Firebase
  var config = {
    apiKey: "AIzaSyCB6UoptyCirEB8kfeeiEYA1sztDXGMcOM",
    authDomain: "emomint-a031f.firebaseapp.com",
    databaseURL: "https://emomint-a031f.firebaseio.com",
    storageBucket: "",
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

