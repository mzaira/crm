@extends('public.layouts.default')
@section('content')
    <div class="container">
           <register register_route="{{ route('register.submit') }}"></register>
    </div>
@endsection