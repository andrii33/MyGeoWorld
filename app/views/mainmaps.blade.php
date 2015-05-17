<br/>
<div class="row">
    <div class="col-sm-1"></div>
    <div class="col-sm-7">
        <div style="width: 98%" class="panel panel-default geo-shadow">
            <div class="panel-heading">Map category list</div>
            <div class="panel-body">
                <p>Filter maps by category:</p>
            </div>
            <ul class="list-group">
                @foreach(@$categories as $category)
                    <li class="list-group-item">
                        <button class="btn btn-primary" type="button">
                            {{$category->name}} <span class="badge">{{$category->id}}</span>
                        </button>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
    <div class="col-sm-16">
        <div style="width: 98%" class="panel panel-default geo-shadow">
            <!-- Default panel contents -->
            <div class="panel-heading">Map list</div>
            <div class="panel-body">
                <p>List of the most popular maps:</p>
            </div>

            <ul class="list-group">
                @foreach(@$maps as $map)
                    <a href="/map/?id={{$map->id}}" class="list-group-item">
                        <span class="badge">{{$map->id}}</span>
                        <h4 class="list-group-item-heading">{{$map->name}}</h4>
                        <p class="list-group-item-text">{{$map->description}}</p>
                    </a>
                @endforeach
            </ul>
            <div class="pagination"> {{ $maps->links() }} </div>
        </div>
    </div>
</div>
