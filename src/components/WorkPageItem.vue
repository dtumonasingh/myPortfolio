<template>
  <div class="work">
    <div class="work__image">
      <img src="../assets/sidebar.png" />
    </div>

    <div class="work__data">
      <div class="work__title">
        <p>{{title}}</p>
        <a class="work__link" :href="workLink" target="_blank">visit</a>
      </div>

      <div class="work__meta-data">
        <div class="work__year">
          <p>{{year}}</p>
        </div>

        <div class="work__tag-name">
          <p>{{tagName}}</p>
        </div>
      </div>

      <div class="work__content">
        <p>
          {{content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    year: String,
    tagName: String,
    content: String,
    imageSource: String,
    workLink: String
  },
  methods: {
    getImgUrl(imageSource) {
    if(imageSource == 'sidebar')
    {
      return "../assets/sidebar.png";
    }
    else{
      return "../assets/sidebar.png";
    }
  }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_workpage-item.scss";
</style>
