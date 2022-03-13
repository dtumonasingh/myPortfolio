<template>
  <div id="post-container">
    <slot> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  width: 100%;
  background-color: #edf7fa;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
