//-------------------------------------------------------------------------------MAP//
var mapEngine = null;
var taxiData = [];
var mapData = [];
var pieChartData = [];

function initialize() {
    try {
        var mapOptions = {
            zoom: 15,
            scrollwheel: false
        };

        mapEngine = new MapEngine('map-canvas', mapOptions);
        mapEngine.createMap();
        mapEngine.showCurrentPosition("You are hear.");
    } catch (e) {}
}

$('#current-pos').click(function(e) {
    e.preventDefault();
    //mapEngine.createMap();
    mapEngine.showCurrentPosition('You are hear!');
});

$('#set-marker').click(function(e) {
    e.preventDefault();
    //mapEngine.setMarker('Чернигов, Шевченка 99', 'Marker', 1, '/assets/images/marker2.png');
    mapEngine.createMap();
    mapEngine.setMarkers(mapData)
});

$('#draw-points').click(function(e) {
    e.preventDefault();
    mapEngine.createMap();
    //var mapOptions = {
    //    zoom: 12,
    //    center: new google.maps.LatLng(51.5032732, 31.337556800000016)
    //};
    //mapEngine = new MapEngine('map-canvas', mapOptions);
    //mapEngine.createMap();
    mapEngine.drawPoints(taxiData);
});

google.maps.event.addDomListener(window, 'load', initialize);

//--------------------------------------------------------------------------------CHART-//

google.load("visualization", "1", {packages:["corechart", "line"]});
//google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Count'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var options = {
        title: 'My Daily Activities',
        is3D: true,
        height: 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
/*-----------------------------------------------------------------------------END CHART*/

//---------------------------------------------------------------------------LINE-CHART-//

//google.load('visualization', '1', {packages: ['line']});

function drawLineChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Guardians of the Galaxy');
    data.addColumn('number', 'The Avengers');
    data.addColumn('number', 'Transformers: Age of Extinction');

    data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
        chart: {
            title: 'Box Office Earnings in First Two Weeks of Opening',
            subtitle: 'in millions of dollars (USD)'
        },
        //width: 900,
        height: 300,
        axes: {
            x: {
                0: {side: 'top'}
            }
        }
    };


    var chart = new google.charts.Line(document.getElementById('line-chart'));

    chart.draw(data, options);
}
$(document).ready(function() {
    showMap();

    drawLineChart();

    drawChart();
});
/*-----------------------------------------------------------------------END LINE-CHART*/

/*---------------------------------Show map------------------------------------------*/
function showMap() {
    var id = $('.js-title').attr('data-id');
    $.ajax({
        url: '/show-map',
        data: {
            id: id
        },
        success: function(data) {
            taxiData = [];
            // clear chart
            pieChartData = [];
            $('#piechart').empty();

            data = $.parseJSON(data);
            mapData = data.locations;

            if (data.groupby != undefined && data.groupby.length) {
                pieChartData.push(['Task', 'Count']);
                data.groupby.forEach(function(item, key, arr) {
                    pieChartData.push([item.key, item.val]);
                });
            }

            mapData.forEach(function(item, i, arr) {
                taxiData.push(new google.maps.LatLng(item.latitude, item.longitude));
            });
            mapEngine.createMap();
            mapEngine.setMarkers(mapData)

            var title = $('.js-title').text();
            var options = {
                title: title,
                is3D: true,
                height: 300
            };
            mapEngine.drawPipeChart('piechart', pieChartData, options);

            showCategories(id);

            var h = $(window).height();
            var offsetTop = 90; // Calculate the top offset
            $('#map-canvas').css('height', h - offsetTop);

        }
    });

    return false;
}
/*-----------------------------------------------------------------------------------*/

function showCategories(id) {
    var categoryArr = [];
    $('.js-category').removeClass('active');
    $('.js-category').find('input').attr('checked', false);
    $.ajax({
        url: '/map-categories',
        dataType: 'json',
        data: {
            mapid: id
        },
        success: function(data) {
            console.log(data);
            categoryArr = $.map(data, function(el) { return el; });
            $('.js-category').each(function(i, el) {
                if (categoryArr.indexOf($(el).data('id').toString()) != -1) {
                    $(el).addClass('active');
                    $(el).find('input').attr('checked', true);
                } else {
                    $(el).addClass('neutral');
                    $(el).find('input').attr('checked', false);
                }
            });
        }
    });
}

//-----------------------------------------------------------------------------END MAP*/
