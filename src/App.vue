<template>
  <LoginPage/>
</template>

<script>
import LoginPage from './views/LoginPage.vue';

export default {
  name: 'App',
  components:{
    LoginPage
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