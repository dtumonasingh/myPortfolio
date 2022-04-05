<template>
  <main>
    <the-navbar> </the-navbar>
      <router-view></router-view>
    <the-footer> </the-footer>
  </main>
</template>

<script>
import TheNavBar from '@/components/layout/TheNavBar.vue';
import TheFooter from '@/components/layout/TheFooter.vue';

export default {
  components: { 
    'the-navbar': TheNavBar,
    'the-footer': TheFooter
   },
};
</script>

