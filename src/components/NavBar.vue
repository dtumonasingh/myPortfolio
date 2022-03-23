<template>
  <ul>
    <li>{{ works }}</li>
    <li>{{ blog }}</li>
    <li>{{ contact }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      works: 'Works',
      blog: 'Blog',
      contact: 'Contact',
    };
  },
};
</script>

<style lang="css" scoped>
@import '../styles/_nav-bar.css';
</style>
