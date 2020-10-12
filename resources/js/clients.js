require('./bootstrap')
window.Vue = require('vue')

import login from './components/client/pages/LoginComponent.vue'

Vue.component('login', login)
