import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import vuetify from '@/plugins/vuetify' // path to vuetify export
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"

import { library } from '@fortawesome/fontawesome-svg-core' // import the fontawesome core
import { fas } from '@fortawesome/free-solid-svg-icons' // import specific icons
import { fab } from '@fortawesome/free-brands-svg-icons' // import specific icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // import font awesome icon component

library.add(fab, fas) // add icons to the library
Vue.component('font-awesome-icon', FontAwesomeIcon) // add font awesome icon component

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  Vuetify,
  FontAwesomeIcon,
  render: h => h(App),
}).$mount('#app')
