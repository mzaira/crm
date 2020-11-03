@extends('administrator.layouts.default')

@section('content')
 
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    @include('administrator.includes.top_nav')
    <!-- Header -->
    <div class="header bg-primary pb-2">
      <client-navigator title="{{ $title }}"> </client-navigator>
    </div>
    <!-- Page content -->
    <div class="container-fluid ">
      <client-list> </client-list>
      <!-- Footer -->
      @include('administrator.includes.footer')
    </div>
  </div>
@endsection