import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'animate.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faDev, faStackOverflow, faInstagram, faCodepen, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import miniToastr from 'mini-toastr'

miniToastr.init()

for (var a of [faUserSecret, faEnvelope, faLinkedin, faGithub, faDev, faStackOverflow,
  faInstagram, faCodepen, faTwitter]) {
  library.add(a)
}

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
