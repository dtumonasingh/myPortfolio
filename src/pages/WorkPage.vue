<template>
  <div class="work-page">
    <heading class="work-page__title">Work</heading>
    <div class="featured-works__list">
    <div v-for="work in works" :key="work.id">
      <workpage-item
        :title="work.title"
        :year="work.year"
        :tagName="work.tagName"
        :content="work.content"
        :imageSource="work.imageSource"
        :workLink="work.workLink"
      >
      </workpage-item>
      <div class="separator"></div>
    </div>
      
    </div>
  </div>
</template>
<script>
import WorkPageItem from '@/components/WorkPageItem.vue';
import workJson from '../assets/work.json'

export default {
  components: {
    'workpage-item': WorkPageItem,
  },
  data() {
    return {
      works: workJson.data,
      title1: 'Hightlight',
      tagName1: 'Vuejs',
      year1: '2022',
      content1:
        'A small CRUD app for Blogs where you can also highlight the words and later view the highlighted words in a different section. The technology used is VueJS.',
      imageSource1: 'image1',
      workLink1: 'https://sensehawk-assignment.singhmona.in/blogs',
      title2: 'SideBar',
      tagName2: 'Vuejs CSS',
      year2: '2022',
      content2:
        'A sidebar which has two states, one is collapsed state where only icons are visible, the other is expanded state, where we can see the name of the option present too. The technology used is vanilla javascript and CSS',
      imageSource2: 'sidebar',
      workLink2: 'https://sidebar.onrender.com/',
    };
  },
  mounted() {
    console.log(this.works)
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/pages/_work-page.scss';
</style>
