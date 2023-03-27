import { createRouter, createWebHistory } from "vue-router";
import LandingPage from '@/views/LandingPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import ProjectTaskPage from '@/views/ProjectTaskPage.vue';
import HomePage from '@/views/HomePage.vue';
import KanbanBoard from '@/components/Kanban/KanbanBoard.vue'
import Calendar from '@/views/Calendar.vue';

const routes = [
    {
        path: '/',
        name: 'Landing Page',
        component: LandingPage
    },
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
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/tasks',
        name: 'Project Task Page',
        component: ProjectTaskPage,
    },
    {
        path: '/calendar',
        name: 'Calendar Page',
        component: Calendar,
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router