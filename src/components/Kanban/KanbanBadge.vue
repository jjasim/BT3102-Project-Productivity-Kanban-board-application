<template>
    <div
      class="badge"
      :class="`bg-${color}-100 text-${color}-700`"
    >
      <span class="w-2 h-2 rounded-full mr-1" :class="`bg-${color}-400`"></span>
      <span>
        <slot></slot>
      </span>
    </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: "teal"
      }
    }
  };
</script>

<style scoped>
.badge {
    display: flex; 
    padding-left: 0.75rem;
    padding-right: 0.75rem; 
    font-size: 0.75rem;
    line-height: 1rem; 
    font-weight: 600; 
    align-items: center; 
    height: 1.5rem; 
    border-radius: 9999px; 
}
</style>