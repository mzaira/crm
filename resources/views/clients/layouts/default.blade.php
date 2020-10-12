<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Creativo - Fides Login</title>

<!--CSS-->
<link href="{{ asset('src/css/home.css') }}" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;500&display=swap" rel="stylesheet">

</head>
<body>
    <div id="wrapper" class="container">
        @yield('content')
    </div>
{{-- js --}}
<script src="{{ asset('src/js/app.js') }}"></script>
<script src="{{ asset('src/js/home.js') }}"></script>
</body>
</html>