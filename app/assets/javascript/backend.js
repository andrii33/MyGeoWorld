//------------------------------------------------------------------------------MAP//
var mapEngine = null;
var taxiData = [
    new google.maps.LatLng(51.502551, 31.345368),
    new google.maps.LatLng(51.502745, 31.344586),
    new google.maps.LatLng(51.502842, 31.343688)
];
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
        mapEngine.showCurrentPosition("It's your current position.");
    } catch (e) {}
}

$('#current-pos').click(function(e) {
    e.preventDefault();
    mapEngine.createMap();
    mapEngine.showCurrentPosition('Hello');
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

$(window).resize(function () {
    var h = $(window).height();
    var offsetTop = 90; // Calculate the top offset

    $('#map-canvas').css('height', h - offsetTop);

}).resize();
//-------------------------------------------------------------------------------END MAP-//

//--------------------------------------------------------------------------------CHART-//

google.load("visualization", "1", {packages:["corechart", "line"]});
//google.setOnLoadCallback(drawChart);
function drawChart() {

    // default init data
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
    drawChart();
    drawLineChart();

    // crate map popover
    $('.js-popover').popover({
        html : true,
        title: function() {
            return $("#popover-head").html();
        },
        content: function() {
            return $("#popover-content").html();
        }
    });

    // create group
    $('.js-popover-group').popover({
        html : true,
        title: function() {
            return $("#popover-group-head").html();
        },
        content: function() {
            return $("#popover-group-content").html();
        }
    });
});
/*-----------------------------------------------------------------------END LINE-CHART*/

/*---------------------------------Show map------------------------------------------*/
$('.js-load-map').click(function() {
    var id = $(this).data('id');
    var access = $(this).data('access');
    var title = $(this).text();
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

        }
    });
    $('.js-title').text(title);
    $('#map-id').attr('data-id', id);
    $('.js-make-public-map').hide();
    $('.js-make-private-map').hide();

    $('.js-delete-map').show();
    if (access == 'private') {
        $('.js-make-public-map').show();
    } else if (access == 'public') {
        $('.js-make-private-map').show();
    }



    return false;
});
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

/*-----------------------------Make public map--------------------------------------*/
$('.js-make-public-map').click(function() {
    var id = $('#map-id').attr('data-id');
    $.ajax({
        url: '/make-public-map',
        data: {
            id: id
        },
        success: function(data) {
            $('.js-make-public-map').hide();
            $('.js-make-private-map').show();
            $('a[data-id="'+ id +'"]').attr('data-access', 'public');
        }
    });
});
/*----------------------------------------------------------------------------------*/


/*-----------------------------Make private map--------------------------------------*/
$('.js-make-private-map').click(function() {
    var id = $('#map-id').attr('data-id');
    $.ajax({
        url: '/make-private-map',
        data: {
            id: id
        },
        success: function(data) {
            $('.js-make-public-map').show();
            $('.js-make-private-map').hide();
            $('a[data-id="'+ id +'"]').attr('data-access', 'private');
        }
    });
});
/*----------------------------------------------------------------------------------*/

/*------------------------------------Delete map------------------------------------*/
$('.js-delete-map').click(function() {
    var id = $('#map-id').attr('data-id');
    var r = confirm("Do you want to delete the map ?");
    if (r == true) {
        $.ajax({
            url: '/delete-map',
            data: {
                id: id
            },
            success: function(data) {
                $(this).attr('data-id', '');
                $(this).hide();
                $('a[data-id="'+id+'"]').remove();
                $('.js-title').text('You can select existing or download new map.');
                $('.js-make-public-map').hide();
                initialize();
            }
        });
    }
    return false;
});
/*----------------------------------------------------------------------------------*/

/*-------------------------------- Add / Delete category ---------------------------*/
$('.js-category').click(function() {
    var mapId = $('#map-id').attr('data-id');
    var categoryId = $(this).attr('data-id');
    var currentCategory = $(this);
    if (currentCategory.hasClass('active')) {
        $.ajax({
            url: '/delete-category',
            data: {
                mapid: mapId,
                categoryid: categoryId
            },
            success: function(data) {
                currentCategory.removeClass('active');
                currentCategory.addClass('neutral');
                currentCategory.find('input').attr('checked', false);
            }
        });
    } else if ($(this).hasClass('neutral')) {
        $.ajax({
            url: '/add-category',
            data: {
                mapid: mapId,
                categoryid: categoryId
            },
            success: function(data) {
                currentCategory.removeClass('neutral');
                currentCategory.addClass('active');
                currentCategory.find('input').attr('checked', true);
            }
        });
    }

});
/*--------------------------------------------------------------------------------*/