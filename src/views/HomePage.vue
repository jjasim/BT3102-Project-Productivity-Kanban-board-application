<template>
  <h1 v-if="user">hi {{ user }}</h1>
</template>

<script>
import { getAuth, onAuthStateChanged } from '@firebase/auth';

export default {
  data() {
    return {
      user : false, 
    }
  },
  
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user; 
      }
    })
  }
}
</script>

<style>

</style>