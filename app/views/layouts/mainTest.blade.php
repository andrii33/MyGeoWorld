<!DOCTYPE html>
<html>
<head>
    <title>Like fish</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    {{ HTML::style('assets/stylesheets/frontend.css'); }}
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->

</head>
    <body>
    <div class="wrapper container">
        <header>
            <a href="/"><img src="{{asset('assets/images/logo.png')}}" alt="Whitesquare logo"></a>
            <form name="search" action="#" method="get" class="form-inline form-search pull-right">
                <div class="input-group">
                    <label class="sr-only" for="searchInput">Search</label>
                    <input class="form-control" id="searchInput" type="text" name="search" placeholder="Search">
                    <div class="input-group-btn">
                        <button type="submit" class="btn btn-primary">GO</button>
                    </div>
                </div>
            </form>
        </header>
        <nav class="navbar navbar-default">
            <ul class="nav navbar-nav">
                <li><a href="/home/">Home</a></li>
                <li class="active"><a href="/about/">About us</a></li>
                <li><a href="/services/">Services</a></li>
                <li><a href="/partners/">Partners</a></li>
                <li><a href="/customers/">Customers</a></li>
                <li><a href="/projects/">Projects</a></li>
            </ul>
        </nav>
        <div class="heading">
            <h1>About us</h1>
        </div>
        <div class="row">
            <aside class="col-md-7">
                <ul class="list-group submenu">
                    <li class="list-group-item active">Lorem ipsum</li>
                    <li class="list-group-item"><a href="/donec/">Donec tincidunt laoreet</a></li>
                    <li class="list-group-item"><a href="/vestibulum/">Vestibulum elit</a></li>
                    <li class="list-group-item"><a href="/etiam/">Etiam pharetra</a></li>
                    <li class="list-group-item"><a href="/phasellus/">Phasellus placerat</a></li>
                    <li class="list-group-item"><a href="/cras/">Cras et nisi vitae odio</a></li>
                </ul>
                <div class="panel panel-primary">
                    <div class="panel-heading">Our offices</div>
                    <div class="panel-body">
                        <img src="{{ URL::to('/') }}/assets/images/map.png" class="img-responsive" alt="Our offices">
                    </div>
                </div>
            </aside>
            <section class="col-md-17">

                {{ $content }}

            </section>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-8 twitter">
                    <h3>Twitter feed</h3>
                    <time datetime="2012-10-23"><a href="#">23 oct</a></time>
                    <p>
                        In ultricies pellentesque massa a porta. Aliquam ipsum enim, hendrerit ut porta nec, ullamcorper et nulla. In eget mi dui, sit amet scelerisque nunc. Aenean aug
                    </p>
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
{{ HTML::script('https://maps.googleapis.com/maps/api/js?v=3.exp') }}
{{ HTML::script('assets/javascript/frontend.js', array('async' => 'async')) }}
</body>
</html>