require('./bootstrap')
window.Vue = require('vue')

import VueToastr from "vue-toastr";
import $ from 'jquery'

import client_modal from './components/administrator/pages/ClientModalComponent.vue'
import client_list from './components/administrator/pages/ClientListComponent.vue'
import client_navigator from './components/administrator/pages/ClientNavigatorComponent.vue'

// Vue.use(VueToastr, {
//     /* OverWrite Plugin Options if you need */
// });

Vue.component('client-modal', client_modal)
Vue.component('client-list', client_list)
Vue.component('client-navigator', client_navigator)

const app = new Vue({
    el: '#wrapper',
});
