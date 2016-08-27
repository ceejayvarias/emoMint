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
var imageURL; //URL stored into variable
var journal; //storing journal entry
var ospry = new Ospry('pk-test-r5dsrmo3nign9vbx8i8nmoyz');

var onUpload = function(err, metadata) {
	imageURL = metadata.url;
	ospry.get({
		url: metadata.url,
		imageReady: function(err, domImage) {
			$('#personPhoto').empty(); 
			$('#personPhoto').append(domImage); 
			$('#entry').html('<h2 style="color: black">Detecting emotions...</h2>')         
		},
	});

//face ++ reads data
api.request('detection/detect', {
		url: metadata.url
	}, function(err, result) {
		console.log(err);
		if (err) { 
			$('#entry').html('<h2 style="color: yellow">Detection failed. Please take another picture or try again!</h3>'); 
			return;
		}
			if ($('#textJournal').val() == '') {
				journal = "No journal entry.";
			}
			else{
				journal = $('#textJournal').val();
			}
			$('#textJournal').val('');
			storeFace(result.face[0].attribute);
			$('#detection').empty();
			// $('#detection').html('<h2 class="col-lg-4-offset-8" style="color: black">Upload Success! See results below!</h2>');
	});
};

$('#up-form').submit(function(e) {
  e.preventDefault();
  ospry.up({
    form: this,
    imageReady: onUpload,
  });
});

//function that stores the inital data
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
		image: imageURL,
		journal : journal,
		movieuploaded : true,
		musicuploaded : true
	})
	$('#entry').html("Emotion: " + emotion + "<br>" + journal);
}