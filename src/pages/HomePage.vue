<template>
  <div class="mp-body">
    <div class="mp-intro">
      <p id="main-text">{{ SalutationText }}</p>
      <p id="description">{{ Description }}</p>

      <button id="download-resume-button">{{ downloadButton }}</button>
    </div>

    <div class="mp-profile">
      <img id="profile-photo" src="@/assets/dp.png" />
      <!-- <img src="assets/Ellipse2.png" /> -->
    </div>
  </div>
    <div id="posts-header">
    <p>Recent posts</p>
    <a>view all</a>
    </div>
    <div id="posts">
      <blogpage-item> </blogpage-item>
      <blogpage-item></blogpage-item>
    </div>

  <div class="featured-works">
    <p id="feature-works-header">Featured Works</p>
    <div class="work-list">
      <workpage-item> </workpage-item>
      <hr />
      <workpage-item> </workpage-item>
      <hr />
      <workpage-item> </workpage-item>
    </div>
  </div>
</template>

<script>
import BlogPageItem from '@/components/BlogPageItem.vue';
import WorkPageItem from '@/components/WorkPageItem.vue';

export default {
  components: {
    'blogpage-item': BlogPageItem,
    'workpage-item': WorkPageItem,
  },
  data() {
    return {
      SalutationText: `Hi, I am Mona, Frontend Developer`,
      Description: `I like to develop brilliant UI designs using VueJS`,
      downloadButton: `Download Resume`,
    };
  },
};
</script>

<style lang="css" scoped>
@import '../styles/pages/_home-page.css';
</style>
