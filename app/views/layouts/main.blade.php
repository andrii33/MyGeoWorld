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
                        <li>{{ HTML::link('/maps', 'Maps') }}</li>
                    </ul>
                    {{--<h1>World geo resource<span class="label label-default">New</span></h1>--}}
                </div>
            </div>
        </div>

        <div class="container-fluid">
            @if(Session::has('message'))
                <p class="alert">{{ Session::get('message') }}</p>
            @endif
        </div>

        {{ $content }}


        <footer class="footer-style">
            <h3>Sitemap</h3>
            <div class="row">
                <div >
                    <div><a href="/home/">Home</a></div>
                    <div><a href="/about/">About</a></div>
                    <div><a href="/services/">Services</a></div>
                </div>
            </div>
            <p>
                Copyright &copy; 2015 Andrii Andriiets creation
            </p>
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