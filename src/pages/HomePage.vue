<template>
  <div class="portfolio">
    <div class="portfolio__intro">
      <p class="portfolio__salutation">{{ SalutationText }}</p>
      <p class="portfolio__description">{{ Description }}</p>

      <!-- <a href="@/assets/MonaSinghResume.pdf`" download="download">
        <button class="porfolio__download-resume">{{ downloadButton }}</button>
      </a> -->
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
      <workpage-item
        :title="work1.title"
        :year="work1.year"
        :tagName="work1.tagName"
        :content="work1.content"
        :imageSource="work1.imageSource"
        :workLink="work1.workLink"
      >
      </workpage-item>
      <div class="separator"></div>
      <workpage-item
        :title="work2.title"
        :year="work2.year"
        :tagName="work2.tagName"
        :content="work2.content"
        :imageSource="work2.imageSource"
        :workLink="work2.workLink"
      >
      </workpage-item>
      <div class="separator"></div>
    </div>
  </div>
</template>

<script>
import BlogPageItem from '@/components/BlogPageItem.vue';
import WorkPageItem from '@/components/WorkPageItem.vue';
import workJson from '../assets/work.json';

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
      work1: {
        title: workJson.data[0].title,
        tagName: workJson.data[0].tagName,
        year: workJson.data[0].year,
        content: workJson.data[0].content,
        imageSource: workJson.data[0].imageSource,
        workLink: workJson.data[0].workLink,
      },
      work2: {
        title: workJson.data[1].title,
        tagName: workJson.data[1].tagName,
        year: workJson.data[1].year,
        content: workJson.data[1].content,
        workLink: workJson.data[1].workLink,
      },
      SalutationText: `Hi, I am Mona, Frontend Developer`,
      Description: `I like to develop brilliant UI designs using VueJS`,
      downloadButton: `Download Resume`,
      firstBlog: {},
      secondBlog: {},
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/pages/_home-page.scss';
</style>
