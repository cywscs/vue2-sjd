import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Detect from '../components/Detect.vue'
import DataShow from "../components/DataShow";
import welcome from "@/components/Welcome";


Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: Home,
            // redirect: '/welcome',
            children: [
                { path: '/', component: welcome },
                {path: '/detect', component: Detect},
                {
                    path: '/dataShow',
                    component: DataShow
                },

            ]
        }
    ]
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login')
        return next();
    // const tokenStr = window.sessionStorage.getItem('token');
    // if (!tokenStr)
    //   return next('/login');
    next();
})


export default router
