@extends('administrator.layouts.default')

@section('content')

<!-- Main content -->
<div class="main-content" id="panel">
    <!-- Topnav -->
    @include('administrator.includes.top_nav')
    <!-- Header -->
    <div class="header bg-primary pb-2">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4">
                    <div class="col-lg-6 col-7">
                        <h6 class="h2 text-white d-inline-block mb-0">Manage {{ $title }}</h6>
                        <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                <li class="breadcrumb-item"><a href="/administrator"><i class="fas fa-home"></i></a></li>
                                <li class="breadcrumb-item"><a href="/administrator/clients">{{ $title }}</a></li>
                                <li class="breadcrumb-item"><a href="javascript:void(0)">{{ $user->name }}</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div class="col-lg-6 col-5 text-right">
                        <a href="route{{route('admin.client')}}" class="btn btn-sm btn-neutral">Back</a>
                    </div>
                </div>
                <!-- Card stats -->
                <div class="row">
                </div>
            </div>
            {{-- <client-modal v-if="showModal" @close="showModal = false"> </client-modal> --}}
        </div>

    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
        <br />
        <br />
        <br />
        <br />
        <div class="row">
            <form id="form_document" action="javascript:;" method="post">
                <div class="form-group">
                    <label for="edit_name">Name</label>
                    <input type="text" name="fullname" class="form-control" id="edit_name" aria-describedby="nameHelp" placeholder="{{$user->name}}">
                </div>
                <div class="form-group">
                    <label for="edit_email">Email</label>
                    <input type="email" name="email" class="form-control" id="edit_email" aria-describedby="emailHelp" placeholder="{{$user->email}}">
                </div>

                <input type="hidden" name="attachment" id="attachment">
                <button type="submit" class="btn btn-primary" id="edit_user">Submit</button>
            </form>
        </div>

        <!-- Footer -->
        @include('administrator.includes.footer')
    </div>

</div>
@endsection