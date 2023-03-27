<template>
  <div :class="`badge bg-${color}-100 text-${color}-700`">
    <span class="badge-icon" :style="`background-color: ${color === 'red' ? '#fc8181' : '#48bb78'};`"></span>
    <span class="badge-text">
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
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  border-radius: 0.375rem;
}



.bg-red-100 {
  background-color: #f0655b;
}

.bg-green-100 {
  background-color: #d5dfbe;
}

.bg-teal-100 {
  background-color: #4ccac3;
}

.bg-blue-100 {
  background-color: #6e75f0;
}

.bg-purple-100 {
  background-color: #a075d7;
}


/* Add more color classes as needed */
</style>