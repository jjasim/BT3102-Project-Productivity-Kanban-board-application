<template>
    <div class="header">
      <div class="project-name">Project 1</div>
      <div class="buttons">
        <button @click="goToTasks">Tasks</button>
        <button @click="goToCalendar">Calendar</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Header",
    methods: {
        goToCalendar() {
            this.$router.push("/calendar")
        },
        goToTasks() {
            this.$router.push("/tasks")
        }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
  * {
    font-family: 'Josefin Sans', sans-serif;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 5px 20px;
  }
  .project-name {
    font-size: 35px;
    font-weight: bold;
  }
  .buttons {
    display: flex;
    gap: 10px;
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    background: #5E72EB;
    color: white;
    border: none;
    border-radius: 49px;
    cursor: pointer;
  }
.btn:hover {
    cursor: pointer;
}
  </style>
  