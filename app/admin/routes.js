import Dashboard from './pages/dashboard';

export default [{
    children: [],
    name: 'admin.dashboard',
    path: '/',
    component: Dashboard,
    redirect: {name: 'auth.login'},
}]
