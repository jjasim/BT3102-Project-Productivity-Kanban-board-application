<template>
  <div class="All-Projects-Container" v-if="user">
    <div class="sidebar">
        <SideBar />
    </div>
    <div class="Wrapper">
      <div class="Header">
        <ProjectHeader />
      </div>
      <div class="projects-display">
        <AllProjectsDisplay />
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import SideBar from './SideBar.vue'
import AllProjectsDisplay from '../components/Projects/AllProjectsDisplay.vue'
import ProjectHeader from '../components/Projects/ProjectHeader.vue'
import { CCard, CCardHeader, CCardSubtitle, CCardText, CCardTitle } from '@coreui/vue'; 


export default {
  name: "AllProjectsPage",
  data() {
    return {
      user : false 
    }
  },
  mounted() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user
      } else {
        this.$router.push('/login')
      }
    })
  },
  components: {
        SideBar, AllProjectsDisplay, ProjectHeader
    }

}
</script>

<style scoped>
.All-Projects-Container {
  display: flex;
  flex-direction: row;
  z-index: 0;
}
.sidebar {
  max-width: 17%;
  flex: 1;
  z-index: 1;
}
.Wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: calc(100%-17%);
  overflow: hidden;
}

.Header {
  height: 7%;
}
.project-displays {
  flex: 1;
  overflow-x: scroll;
}

</style>