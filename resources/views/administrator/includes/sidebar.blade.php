    <!-- Sidenav -->
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
          <!-- Brand -->
          <div class="sidenav-header  align-items-center">
            <a class="navbar-brand" href="javascript:void(0)">
              <img src="https://www.creativouae.com/wp-content/uploads/2016/08/logo.png" class="navbar-brand-img" alt="...">
            </a>
          </div>
          <div class="navbar-inner">
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
              <!-- Nav items -->
              <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link {{ $active === 'dashboard' ? 'active' : '' }}" href="{{ route('admin.home') }}">
                    <i class="ni ni-align-left-2 text-primary"></i>
                    <span class="nav-link-text">Dashboard</span>
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link {{ $active === 'client' ? 'active' : '' }}" href="{{ route('admin.client') }}">
                    <i class="ni ni ni-badge text-orange"></i>
                    <span class="nav-link-text">Clients</span>
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link {{ $active === 'employee' ? 'active' : '' }}" href="{{ route('admin.employee') }}">
                    <i class="ni ni ni-user-run text-orange"></i>
                    <span class="nav-link-text">Employees</span>
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link {{ $active === 'leave_request' ? 'active' : '' }}" href="{{ route('admin.leave_request') }}">
                    <i class="ni ni-folder-17 text-orange"></i>
                    <span class="nav-link-text">Leave Request</span>
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link {{ $active === 'project' ? 'active' : '' }}" href="{{ route('admin.projects') }}">
                    <i class="ni ni-folder-17 text-orange"></i>
                    <span class="nav-link-text">Projects</span>
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link {{ $active === 'document' ? 'active' : '' }}" href="{{ route('admin.documents') }}">
                    <i class="ni ni-single-copy-04 text-orange"></i>
                    <span class="nav-link-text">Documents</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link {{ $active === 'meeting_minutes' ? 'active' : '' }}" href="{{ route('admin.documents') }}">
                      <i class="ni ni-single-copy-04 text-orange"></i>
                      <span class="nav-link-text">Meeting Minutes</span>
                    </a>
                  </li>
              </ul>
              <!-- Divider -->
              <hr class="my-3">
              <!-- Heading -->
              <h6 class="navbar-heading p-0 text-muted">
                <span class="docs-normal">Misc</span>
              </h6>
              <!-- Navigation -->
              <ul class="navbar-nav mb-md-3">
                <li class="nav-item">
                  <a class="nav-link" href="https://creativouae.com/articles-and-newsletters/" target="_blank">
                    <i class="ni ni-spaceship"></i>
                    <span class="nav-link-text">Blogs</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    
      