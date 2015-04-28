<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Authentication App With Laravel 4</title>

    <!-- Bootstrap -->
    {{ HTML::style('assets/stylesheets/frontend.css'); }}
    {{ HTML::style('assets/stylesheets/jquery.carousel-3d.default.css'); }}
</head>

    <body style="margin: 0px;">

        <div class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-inner">
                    <ul class="nav navbar-nav">
                        <li>{{ HTML::link('/', 'Main') }}</li>
                        @if(!Auth::check())
                            <li>{{ HTML::link('users/register', 'Register') }}</li>
                            <li>{{ HTML::link('users/login', 'Login') }}</li>
                        @else
                            <li>{{ HTML::link('/dashboard', 'Dashboard') }}</li>
                            <li>{{ HTML::link('users/logout', 'logout') }}</li>
                        @endif
                    </ul>
                    {{--<h1>World geo resource<span class="label label-default">New</span></h1>--}}
                </div>
            </div>
        </div>

        <div class="container-fluid">
            @if(Session::has('message'))
                <p class="alert">{{ Session::get('message') }}</p>
            @endif


            {{--{{ $content }}--}}
        </div>
        <div class="wrapper" style="width: 100%;">
            <div class="banner-background" data-carousel-3d>
                <img src="{{ URL::to('/') }}/assets/images/map1.jpg" />
                <img src="{{ URL::to('/') }}/assets/images/map3.jpg" />
                <img src="{{ URL::to('/') }}/assets/images/city3.gif" />
                <!-- 16:9 aspect ratio -->
                <div  selected>
                    <iframe width="640" height="426" src="https://www.youtube.com/embed/i2J0J7fliBI" frameborder="0" allowfullscreen></iframe>
                </div>
                <img src="{{ URL::to('/') }}/assets/images/map4.jpg" />
            </div>
        </div>
        <div style="width: 99%" class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading">Panel heading</div>
            <div class="panel-body">
                <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue.
                    Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
                    Pellentesque ornare sem lacinia quam venenatis vestibulum.
                    Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>

            <div class="row">
                <div class="col-sm-8 col-md-8">
                    <div class="thumbnail">
                        <img src="{{ URL::to('/') }}/assets/images/map1.jpg" />
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
                                Pellentesque ornare sem lacinia quam venenati</p>
                            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-md-8">
                    <div class="thumbnail">
                        <img src="{{ URL::to('/') }}/assets/images/map2.jpg" />
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
                                Pellentesque ornare sem lacinia quam venenati</p>
                            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-8 col-md-8">
                    <div class="thumbnail">
                        <img src="{{ URL::to('/') }}/assets/images/map3.jpg" />
                        <div class="caption">
                            <h3>Thumbnail label</h3>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.
                                Pellentesque ornare sem lacinia quam venenati</p>
                            <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" style="width: 100%;">
            <div class="row">
                <div class="col-md-24" id="map-canvas"></div>
            </div>
        </div>
        <footer class="footer-style">
            <h3>Sitemap</h3>
            <div class="row">
                <div >
                    <div><a href="/home/">Home</a></div>
                    <div><a href="/about/">About</a></div>
                    <div><a href="/services/">Services</a></div>
                </div>
            </div>
        </footer>
        {{--<footer>--}}
            {{--<div class="panel panel-default">--}}
                {{--<div class="panel-heading">Panel heading</div>--}}

            {{--</div>--}}
        {{--</footer>--}}

        {{ HTML::script("https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization','version':'1.1','packages':['corechart','line']}]}") }}
        {{ HTML::script('https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=visualization') }}
        {{ HTML::script('assets/javascript/mapengine.js', array('async' => 'async')) }}
        {{ HTML::script('assets/javascript/frontend.js', array('async' => 'async')) }}
    </body>
</html>