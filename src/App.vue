<template>
  <RouterView />
</template>

<script>
import LoginPage from './views/LoginPage.vue';
import SignupPage from './views/SignupPage.vue';
import { RouterView } from 'vue-router';
export default {
  name: 'App',
  components:{
    LoginPage,
    SignupPage
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