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
          <table class="table align-items-center table-flush" id="client_table">
            <thead class="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email Address</th>
                <th scope="col">Date Created</th>
                <th scope="col text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              <!-- Data Table-->
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
              <h5 class="modal-title" id="exampleModalLabel">Add Client</h5>
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
                            <option value="1" disabled="disabled">Administrator</option>
                            <option value="2" disabled="disabled">Employee</option>
                            <option value="3" selected>Client</option>
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
    <script src="//cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('src/js/administrator.js') }}"></script>
    
    <script>

        const CREATE_CLIENT_ROUTE = '{{ route('register.submit') }}'
        const GET_CLIENT_ROUTE = '{{ route('admin.api.get_clients') }}'
        const VIEW_ClIENT_ROUTE = '{{ route('admin.view.client') }}'

        const clients = {

          delete: function(client_id) {
            console.log(client_id)

            Swal.fire({
              icon: 'warning',
              title: 'Are you sure you want to delete this client?',
              showCancelButton: true,
              confirmButtonText: 'Yes',
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                  Swal.fire('Changes are not saved', '', 'info')
                }
            })
          },
          manage: function(client_id) {
            window.location.href = `${VIEW_ClIENT_ROUTE}/${client_id}`
          }

        }

        $("#client_table").DataTable({

          processing: true,
          serverSide: true,
          ajax: GET_CLIENT_ROUTE,
          headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
          },
          order: [[0, "desc"]],
          columns: [
            {
              data: "id",
              visible: false,
            },
            {
              data: "name",
            },
            {
              data: "email",
            },
            {
              data: "created_at"
            }
          ],
          columnDefs: [
            {
              render: function(id, type, row) {
                /* let manage = `<a href="javascript:;" onclick="clients.manage(${row['id']})" class="btn btn-square btn-info btn-xs type="button"  title=""> Manage </a>`
                let deletes = `<a href="javascript:;" onclick="clients.delete(${row['id']})" class="btn btn-square btn-danger btn-xs" type="button" title=""> Delete </a> `
                return  manage +' '+ deletes */
                let action = `<div class="dropdown">
                    <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="btn btn-sm btn-icon-only text-light"><i class="fas fa-ellipsis-v"></i></a> 
                    <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                      <a href="javascript:;" onclick="clients.manage(${row['id']})" class="dropdown-item">Edit</a>
                      <a href="javascript:;" onclick="clients.delete(${row['id']})" class="dropdown-item">Delete</a> 
                    </div>
                  </div>`
                return action
              },
              targets: 4,
            },
          ],
        });

        $('#create_user').click(function() {
            
            var form = $('#form_document').serialize();
            var $this = $(this);
            
            $.ajax({
              type: 'POST',
              url: CREATE_CLIENT_ROUTE,
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
