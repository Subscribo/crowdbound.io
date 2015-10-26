<!DOCTYPE html>
<html lang="en">
<head>
    @include('spark::layouts.common.head')

    <!-- We use Winterfell for rendering Forms -->
    <script src="{{ elixir('assets/js/winterfell.js') }}"></script>

</head>
<body class="homepage-backend-app">
    <!-- Navigation -->
    @if (Auth::check())
        @include('spark::nav.authenticated')
    @else
        @include('spark::nav.guest')
    @endif

    <!-- Main Content -->
    @yield('content')

    <!-- Footer -->
    @include('spark::common.footer')

    <!-- JavaScript Application -->
    <script src="{{ elixir('assets/js/laravel-spark-app.js') }}"></script>
</body>
</html>
