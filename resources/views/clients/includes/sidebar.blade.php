    <!-- Sidenav -->
    <nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
        <div class="scrollbar-inner">
          <!-- Brand -->
          <div class="sidenav-header align-items-center">
            <a class="navbar-brand" href="javascript:void(0)">
              <img src="/logo-creativo-normal.png" class="navbar-brand-img" alt="...">
            </a>
          </div>
          <div class="navbar-inner">
            <!-- Collapse -->
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
              <!-- Nav items -->
              <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link {{ $active === 'dashboard' ? 'active' : '' }}" href="{{ route('client.index') }}">
                    <i class="ni ni-align-left-2 text-primary"></i>
                    <span class="nav-link-text">Dashboard</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link {{ $active === 'presentations' ? 'active' : '' }}" href="{{ route('client.presentation') }}">
                      <i class="ni ni-single-copy-04 text-orange"></i>
                      <span class="nav-link-text">My Presentations</span>
                    </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link {{ $active === 'meeting_minutes' ? 'active' : '' }}" href="{{ route('client.meeting_minutes') }}">
                      <i class="ni ni-single-copy-04 text-orange"></i>
                      <span class="nav-link-text">My Metting Minutes</span>
                    </a>
                </li>
                <li class="nav-item">
                <a class="nav-link {{ $active === 'documents' ? 'active' : '' }}" href="{{ route('client.documents') }}">
                    <i class="ni ni-single-copy-04 text-orange"></i>
                    <span class="nav-link-text">My Documents</span>
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
                <li class="nav-item">
                   <a class="nav-link" href="{{ route('home.logout') }}" target="_blank">
                    <i class="ni ni-button-power"></i>
                    <span class="nav-link-text">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    
      