<template>
  <RouterView v-if="!mobile"/>
  <div v-else class="mobile-message flex flex-column">
    <mobile-device></mobile-device>
  </div>
</template>

<script>
import LandingPage from './views/LandingPage.vue';
import LoginPage from './views/LoginPage.vue';
import SignupPage from './views/SignupPage.vue';
import HomePage from './views/HomePage.vue';
import ProjectTaskPage from './views/ProjectTaskPage.vue';
import { RouterView } from 'vue-router';
import SideBar from './views/SideBar.vue';
import Modal from './components/Modal.vue';
import MobileDevice from './views/MobileDevice.vue';
import SignUpDetails from "./views/SignUpDetails.vue"
import AllProjectsPage from './views/AllProjectsPage.vue'
import AnalyticsPage from './views/AnalyticsPage.vue';

export default {
  name: 'App',
  components:{
    LandingPage,
    LoginPage,
    SignupPage,
    HomePage,
    ProjectTaskPage,
    SideBar,
    Modal,
    MobileDevice,
    SignUpDetails,
    AllProjectsPage,
    AnalyticsPage
  },
  data(){
    return {
      refreshComp: 0,
      mobile: null
    }
  },
  created() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  methods: {
    change(){
      this.refreshComp += 1
    },
    checkScreenSize() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 750) {
        this.mobile = true;
        return; 
      }
      this.mobile = false;
    }
  }
}
</script>

<style>
.error {
    font-family: 'Josefin Sans', sans-serif;
    font-size: small;
    text-align: center;
    font-size: 12px;
    color: red;
    padding-bottom: 0.5rem;
}

input {
  text-indent: 8px;
}
</style>