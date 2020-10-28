<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>Fides</title>
  <link rel="icon" href="assets/img/brand/favicon.png" type="image/png">
  {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />  <!-- Page plugins --> --}}
  <link rel="stylesheet" href="{{ asset('src/css/home.css') }}" type="text/css">
  <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;500&display=swap" rel="stylesheet">

</head>
<body>
  <div id="wrapper">
    @yield('content')
  </div>
</body>
<script src="{{ asset('src/js/home.js') }}"></script>
<script src="{{ asset('src/js/app.js') }}"></script>
</html>
