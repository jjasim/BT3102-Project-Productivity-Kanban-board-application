<template>
  <RouterView />
</template>

<script>
import LoginPage from './views/LoginPage.vue';
import SignupPage from './views/SignupPage.vue';
import ProjectTaskPage from './views/ProjectTaskPage.vue';
import { RouterView } from 'vue-router';
import SideBar from './views/SideBar.vue';

export default {
  name: 'App',
  components:{
    LoginPage,
    SignupPage,
    ProjectTaskPage,
    SideBar
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

</style>