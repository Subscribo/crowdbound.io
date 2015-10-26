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
        <li class="dropdown">
        <a class="dropdown-toggle" aria-expanded="false" data-toggle="dropdown" href="#" role="button">
          Kampagnen
          <span class="caret"></  span></span>
        </a>
        <ul class="dropdown-menu dropdown-flat -blue" role="menu">
          <li>
          <a href="#">Neue Kampagne</a>
          </li>
          <li>
          <a href="#">Kampagnen-Übersicht</a>
          </li>
        </ul>
        </li>
        <li class="dropdown">
        <a class="dropdown-toggle" aria-expanded="false" data-toggle="dropdown" href="#" role="button">
          Vorlagen
          <span class="caret"></  span></span>
        </a>
        <ul class="dropdown-menu dropdown-flat -blue" role="menu">
          <li>
          <a href="{{ url('templates/campaigns') }}">E-Mail Vorlagen</a>
          </li>
          <li>
          <a href="{{ url('templates/campaigns') }}">Kampagnen Vorlagen</a>
          </li>
        </ul>
        </li>
        <li>
        <a href="#">Berichte</a>
        </li>
        <li class="dropdown">
        <a class="dropdown-toggle" aria-expanded="false" data-toggle="dropdown" href="#" role="button">
          API
          <span class="caret"></  span></span>
        </a>
        <ul class="dropdown-menu dropdown-flat -blue" role="menu">
          <li>
          <a href="#">API-Dokumentation</a>
          </li>
          <li>
          <a href="#">API-Einstellungen</a>
          </li>
        </ul>
        </li>
      </ul>
      <ul class="hidden-xs hidden-sm nav navbar-nav navbar-right">
        <li>
        <div class="hidden-xs hidden-sm navbar-form navbar-right">
          <button class="btn flat-btn -transparent-white -sm dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button">
            <span class="mr-20" style="color: grey; font-weight: 400;">GUTHABEN:</span>
            <span style="color: grey;">€ 150</span>
          </button>
        </div>
        </li>
        <li>
        <div class="hidden-xs hidden-sm navbar-form navbar-right">
          <div class="btn-group">
            <button class="btn flat-btn -blue -sm dropdown-toggle" aria-expanded="false" data-toggle="dropdown" type="button">
              <span style="color: white;"><i class="fa fa-user mr-5"></i>{{ Auth::user()->name }}</span>
              <span class="caret" style="color: white;"></span>
            </button>
            <ul class="dropdown-menu dropdown-flat -blue" role="menu">
              <!-- Settings Dropdown -->
              @if (Spark::isDisplayingSettingsScreen())
              {{-- This Dropdown Is For Spark Settings Sreens - Vue Based --}}
              {{-- Vue Based Dropdown Provides Better UX Experience On Settings Screens --}}
              @include('spark::nav.spark.dropdown')
              @else
              {{-- This Dropdown Is For Other User Constructed App Screens - Blade Based --}}
              @include('spark::nav.app.dropdown')
              @endif
            </ul>
          </div>
        </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

