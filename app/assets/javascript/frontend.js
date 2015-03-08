//------------------------------------------------------------------------------MAP//
var mapEngine = null;

function initialize() {
    try {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false
        };

        mapEngine = new MapEngine('map-canvas', mapOptions);
        mapEngine.createMap();
        mapEngine.showCurrentPosition("It's your current position.");
    } catch (e) {}
}

$('#current-pos').click(function(e) {
    e.preventDefault();
    mapEngine.showCurrentPosition('Hello');
});

$('#set-marker').click(function(e) {
    e.preventDefault();
    mapEngine.setMarker('Чернигов, Шевченка 99', 'Marker', 1, '/assets/images/marker2.png');
});

$('#draw-points').click(function(e) {
    e.preventDefault();
    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(51.5032732, 31.337556800000016)
    };
    mapEngine = new MapEngine('map-canvas', mapOptions);
    mapEngine.createMap();
    mapEngine.drawPoints();
});

google.maps.event.addDomListener(window, 'load', initialize);

$(window).resize(function () {
    var h = $(window).height();
    var offsetTop = 90; // Calculate the top offset

    $('#map-canvas').css('height', h - offsetTop);

}).resize();
//-------------------------------------------------------------------------------END MAP-//

//--------------------------------------------------------------------------------CHART-//

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
/*-----------------------------------------------------------------------------END CHART*/