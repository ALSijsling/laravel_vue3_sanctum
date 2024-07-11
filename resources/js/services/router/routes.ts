import Home from '../../domains/auth/pages/Overview.vue'
import Login from '../../domains/auth/pages/Login.vue'
import Dashboard from '../../domains/auth/pages/Dashboard.vue'

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/login', name: 'login', component: Login},
    {path: '/me', name: 'dashboard', component: Dashboard}
];

export default routes;