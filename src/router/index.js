import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';
import ProjectTaskPage from '@/views/ProjectTaskPage.vue';
import HomePage from '@/views/HomePage.vue';
import KanbanBoard from '@/components/Kanban/KanbanBoard.vue'


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
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/projecttaskpage',
        name: 'Project Task Page',
        component: ProjectTaskPage,
    },
    {
        path: '/kanban',
        name: 'Kanban',
        component: KanbanBoard,
    }
    

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router