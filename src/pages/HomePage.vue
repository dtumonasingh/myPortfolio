<template>
  <div class="portfolio">
    <div class="portfolio__intro">
      <p class="portfolio__salutation">{{ SalutationText }}</p>
      <p class="portfolio__description">{{ Description }}</p>

      <a href="@/assets/MonaSinghResume.pdf`" download="download">
        <button class="porfolio__download-resume">{{ downloadButton }}</button>
      </a>
    </div>

    <div class="portfolio__display-picture">
      <img class="portfolio__image" src="@/assets/dp.png" />
    </div>
  </div>

  <div class="featured-blogs">
    <div class="featured-blogs__header">
      <p class="featured-blogs__recent-posts">Recent blogs</p>
      <a
        class="featured-blogs__view-all"
        target="_blank"
        href="https://blog.singhmona.in/"
      >
        View all
      </a>
    </div>
    <div v-for="blog in blogs" :key="blog.title" class="featured-blogs__list">
      <blogpage-item :blog="blog"> </blogpage-item>
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

import axios from 'axios';

import { mapActions } from 'vuex';

export default {
  components: {
    'blogpage-item': BlogPageItem,
    'workpage-item': WorkPageItem,
  },
  mounted() {
    this.getBlogs();
    const graphqlQuery = {
      query: `{
        user(username: "singhmona") {
        publication {
        posts(page: 0) {
          title
          brief
          slug
          dateAdded
          }
        }
      }
    },`,
      variables: { page: 0 },
    };

    axios
      .post('https://api.hashnode.com/', graphqlQuery, {
        'content-type': 'application/json',
      })
      .then((response) => {
        this.blogs = response.data.data.user.publication.posts;
        console.log(this.blogs);
      });
  },
  methods: {
    ...mapActions(['getBlogs']),
  },
  data() {
    return {
      SalutationText: `Hi, I am Mona, Frontend Developer`,
      Description: `I like to develop brilliant UI designs using VueJS`,
      downloadButton: `Download Resume`,
      blogs: {},
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/pages/_home-page.scss';
</style>
