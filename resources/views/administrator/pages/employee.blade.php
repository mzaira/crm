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
                      <li class="breadcrumb-item"><a href="#">{{ $title }}s</a></li>
                      {{-- <li class="breadcrumb-item active" aria-current="page">Default</li> --}}
                    </ol>
                  </nav>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="#" class="btn btn-sm btn-neutral">New Client</a>
                </div>
              </div>
              <!-- Card stats -->
              <div class="row">
              </div>
            </div>
          </div>
  
    </div>
    <!-- Page content -->
    <div class="container-fluid ">

        <div class="row">
          <div class="table-responsive">
            <!-- Projects table -->
            <table id="employee_table" class="table align-items-center table-flush">
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
    </div>



  </div>
@endsection

@section('js')
    <script src="//cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('src/js/administrator.js') }}"></script>
    
    <script>

        const CREATE_EMPLOYEE_ROUTE = '{{ route('register.submit') }}'
        const GET_EMPLOYEE_ROUTE = '{{ route('admin.api.get_employees') }}'
        const VIEW_EMPLOYEE_ROUTE = '{{ route('admin.view.employee') }}'

        const clients = {

          delete: function(employee_id) {
            console.log(employee_id)

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
          manage: function(employee_id) {
            window.location.href = `${VIEW_EMPLOYEE_ROUTE}/${employee_id}`
          }

        }

        $("#employee_table").DataTable({

          processing: true,
          serverSide: true,
          ajax: GET_EMPLOYEE_ROUTE,
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
              url: CREATE_EMPLOYEE_ROUTE,
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
