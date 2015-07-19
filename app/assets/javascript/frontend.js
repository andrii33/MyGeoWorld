//-------------------------------------------------------------------------------MAP//
var mapEngine = null;
var taxiData = [];
var mapData = [];
var pieChartData = [];

function initialize() {
    try {
        var mapOptions = {
            zoom: 8,
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
    mapEngine.createMap();
    mapEngine.setMarkers(mapData)
});

$('#draw-points').click(function(e) {
    e.preventDefault();
    mapEngine.createMap();
    mapEngine.drawPoints(taxiData);
});

google.maps.event.addDomListener(window, 'load', initialize);

//--------------------------------------------------------------------------------CHART-//

google.load("visualization", "1", {packages:["corechart", "line"]});
function drawChart() {

    // init data
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
    data.addColumn('number', 'Число месяца');
    data.addColumn('number', 'Количество заказов');

    data.addRows([
        [1,  4],
        [2,  10],
        [3,  12],
        [4,  0],
        [5,  2],
        [6,   5],
        [7,   1],
        [8,  1],
        [9,  7],
        [10, 5],
        [11,  3],
        [12,  0],
        [13,  1],
        [14,  5],
        [15,  3],
        [16,  6],
        [17,  8],
        [18,  2],
        [19,  3],
        [20,  1],
        [21,  1],
        [22,  5],
        [23,  8],
        [24,  1],
        [25,  0],
        [26,  4],
        [27,  3],
        [28,  3],
        [29,  2],
        [30,  3],
        [31,  4],
    ]);

    var options = {
        chart: {
            title: 'Количество заказов в интернет магазине',
            subtitle: 'за май 2015 года'
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
