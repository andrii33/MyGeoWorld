<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Authentication App With Laravel 4</title>

    <!-- Bootstrap -->
    {{ HTML::style('assets/stylesheets/backend.css'); }}

</head>

    <body>

        <div class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-inner">
                    <ul class="nav navbar-nav">
                        <li>{{ HTML::link('/', 'Main') }}</li>
                        @if(!Auth::check())
                            <li>{{ HTML::link('users/register', 'Register') }}</li>
                            <li>{{ HTML::link('users/login', 'Login') }}</li>
                        @else

                            <li>{{ HTML::link('users/logout', 'logout') }}</li>
                        @endif
                    </ul>
                    @if(Auth::check())
                    <ul class="nav navbar-nav">
                        <li>
                            <a href="javascript:void(0)" id="popover">Upload new file</a>
                            <div id="popover-head" class="hide">
                                some title
                            </div>
                            <div id="popover-content" class="hide">
                                {{ Form::open(array('url'=>'upload-file','files'=>true, 'class' => 'navbar-form')) }}

                                {{ Form::label('file','File',array('id'=>'','class'=>'')) }}
                                {{ Form::file('file','',array('id'=>'','class'=>'')) }}
                                <br/>
                                <!-- submit buttons -->
                                {{ Form::submit('Save') }}

                                {{ Form::close() }}
                            </div>
                        </li>
                    </ul>
                    @endif
                </div>
            </div>
        </div>

        <div class="container-fluid">
            {{$content}}
        </div>


        <footer>
            <div class="container">
                <div class="row">
                    {{--<div class="col-md-8 twitter" id="piechart" style="width: 900px; height: 500px;">--}}

                    </div>
                    <div class="col-md-4 sitemap">
                        <h3>Sitemap</h3>
                        <div class="row">
                            <div class="col-md-12">
                                <a href="/home/">Home</a>
                                <a href="/about/">About</a>
                                <a href="/services/">Services</a>
                            </div>
                            <div class="col-md-12">
                                <a href="/partners/">Partners</a>
                                <a href="/customers/">Support</a>
                                <a href="/contact/">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 social">
                        <h3>Social networks</h3>
                        <a href="http://twitter.com/" class="social-icon twitter"></a>
                        <a href="http://facebook.com/" class="social-icon facebook"></a>
                        <a href="http://plus.google.com/" class="social-icon google-plus"></a>
                        <a href="http://vimeo.com/" class="social-icon-small vimeo"></a>
                        <a href="http://youtube.com/" class="social-icon-small youtube"></a>
                        <a href="http://flickr.com/" class="social-icon-small flickr"></a>
                        <a href="http://instagram.com/" class="social-icon-small instagram"></a>
                        <a href="/rss/" class="social-icon-small rss"></a>
                    </div>
                    <div class="col-md-8 footer-logo">
                        <a href="/"><img src="{{ URL::to('/') }}/assets/images/footer-logo.png" alt="Whitesquare logo"></a>
                        <p>
                            Copyright &copy; 2012 Whitesquare. A
                            <a href="http://pcklab.com">pcklab</a> creation
                        </p>
                    </div>
                </div>
            </div>
        </footer>

        {{ HTML::script("https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization','version':'1.1','packages':['corechart','line']}]}") }}
        {{ HTML::script('https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=visualization') }}
        {{ HTML::script('assets/javascript/mapengine.js', array('async' => 'async')) }}
        {{ HTML::script('assets/javascript/backend.js', array('async' => 'async')) }}
    </body>
</html>