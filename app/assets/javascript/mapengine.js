
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
 * Create new map
 */
MapEngine.prototype.createMap = function() {
    if (!MapEngine.MAP) {
        MapEngine.MAP = new google.maps.Map(document.getElementById(this._elementId), this._mapOptions);
    }
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

MapEngine.prototype._getCurrentPosition = function() {
    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            return pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        }, function() {
            this._handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        this._handleNoGeolocation(false);
        throw new Error('Failed geo-location');
    }
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

MapEngine.prototype.setMarker = function(position, title, zIndex, icon, shape) {
    try {
        var shape = {
            coords: [1, 1, 1, 20, 18, 20, 18 , 1],
            type: 'poly'
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                var marker = new google.maps.Marker({
                    position: pos,
                    map: MapEngine.MAP,
                    title: title
                });
                MapEngine.MAP.setCenter(pos);
            }, function() {
                this._handleNoGeolocation(true);
            });
        } else {
            // Browser doesn't support Geolocation
            this._handleNoGeolocation(false);
        }
    } catch (e) {
        console.log(e);
    }

}
