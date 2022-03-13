<template>
  <div id="post">
    <div class="post-content">
      <div class="title">
        <p>{{ title }}</p>
      </div>

      <div class="meta-data">
        <p>{{ date }}</p>
        <div class="tags">
          <p v-for="item in tags" :key="item">
            {{ item }}
          </p>
        </div>
      </div>

      <div class="content">
        <p>
          {{ content }}
        </p>
      </div>
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

<style scoped>
div #post {
  width: 418px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-left: 25px;
  margin-right: 25px;
}

.post-content {
  margin: 15px;
}
.title {
  font-weight: bold;
  font-size: 26px;
}

.meta-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 18px;
}

.tags {
  display: flex;
  flex-direction: row;
}

.content {
  font-size: 16px;
}
</style>
