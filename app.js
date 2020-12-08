import Vue from 'vue'
import Router from './Core/Router'

/**
 * ============
 * Bootstrap Vue
 * ============
 */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

/**
 * ============
 * Vuex Store
 * ============
 */
import Store from './Core/Store'
Store.dispatch('setHeadDefault', {
    title: {
        text        : 'Tedaş Bakım Takip',
        pattern     : '%T - Tedaş Bakım Takip'
    },
    meta: [
        {name:"description", content:"açuklama asdasda"},
        {name:"description2", content:"açuklama asdasda"}
    ]
})

/**
 * ============
 * Axios HTTP
 * ============
 */
import Axios from './Core/Http';
Vue.use(Axios, {Store, Router})

/**
 * ============
 * Core Mixins
 * ============
 */
import Global from './Core/Mixins/Global'
Vue.use(Global)

/**
 * ============
 * Core Components
 * ============
 */
import Alert from './Core/Components/Messages/Alert.vue'
import Notification from './Core/Components/Messages/Notification.vue'
import Progress from './Core/Components/Progress'
Vue.component('Alert', Alert)
Vue.component('Notification', Notification)
Vue.use(Progress, {
    transition: {
        speed: '0.3s',
        opacity: '0.2s'
    },
    thickness: '2px'
})

/**
 * ============
 * Init
 * ============
 */
import App from './app.vue';
new Vue({
    ...App,
    router: Router,
    store: Store,
}).$mount('#app');
