import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import ProjectTaskPage from '@/views/ProjectTaskPage.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    }, 
    {
        path: '/signup',
        name: 'Sign Up',
        component: SignupPage
    },
    {
        path: '/projecttaskpage',
        name: 'Project Task Page',
        component: ProjectTaskPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router