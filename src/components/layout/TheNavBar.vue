<template>
  <div class="navbar">
    <div class="navbar__container">
      <router-link class="navbar__item" to="/"> {{ home }} </router-link>
      <router-link class="navbar__item" to="/work"> {{ work }} </router-link>
      <a class="navbar__item" target="_blank" href="https://blog.singhmona.in/"> {{ blog }} </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home:'Home',
      work: 'Work',
      blog: 'Blog',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/components/layout/_the-navbar.scss';
</style>
