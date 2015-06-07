<div class="row">

    <div class="col-sm-3 sidebar-map geo-shadow">
        <p class="text-muted" id="map-id" data-id="" >Actions:</p>
        <ul class="nav nav-sidebar">
            <li><a href="#" id="current-pos">Show my current position</a></li>
            <li><a href="#" id="set-marker">Show as markers</a></li>
            <li><a href="#" id="draw-points">Show as heat map</a></li>
        </ul>
    </div>


    <div class="col-sm-21 col-sm-offset-3">
        <br/><br/>
        <div style="width: 98%" class="panel panel-default">
            <div class="panel-heading js-title" data-id="{{$map->id}}"><h1>{{$map->name}}</h1></div>
            <div class="panel-body">
                @if(Session::has('message'))
                    <p class="alert">{{ Session::get('message') }}</p>
                @endif
            </div>


            <div class="row-fluid">
                <div class="col-sm-12">
                    <div class="geo-chart-container  geo-shadow" id="line-chart" > </div>
                </div>
                <div class="col-sm-11 col-md-offset-1">
                    <div class="geo-chart-container  geo-shadow" id="piechart" > </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-24 ">
                    @foreach(@$categories as $category)
                    <span class="checkbox-inline">
                        <label class="custom-select geo-shadow js-category" data-id="{{$category->id}}"><input type="checkbox" style="display:none"/>{{$category->name}}</label>
                    </span>
                    @endforeach
                    <div class="col-sm-12">
                    </div>
                    <div class="col-sm-10">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1">From:</span>
                            <input type="text" class="form-control" placeholder="Enter from place ..." aria-describedby="basic-addon1">
                            <span class="input-group-addon" id="basic-addon1">To:</span>
                            <input type="text" class="form-control" placeholder="Enter to place ..." aria-describedby="basic-addon1">
                        </div>
                        <button type="button" class="btn btn-default btn-lg">
                            <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Create the route
                        </button>
                    </div>
                    <div class="col-sm-2">
                    </div>
                </div>
            </div>
            <br/>
            <div class="row-fluid">
                <div class="col-sm-24 ">
                    <div id="map-canvas" class="geo-shadow geo-chart-container"></div>
                </div>
            </div>
            <div class="row"></div>
        </div>
    </div>
</div>





