function initialize() {
    try {
        var mapOptions = {
            zoom: 8,
            scrollwheel: false
        };

        mapEngine = new MapEngine('map-canvas', mapOptions);
        mapEngine.createMap();
        mapEngine.setMarker(undefined, 'Marker');
       // mapEngine.showCurrentPosition('it works 2');

    } catch (e) {}

}

google.maps.event.addDomListener(window, 'load', initialize);

$(window).resize(function () {
    var h = $(window).height();
    var offsetTop = 90; // Calculate the top offset

    $('#map-canvas').css('height', h - offsetTop);

}).resize();
