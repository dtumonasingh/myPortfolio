<template>
  <div class="navbar">
    <div class="navbar__container">
      <router-link class="navbar__item" to="/work"> {{ work }} </router-link>
      <router-link class="navbar__item" to="/blog"> {{ blog }} </router-link>
      <router-link class="navbar__item" to="/contact">
        {{ contact }}
      </router-link>
    </div>
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

<style lang="scss" scoped>
@import '../../styles/components/layout/_the-navbar.scss';
</style>
