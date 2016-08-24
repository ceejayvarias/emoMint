// Initialize Firebase
var config = {
    apiKey: "AIzaSyDAW-OXo25GXGm5ZAa8DDTHrckGc_QF0Jw",
    authDomain: "emomint-4519e.firebaseapp.com",
    databaseURL: "https://emomint-4519e.firebaseio.com",
    storageBucket: "emomint-4519e.appspot.com",
  };
firebase.initializeApp(config);

var database = firebase.database();

//detects the personPhoto URL and returns data
var api = new FacePP('0ef14fa726ce34d820c5a44e57fef470', '4Y9YXOMSDvqu1Ompn9NSpNwWQFHs1hYD');
var imageURL; //URL stored into varaible
var ospry = new Ospry('pk-test-r5dsrmo3nign9vbx8i8nmoyz');

var onUpload = function(err, metadata) {
	imageURL = metadata.url;
	ospry.get({
		url: metadata.url,
		maxHeight: 200,
		imageReady: function(err, domImage) {
			$('#personPhoto').empty(); 
			$('#personPhoto').append(domImage); 
			$('#detection').html('<h2 class="col-lg-4-offset-8">Detecting emotions...</h2>')         
		},
	});

//face ++ reads data
api.request('detection/detect', {
		url: metadata.url
	}, function(err, result) {
		console.log(err);
		if (err) {
			$('#personPhoto').text('Load failed.');
			$('#personPhoto').empty(); 
			$('#detection').html('<h3 class="col-lg-4-offset-8">Detection failed. Please take another picture or try again!</h3>'); 
			return;
		}
			console.log(result);
			console.log(result.face[0].attribute);
			storeFace(result.face[0].attribute);
			$('#detection').html('<h2 class="col-lg-4-offset-8">Upload Success! See results below!</h2>');
	});
};

$('#up-form').submit(function(e) {
  e.preventDefault();
  ospry.up({
    form: this,
    imageReady: onUpload,
  });
});


var arr, str, int; //arbitrary

function storeFace (arr) {
	var emotion;
	if (arr.smiling.value > 75) {
		emotion = 'happy';
	}
	else if(arr.smiling.value > 50){
		emotion = 'content';
	}
	else if(arr.smiling.value > 25){
		emotion = 'sad';
	}
	else {
		emotion = 'angry';
	}
	database.ref().push({
		emotion: emotion,
		date: $.now(),
		image: imageURL
	})
	console.log(emotion);
	console.log(arr.smiling.value);
}