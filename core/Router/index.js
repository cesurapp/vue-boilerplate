/**
 * ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */
import Vue from 'vue'
import Router from 'vue-router';
import BeforeEach from './BeforeEach'
import {Routes} from '../../app/index'

Vue.use(Router);

// Router
const router = new Router({
  mode: 'history',
  routes: Routes,
});

// Router Before Each
router.beforeEach(BeforeEach)

// Export
export default router
