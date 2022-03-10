import Vue from "vue"
import App from "./App.vue"
import * as icons from './index.js'
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

// const iconNames = []

// if (typeof Vue !== 'undefined') {
//   for (const name in icons) {
//       Vue.prototype[name] = icons[name]
//     // Vue.component(name, icons[name])
//     iconNames.push(name)
//   }
// }

Vue.use(Message)
Vue.prototype.ICONS = icons
console.log(icons)

new Vue({
  render: h => h(App)
}).$mount("#app");
