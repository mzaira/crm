require('./bootstrap')
window.Vue = require('vue')

// import VueToastr from "vue-toastr";

import client_modal from './components/Administrators/pages/ClientModalComponent.vue'

// Vue.use(VueToastr, {
//     /* OverWrite Plugin Options if you need */
// });

Vue.component('client-modal', client_modal)


const app = new Vue({
    el: '#wrapper',
});
