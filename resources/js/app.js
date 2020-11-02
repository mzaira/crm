require('./bootstrap')
window.Vue = require('vue')
// const
window.BASE_URL = process.env.BASE_URL

import client from './clients.js'

const app = new Vue({
    el: '#wrapper',
});