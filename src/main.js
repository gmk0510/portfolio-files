import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import "aos/dist/aos.css";
import vue2Swiper from 'vue2-swiper'
Vue.use(vue2Swiper)

Vue.config.productionTip = false
new Vue({
    created() {
        AOS.init();
    },
  el: '#app',
  // router,
  render: h => h(App)
})

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
