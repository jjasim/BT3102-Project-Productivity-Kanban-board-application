<template>
  <div id="kanban">
    <ul>
        <li class="userList" v-for="user in users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            users : [
            {
        id: 1,
        name: "Adrian Schubert",
        avatar: "https://pickaface.net/gallery/avatar/unr_sample_161118_2054_ynlrg.png"
      },
      {
        id: 2,
        name: "Violet Gates",
        avatar: "https://pickaface.net/gallery/avatar/freud51c8b3f65e7dc.png"
      },
      {
        id: 3,
        name: "Steve Jobs",
        avatar: "https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png"
      },
      {
        id: 4,
        name: "Yassine Smith",
        avatar: "https://pickaface.net/gallery/avatar/unr_yassine_191124_2012_3gngr.png"
      },
      {
        id: 5,
        name: "Senior Saez",
        avatar: "https://pickaface.net/gallery/avatar/elmedinilla541c03412955c.png"
      }
            ]
        }
    }
}
</script>

<style>
#kanban {
    display: flex; 
    background-color: #E5E7EB; 
    align-items: center; 
    width: 100vw; 
}

.userList {
    display: flex; 
    padding: 1rem; 
    margin-bottom: 0.75rem; 
    background-color: #ffffff; 
    justify-content: space-between; 
    align-items: center; 
    border-radius: 0.5rem; 
    cursor: move; 
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
}
</style>