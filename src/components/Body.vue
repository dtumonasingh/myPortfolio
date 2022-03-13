<template>
  <div class="mp-body">
    <div class="mp-intro">
      <p class="main-text">{{ SalutationText }}</p>
      <p>{{ Description }}</p>

      <button>{{ downloadButton }}</button>
    </div>

    <div class="mp-profile">
      <img src="../assets/dp.png" />
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

<style scoped>
.mp-body {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 80%;
  padding-bottom: 50px;
  padding-top: 50px;
}

.featured-works {
  margin: 0 auto;
  width: 80%;
}

.mp-intro {
  width: 506px;
}
img {
  height: 243px;
  width: 243px;
}
button {
  height: 47px;
  width: 208px;
  background-color: #ff6464;
  border: none;
  border-radius: 2px;

  color: white;
}
.main-text {
  font-weight: bold;
  font-size: 44px;
}
</style>
