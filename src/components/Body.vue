<template>
  <div class="mp-body">
    <div class="mp-intro">
      <p class="main-text">{{ SalutationText }}</p>
      <p>{{ Description }}</p>

      <button>{{ downloadButton }}</button>
    </div>

    <div class="mp-profile">
      <img id="profile-photo" src="../assets/dp.png" />
      <!-- <img src="assets/Ellipse2.png" /> -->
    </div>
  </div>
  <post-container>
    <post-component> </post-component>
    <post-component></post-component>
  </post-container>

  <div class="featured-works">
    <p>Featured Works</p>
    <div class="work-list">
      <work-card> </work-card>

      <work-card> </work-card>

      <work-card> </work-card>
    </div>
  </div>
</template>

<script>
import PostContainer from './PostContainer.vue';
import Post from './Post.vue';
import WorkCard from './WorkCard.vue';

export default {
  components: {
    PostContainer,
    'post-component': Post,
    'work-card': WorkCard,
  },
  data() {
    return {
      SalutationText: `Hi, I am John, Creative Technologist`,
      Description: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`,
      downloadButton: `Download Resume`,
    };
  },
};
</script>

<style lang="css" scoped>
@import '../styles/_body.css';
</style>
