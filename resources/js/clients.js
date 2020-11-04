require('./bootstrap')
window.Vue = require('vue')

import VueToastr from "vue-toastr";

import login from './components/client/pages/LoginComponent.vue'
import register from './components/client/pages/RegisterComponent.vue'


Vue.use(VueToastr, {
});

Vue.component('login', login)
Vue.component('register', register)

