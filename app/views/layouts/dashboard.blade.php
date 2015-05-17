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
                        @if(Auth::check())
                            <li>
                                <a href="javascript:void(0)" class="js-popover">Create Map from xls</a>
                                <div id="popover-head" class="hide">
                                    Please, fill fields and select xls file.
                                </div>
                                <div id="popover-content" class="hide">
                                    {{ Form::open(array('url'=>'upload-file','files'=>true, 'class' => 'navbar-form')) }}
                                    {{ Form::text('name', null, array('class'=>'form-control input-margin', 'placeholder'=>'Map name')) }}
                                    {{ Form::text('description', null, array('class'=>'form-control input-margin', 'placeholder'=>'Map description')) }}
                                    {{ Form::text('address-column-name', null, array('class'=>'form-control input-margin', 'placeholder'=>'Address column name')) }}
                                    {{ Form::text('base-address', null, array('class'=>'form-control input-margin', 'placeholder'=>'Base address')) }}
                                    {{ Form::text('name-column-name', null, array('class'=>'form-control input-margin', 'placeholder'=>'Name column name')) }}
                                    {{ Form::text('description-column-name', null, array('class'=>'form-control input-margin', 'placeholder'=>'Description column name')) }}
                                    {{ Form::text('rating-column-name', null, array('class'=>'form-control input-margin', 'placeholder'=>'Rating column name')) }}
                                    {{ Form::text('groupby-column-name', null, array('class'=>'form-control input-margin', 'placeholder'=>'Group by column name')) }}
                                    {{--{{ Form::label('file','File',array('id'=>'','class'=>'')) }}--}}
                                    {{ Form::file('file','',array('id'=>'','class'=>'')) }}
                                    <br/>
                                    <!-- submit buttons -->
                                    {{ Form::submit('Save') }}

                                    {{ Form::close() }}
                                </div>
                            </li>
                        @endif
                        <li>{{ HTML::link('/maps', 'Maps') }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            {{$content}}
        </div>


        <footer class="footer-style">
            <h3>Sitemap</h3>
            <div class="row">
                <div >
                    <div><a href="/home/">Home</a></div>
                    <div><a href="/about/">About</a></div>
                    <div><a href="/services/">Services</a></div>
                </div>
                <p>
                    Copyright &copy; 2015 Andrii Andriiets creation
                </p>
            </div>
        </footer>

        {{ HTML::script("https://www.google.com/jsapi?autoload={'modules':[{'name':'visualization','version':'1.1','packages':['corechart','line']}]}") }}
        {{ HTML::script('https://maps.googleapis.com/maps/api/js?v=3.exp&signed_in=true&libraries=visualization') }}
        {{ HTML::script('assets/javascript/mapengine.js', array('async' => 'async')) }}
        {{ HTML::script('assets/javascript/backend.js', array('async' => 'async')) }}
    </body>
</html>