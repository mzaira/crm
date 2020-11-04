@extends('clients.layouts.default')

@section('content')
 
  <!-- Main content -->
  <div class="main-content" id="panel">
    <!-- Topnav -->
    @include('clients.includes.top_nav')
    <!-- Header -->
    <div class="header bg-primary pb-6">
      <div class="container-fluid">
        <div class="header-body">
          <div class="row align-items-center py-4">
            <div class="col-lg-6 col-7">
              <h6 class="h2 text-white d-inline-block mb-0">{{ $title }}</h6>
              <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                  <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href="#">{{ $title }}</a></li>
                  {{-- <li class="breadcrumb-item active" aria-current="page">Default</li> --}}
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              {{-- <a href="#" class="btn btn-sm btn-neutral">New Client</a>
              <a href="#" class="btn btn-sm btn-neutral">New Employee</a> --}}
            </div>
          </div>
          <!-- Card stats -->
       
        </div>
      </div>
    </div>
    <!-- Page content -->

    <div class="container-fluid mt--6">

        <div class="row">

            <div class="col-md-12">
                <div class="jumbotron">
                  <h1 class="display-4">Oops, it seem's you dont have meeting minutes yet. </h1>
                  {{-- <p class="lead">This area</p> --}}
                  <hr class="my-4">
                  <p>If you believe that this is an error, please contact us.</p>
                  <a class="btn btn-primary btn-lg" href="mailto:info@creativouae.com" role="button">Send an Email</a>
              </div>
            </div>

        </div>


      <!-- Footer -->
      @include('administrator.includes.footer')
    </div>
    
    {{-- Page Content --}}
    </div> 
  </div>
@endsection