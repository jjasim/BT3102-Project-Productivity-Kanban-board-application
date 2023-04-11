<template>
    <h1>Test</h1>
    <div class="disqus">
        <Disqus shortname="workwise-1" />
    </div>
   
</template>

<script>
import UsersInProject from '../components/UsersInProject/UsersInProject.vue'
import { Disqus } from 'vue-disqus'


export default {
    components: {
        UsersInProject,
        Disqus
    },
}

</script>


<style scoped>
.disqus {
    width: 20%;
    float: right;
}
</style>
