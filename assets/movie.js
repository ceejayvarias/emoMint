<html>
<head>
	<title></title>
</head>
<body>

<script src='http://code.jquery.com/jquery-2.1.3.min.js'></script>
<script type="text/javascript">
	var title = 'romancing+the+stone';
	var queryURL = "http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json";

	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
	     console.log(response);
	});

	$.ajax({url: "http://www.omdbapi.com/?t=the+revenant&y=&plot=short&r=json", method: 'GET'}).done(function(response) {
	     console.log(response);
	});

	$.ajax({url: "http://www.omdbapi.com/?t=godfather&y=&plot=short&r=json", method: 'GET'}).done(function(response) {
	     console.log(response);
	});

	$.ajax({url: "http://www.omdbapi.com/?t=space+jam&y=&plot=short&r=json", method: 'GET'}).done(function(response) {
	     console.log(response);
	});

	$.ajax({url: "http://www.omdbapi.com/?t=boiler+room&y=&plot=short&r=json", method: 'GET'}).done(function(response) {
	     console.log(response);
	});

	$.ajax({url: "http://www.omdbapi.com/?t=inception&y=&plot=short&r=json", method: 'GET'}).done(function(response) {
	     console.log(response);
	});

	$.ajax({url: "http://www.omdbapi.com/?t=the+dark+night&y=&plot=short&r=json", method: 'GET'}).done(function(response) {
	     console.log(response);
	});

</script>


</body>
</html>
