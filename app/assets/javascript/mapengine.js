
/**
 * Prototype for map
 * @param elementId
 * @param mapOptions
 * @constructor
 */
function MapEngine(elementId, mapOptions) {
    this._mapOptions = mapOptions || {
        zoom: 8,
        scrollwheel: false
    };
    this._elementId = elementId || 'map-canvas';
}

/**
 * Map container
 * @type {null}
 * @private
 */
MapEngine.prototype.MAP = null;

/**
 *
 * @type {null}
 */
MapEngine.prototype.GEOCODER = null;

MapEngine.prototype.initGeocode = function() {
    if (!MapEngine.GEOCODER) {
        MapEngine.GEOCODER = new google.maps.Geocoder();
    }
}

/**
 * Create new map
 */
MapEngine.prototype.createMap = function() {
   // if (!MapEngine.MAP) {
        MapEngine.MAP = new google.maps.Map(document.getElementById(this._elementId), this._mapOptions);
  //  }
};

/**
 * Error processing method for geo-location
 * @param errorFlag
 * @private
 */
MapEngine.prototype._handleNoGeolocation = function(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: MapEngine.MAP,
        position: new google.maps.LatLng(60, 105),
        content: content,
        scrollwheel: false
    };

    var infowindow = new google.maps.InfoWindow(options);
    MapEngine.MAP.setCenter(options.position);
}

/**
 * Show current user position
 * @param message show on position
 */
MapEngine.prototype.showCurrentPosition = function(message) {
    if (!message) {
        message = 'Hello, U are here !';
    }
    try {
        // Try HTML5 geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

                var infowindow = new google.maps.InfoWindow({
                    map: MapEngine.MAP,
                    position: pos,
                    scrollwheel: false,
                    content: message
                });

                MapEngine.MAP.setCenter(pos);
            }, function() {
                this._handleNoGeolocation(true);
            });
        } else {
            // Browser doesn't support Geolocation
            this._handleNoGeolocation(false);
        }
    } catch (e) {}
}

/**
 * Set marker by address
 * @param address
 * @param title
 * @param zIndex
 * @param icon
 * @param shape
 */
MapEngine.prototype.setMarker = function(address, title, zIndex, icon, shape) {
    try {
        this.initGeocode();
        MapEngine.GEOCODER.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) { console.log(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: MapEngine.MAP,
                    zIndex: zIndex,
                    icon: icon,
                    shape: shape,
                    title: title
                });
                MapEngine.MAP.setCenter(results[0].geometry.location);
            } else {
                throw  Error('Geocode was not successful for the following reason: ' + status);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

/**
 * @param mapData
 */
MapEngine.prototype.setMarkers = function(mapData) {
    if (mapData != undefined && mapData.length) {
        mapData.forEach(function(item, i, arr) {

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(item.latitude, item.longitude),
                map: MapEngine.MAP,
                //zIndex: 1,
                icon: '/assets/images/marker2.png',
                //shape: shape,
                title: item.name
            });

            if (item.name.length || item.description.lenght) {
                var contentString = "<div>"+item.name+"</div><br />" + "<div>"+item.description+"</div>";
                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.open(MapEngine.MAP,marker);
                });
            }

        });

        MapEngine.MAP.setCenter(new google.maps.LatLng(mapData[0].latitude, mapData[0].longitude));
    }
}

/**
 * @param elementId
 * @param data example :
 *  var data = google.visualization.arrayToDataTable([
 * ['Task', 'Count'],
 * ['Work', 11],
 * ['Eat', 2],
 * ['Commute', 2],
 * ['Watch TV', 2],
 * ['Sleep', 7]
 * ]);
 * @param options
 */
MapEngine.prototype.drawPipeChart = function(elementId, data, options) {
    var chart = new google.visualization.PieChart(document.getElementById(elementId));
    chart.clearChart();
    if (data.length) {
        data =  google.visualization.arrayToDataTable(data);
        chart.draw(data, options);
    }
}

/**
 * Draw points on map
 */
MapEngine.prototype.drawPoints = function(taxiData) {
    var mapOptions = {
        zoom: 8,
        center: taxiData[0],
        scrollwheel: false
    };
    mapEngine = new MapEngine('map-canvas', mapOptions);
    mapEngine.createMap();
    var pointArray = new google.maps.MVCArray(taxiData);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
    });

    heatmap.setMap(MapEngine.MAP);

    var gradient = [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 51, 1)',
            'rgba(255, 0, 0, 1)'
        ];
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
    heatmap.set('opacity', heatmap.get('opacity') ? null : 20);
    heatmap.set('radius', heatmap.get('radius') ? null : 30);
}
