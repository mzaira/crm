<template>
        <div class="container-fluid">
            <div class="header-body">
              <div class="row align-items-center py-4">
                <div class="col-lg-6 col-7">
                  <h6 class="h2 text-white d-inline-block mb-0">Manage {{ title }}</h6>
                  <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
                    <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                      <li class="breadcrumb-item"><a href="#"><i class="fas fa-home"></i></a></li>
                      <li class="breadcrumb-item"><a href="#">{{ title }}</a></li>
                    </ol>
                  </nav>
                </div>
                <div class="col-lg-6 col-5 text-right">
                  <a href="javascript:;" @click.prevent="show_modal=true" class="btn btn-sm btn-neutral">New Client</a>
                </div>
              </div>
              <!-- Card stats -->
              <div class="row">
              </div>
            </div>
              <client-modal> </client-modal>
          </div>
</template>

<script>

export default {
        data() {
            return {
              show_modal: false,
            };
        },
        props: ['title'],
        methods: {
            // show_modal() {
            // },
        },
        created: function() {
            console.log('realoaded')
        },
        mounted: function() {
        }
}
</script>

<style>

</style>