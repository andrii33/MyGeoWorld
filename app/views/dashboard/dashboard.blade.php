<div class="row">
    <div class="col-sm-3 sidebar-map geo-shadow">
        <p class="text-muted">Maps:</p>
        <ul class="nav nav-sidebar">
            @foreach($maps as $map)
            <li>
                <a href="#" data-id="{{$map->id}}" class="js-load-map">{{$map->name}}</a>
            </li>
            @endforeach
            @if(!$maps)
                <p class="text-muted">There is no maps, yet.</p>
            @endif
        </ul>
    </div>

    <div class="col-sm-3 sidebar geo-shadow">
        <p class="text-muted">Actions:</p>
        <ul class="nav nav-sidebar">
            <li><a href="#" id="current-pos">Show my current position</a></li>
            <li><a href="#" id="set-marker">Show as markers</a></li>
            <li><a href="#" id="draw-points">Show as heat map</a></li>
            <li><a class="js-delete-map text-muted" style="display: none" data-id="">Delete</a></li>
        </ul>
    </div>


    <div class="col-sm-21 col-sm-offset-3">
        @if(Session::has('message'))
            <p class="alert">{{ Session::get('message') }}</p>
        @endif
        <p class="alert"></p>
            <h1>Dashboard</h1>

            <h2 class="js-title">You can select existing or download new map.</h2>
            <div class="row-fluid">
                <div class="col-sm-12">
                    <div class="geo-chart-container  geo-shadow" id="line-chart" > </div>
                </div>
                <div class="col-sm-11 col-md-offset-1">
                    <div class="geo-chart-container  geo-shadow" id="piechart" > </div>
                </div>
            </div>
            <div class="row-fluid">
                <div class="col-sm-24 ">
                    <div id="map-canvas" class="geo-shadow geo-chart-container"></div>
                </div>
            </div>
            <div class="row"></div>
    </div>
</div>





