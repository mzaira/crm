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

            <div class="col-md-3">
                <div class="card">
                    <img class="card-img-top" src="https://banner2.cleanpng.com/20180531/rtf/kisspng-pdf-computer-icons-information-rpse-5b0fbe63918ea4.4536074215277584355962.jpg" alt="Card image cap">
                    <div class="card-body">
                    <h5 class="card-title">Online Marketing Proposal - Noralign</h5>
                    {{-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --}}
                    <a target="_blank" href="{{ asset('uploads/presentations/Online Marketing Proposal-Noralign.pdf') }}" class="btn btn-primary">View Presentation</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
              <div class="card">
                  <img class="card-img-top" src="https://banner2.cleanpng.com/20180531/rtf/kisspng-pdf-computer-icons-information-rpse-5b0fbe63918ea4.4536074215277584355962.jpg" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">SEO Kick Off Presentation</h5>
                  {{-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --}}
                  <a target="_blank" href="{{ asset('uploads/presentations/Noralign -  SEO Kick Off Presentation.pdf') }}" class="btn btn-primary">View Presentation</a>
                  </div>
              </div>
          </div>

          <div class="col-md-3">
            <div class="card">
                <img class="card-img-top" src="https://banner2.cleanpng.com/20180531/rtf/kisspng-pdf-computer-icons-information-rpse-5b0fbe63918ea4.4536074215277584355962.jpg" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">Paid Ads Presentation</h5>
                {{-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> --}}
                <a target="_blank" href="{{ asset('uploads/presentations/Noralign -  Paid Ads Presentation-version-2.pdf') }}" class="btn btn-primary">View Presentation</a>
                </div>
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