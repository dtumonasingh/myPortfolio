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
    <div class="featured-blogs__list">
      <blogpage-item :blog="firstBlog"> </blogpage-item>
       <blogpage-item :blog="secondBlog"> </blogpage-item>
    </div>
  </div>

  <div class="featured-works">
    <p class="featured-works__header">Featured Works</p>
    <div class="featured-works__list">
      <workpage-item :title="title1" :year="year1" :tagName="tagName1" :content="content1" :imageSource="imageSource1" :workLink="workLink1"> </workpage-item>
      <div class="separator"></div>
      <workpage-item :title="title2" :year="year2" :tagName="tagName2" :content="content2" :imageSource="imageSource2" :workLink="workLink2"> </workpage-item>
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
        this.firstBlog = response.data.data.user.publication.posts[0];
        this.secondBlog = response.data.data.user.publication.posts[1];
        console.log(this.blogs);
      });
  },
  methods: {
    ...mapActions(['getBlogs']),
  },
  data() {
    return {
      title1:'Hightlight',
      tagName1:'Vuejs Javascript',
      year1: '2022',
      content1: 'A small CRUD app for Blogs where you can also highlight the words and later view the highlighted words in a different section. The technology used is VueJS.',
      imageSource1: 'image1',
      workLink1: "https://sensehawk-assignment.singhmona.in/blogs",
      title2:'SideBar',
      tagName2:'Vuejs CSS Javascript',
      year2: '2022',
      content2: 'A sidebar which has two states, one is collapsed state where only icons are visible, the other is expanded state, where we can see the name of the option present too. The technology used is vanilla javascript and CSS',
      imageSource2: 'sidebar',
      workLink2:"https://sidebar.onrender.com/",
      SalutationText: `Hi, I am Mona, Frontend Developer`,
      Description: `I like to develop brilliant UI designs using VueJS`,
      downloadButton: `Download Resume`,
      firstBlog: {},
      secondBlog: {}
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/pages/_home-page.scss';
</style>
