<template>
  <div class="portfolio">
    <div class="portfolio__intro">
      <p class="portfolio__salutation">{{ SalutationText }}</p>
      <p class="portfolio__description">{{ Description }}</p>

      <button class="porfolio__download-resume">{{ downloadButton }}</button>
    </div>

    <div class="portfolio__display-picture">
      <img class="portfolio__image" src="@/assets/dp.png" />
    </div>
  </div>

  <div class="featured-blogs">
    <div class="featured-blogs__header">
      <p class="featured-blogs__recent-posts">Recent posts</p>
      <a class="featured-blogs__view-all" target="_blank" href="https://blog.singhmona.in/"> View all </a>
    </div>
    <div class="featured-blogs__list">
        <blogpage-item> </blogpage-item>
        <blogpage-item> </blogpage-item>
    </div>
  </div>

  <div class="featured-works">
    <p class="featured-works__header">Featured Works</p>
    <div class="featured-works__list">
      <workpage-item> </workpage-item>
      <div class="separator"></div>
      <workpage-item> </workpage-item>
      <div class="separator"></div>
      <workpage-item> </workpage-item>
      <div class="separator"></div>
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

<style lang="scss" scoped>
@import '../styles/pages/_home-page.scss';
</style>
