<template>
    <div class="card">
      <div class="card-contents">
        <p 
        class="">
        {{task.title}}
        </p>
      </div>
      <div class="card-bottom">
        <span class="card-date">{{task.date}}</span>
        <kanban-badge v-if="task.type" :color="badgeColor">{{task.type}}</kanban-badge>
      </div>
    </div>
  </template>

<script>
import KanbanBadge from "./KanbanBadge.vue";

export default {
  components: {
    KanbanBadge
  },
  props: {
    task: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    badgeColor() {
      const mappings = {
        Design: "purple",
        "Feature Request": "teal",
        Backend: "blue",
        QA: "green",
        default: "teal"
      };
      return mappings[this.task.type] || mappings.default;
    }
  }
};
</script>

<style scoped>
.card {
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    padding-top: 0.75rem; 
    padding-bottom: 1.25rem; 
    background-color: #ffffff; 
    border-radius: 0.25rem; 
    border-width: 1px; 
    border-color: #ffffff; 
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); 
}

.card-contents {
    display: flex; 
    justify-content: space-between; 
}

.card-text {
    color: #374151; 
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
    font-weight: 600; 
    letter-spacing: 0.025em; 
}

.card-bottom {
    display: flex; 
    margin-top: 1rem; 
    justify-content: space-between; 
    align-items: center; 
}

.card-date {
    color: #4B5563; 
    font-size: 0.875rem;
    line-height: 1.25rem; 
}

</style>