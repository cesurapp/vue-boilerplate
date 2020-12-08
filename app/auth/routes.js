import Index from './pages/index';
import Login from './pages/login.vue';
import Register from './pages/register.vue';
import Forgot from './pages/forgot.vue';
import Resetting from './pages/resetting.vue';
import Logout from './pages/logout.vue';

export default [{
    children: [
        {
            name: 'auth.login',
            path: 'login',
            component: Login,
            meta: {requireAuth: false}
        },
        {
            name: 'auth.register',
            path: 'register',
            component: Register,
            meta: {requireAuth: false}
        },
        {
            name: 'auth.forgot',
            path: 'forgot',
            component: Forgot,
            meta: {requireAuth: false}
        },
        {
            name: 'auth.resetting',
            path: 'resetting',
            component: Resetting,
            meta: {requireAuth: false}
        },
        {
            name: 'auth.logout',
            path: 'logout',
            component: Logout,
            meta: {requireAuth: true}
        }
    ],
    name: 'auth',
    path: '/auth',
    component: Index,
    redirect: {name: 'auth.login'},
}]
