import {createRouter, createWebHashHistory} from 'vue-router';
import Login from "../view/Login";
import Home from "../view/Home";
import Index from "../view/Index";

const routes = [
    {
        path: '/',
        component: Login,
    },
    {
        path: '/home',
        component: Home,
        redirect: '/index',
        children: [
            {
                path: '/index',
                name: 'index',
                component: Index,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(), routes
})

export default router;