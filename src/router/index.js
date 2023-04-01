import { createRouter, createWebHistory } from "vue-router";
import LandingPage from '@/views/LandingPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import ProjectTaskPage from '@/views/ProjectTaskPage.vue';
import KanbanBoard from '@/components/Kanban/KanbanBoard.vue'
import CalendarPage from '@/views/CalendarPage.vue';

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
        path: '/tasks',
        name: 'Project Task Page',
        component: ProjectTaskPage,
    },
    {
        path: '/calendar',
        name: 'Calendar Page',
        component: CalendarPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router