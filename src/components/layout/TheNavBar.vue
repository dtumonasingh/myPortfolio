<template>
  <div>
    <router-link to="/work"> {{ work }} </router-link>
    <router-link to="/blog"> {{ blog }} </router-link>
    <router-link to="/contact"> {{ contact }} </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      work: 'Work',
      blog: 'Blog',
      contact: 'Contact',
    };
  },
};
</script>

<style lang="css" scoped>
@import '../../styles/components/layout/_the-navbar.css';
</style>
