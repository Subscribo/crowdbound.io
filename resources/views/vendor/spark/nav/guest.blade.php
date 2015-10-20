<img class="hidden" src="http://crowdbound.io/assets/images/crowdbound-logo-white.png">
<img class="hidden" src="http://crowdbound.io/assets/images/crowdbound-logo-blue.png">
<nav class="navbar navbar-fixed-top navbar-fixed-top-transparent primary-navbar-admin">
    <div class="container">
        <div class="navbar-header hidden-xs hidden-sm hidden-md">
            <button class="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="http://crowdbound.io">
                <img id="logo" class="img-responsive" src="http://crowdbound.io/assets/images/crowdbound-logo-white.png">
            </a>
        </div>
        <div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li>
                    <a href="/">Home</a>
                </li>
            </ul>
            <ul class="hidden-xs hidden-sm nav navbar-nav navbar-right">
                <li>
                    <div class="hidden-xs hidden-sm navbar-form navbar-right">
                        <a href="{{ url('login') }}" class="btn primary-btn -rounded -white -sm">
                            <i class="fa fa-sign-in mr-5"></i> Login
                        </a>
                    </div>
                </li>
                <li>
                    <div class="hidden-xs hidden-sm navbar-form  navbar-right">
                        <a href="{{ url('register') }}" class="btn primary-btn -blue -sm -rounded">
                            Registrieren
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>

