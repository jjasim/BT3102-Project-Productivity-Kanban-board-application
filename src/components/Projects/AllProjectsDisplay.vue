<template>
    <div class="project-board">
        <div class="boards">
            <ul class="list-cards">
                <li class="cards" v-for="project in projects" :key="project.id" @click="gotoProject(project)">
                    <a class="card">
                        {{ project.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import { getProjects } from './projects.js';
export default {
    name: 'AllProjectsDisplay',
    components: {},
    data() {
        return {
            projects: getProjects(),
            selectedProject: null
        }
    },
    methods: {
        gotoProject(project) {
            console.log(project.projID, project.name)
            this.$router.push({
                name: "Project Task Page",
                params: {
                    projID: project.projID,
                    projName: project.name
                }

            })
        }
    }
}
</script>

<style scoped>
* {
  font-family: 'Josefin Sans', sans-serif;
}
.project-board {
    display: flex; 
    width: 80vw; 
    min-height: 100vh; 
    padding-left: 1rem;
}

.boards {
    max-width: 64rem; 
}

.list-cards {
    display: grid; 
    grid-template-columns: repeat(5, minmax(0, 1fr)); 
    gap: 4rem; 
}

.cards {
    background-color: #2563EB; 
    border-radius: 0.375rem; 
    width: 200px;
    height: 100px;
}

li:hover {
    background-color: #1D4ED8; 
    cursor: pointer;
}

.card {
    color: #ffffff; 
    font-size: 1.125rem;
    line-height: 1.75rem; 
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 34px;

}

ul {
    list-style-type: none;
}
</style>
