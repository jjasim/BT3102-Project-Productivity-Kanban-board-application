<template>
  <RouterView />
</template>

<script>
import LandingPage from './views/LandingPage.vue';
import LoginPage from './views/LoginPage.vue';
import SignupPage from './views/SignupPage.vue';
import ProjectTaskPage from './views/ProjectTaskPage.vue';
import { RouterView } from 'vue-router';
import SideBar from './views/SideBar.vue';
import Addproj from './components/Addproj.vue';

export default {
  name: 'App',
  components:{
    LandingPage,
    LoginPage,
    SignupPage,
    ProjectTaskPage,
    SideBar,
    Addproj
  },
  data(){
    return {
      refreshComp: 0
    }
  },
  methods: {
    change(){
      this.refreshComp += 1
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
</style>