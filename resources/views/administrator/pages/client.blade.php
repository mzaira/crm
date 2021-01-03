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
                  <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                  <li class="breadcrumb-item"><a href="#">{{ $title }}</a></li>
                </ol>
              </nav>
            </div>
            <div class="col-lg-6 col-5 text-right">
              <a href="javascript:;" data-toggle="modal" data-target="#modal" class="btn btn-sm btn-neutral">New Client</a>
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
      <br/>
      <br/>
      <br/>
      <br/>
      <div class="row">
        <div class="table-responsive">
          <!-- Projects table -->
          <table class="table align-items-center table-flush">
            <thead class="thead-light">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Date Added</th>
                <th scope="col text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($users as $item)
                <tr>
                  <th scope="row"> {{ $item->name }} </th>
                  @if ($item->role == 1)
                     <th scope="row"> Admin </th>
                   @elseif ($item->role == 2)
                    <th scope="row"> Employee </th>
                    @elseif($item->role == 3)
                    <th scope="row"> Client </th>
                  @endif
                  <td> {{ $item->created_at }}</td>

                <td class="">
                  <div class="dropdown">
                      <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v"></i>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                        <a class="dropdown-item" href="#">Delete</a>
                        <a class="dropdown-item" href="#">Update</a>
                        <a class="dropdown-item" href="#">View Password</a>
                        <a class="dropdown-item" href="#">Reset Password</a>
                      </div>
                  </div>
              </td>
                </tr>
              @endforeach
            </tbody>
          </table>
        </div>
      </div>
       

      <!-- Footer -->
      @include('administrator.includes.footer')
      <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Add Employee</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="form_document" action="javascript:;" method="post">
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input type="text" name="fullname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="text" name="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Role</label>
                      <select class="form-control" name="role" id="exampleFormControlSelect2">
                            <option value="1">Administrator</option>
                            <option value="2">Employee</option>
                            <option value="3">Client</option>
                      </select>          
                  </div>
         
                  <input type="hidden" name="attachment" id="attachment">
                <button type="submit" class="btn btn-primary" id="create_user">Submit</button>
              </form>
             </div>
          </div>
            {{-- <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div> --}}
          </div>
        </div>
      </div>
    </div>

  </div>
@endsection


@section('js')

<script src="{{ asset('src/js/administrator.js') }}"></script>

<script>
const CREATE = '{{ route('register.submit') }}'

$('#create_user').click(function() {
    
    var form = $('#form_document').serialize();
    var $this = $(this);
    
    $.ajax({
      type: 'POST',
      url: CREATE,
      data: form,
      headers: {
           'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      error: function() {
      },
      success: function(data) {
         window.location.reload();
         $this.removeAttr('disabled', 'disabled').html('Save');
      },
      beforeSend: function() {
         $this.attr('disabled', 'disabled').html('Please Wait..');
      }
    });

});

</script>

@endsection