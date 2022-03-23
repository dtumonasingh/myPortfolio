<template>
  <main>
    <mp-navbar> </mp-navbar>
    <mp-body> </mp-body>
    <footer-component> </footer-component>
  </main>
</template>

<script>
import NavBar from './NavBar.vue';
import Body from './Body.vue';
import Footer from './Footer.vue';
export default {
  components: {
    'mp-navbar': NavBar,
    'mp-body': Body,
    'footer-component': Footer,
  },
};
</script>

