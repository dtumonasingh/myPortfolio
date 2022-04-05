<template>
  <div class="blog">

      <div class="blog__title">
        <p>{{ title }}</p>
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
          {{ content }}
        </p>
      </div>

  </div>
</template>

<script>
export default {
    data() {
    return {
      title: 'Making a design system from scratch',
      date: '12 Feb 2020',
      tags: ['Design', 'Pattern'],
      content:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    };
  },

};
</script>

<style lang="scss" scoped>
@import "../styles/components/_blogpage-item.scss";
</style>

