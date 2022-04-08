<template>
  <div class="blog">

      <div class="blog__title">
        <p>{{ blog.title }}</p>
      </div>

      <div class="blog__meta-data">

        <p class="blog__date">{{ date }}</p>
        <p class="blog__divider">|</p>

        <div class="blog__tags">
          <p class="blog__tag-name" v-for="item in tags" :key="item">
            {{ item }}
          </p>
        </div>

      </div>

      <div class="blog__content">
        <p>
          {{ blog.brief }}
        </p>
      </div>

  </div>
</template>

<script>
export default {
  props:{
    blog: Object,
  },
  computed:{
    date() {
      var date = new Date(this.blog.dateAdded);
      return date.toDateString();
    }
  },
    data() {
    return {
      tags: ['Design', 'Pattern'],
    };
  },

};
</script>

<style lang="scss" scoped>
@import "../styles/components/_blogpage-item.scss";
</style>

