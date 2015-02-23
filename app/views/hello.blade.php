<!DOCTYPE html>
<html>
<head>
	<title>Geolocation</title>
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
	<meta charset="utf-8">
	{{ HTML::style('assets/stylesheets/frontend.css'); }}

</head>
<body>

<div id="map-canvas"></div>
{{ HTML::script('https://maps.googleapis.com/maps/api/js?v=3.exp') }}
{{ HTML::script('assets/javascript/frontend.js', array('async' => 'async')) }}
</body>
</html>