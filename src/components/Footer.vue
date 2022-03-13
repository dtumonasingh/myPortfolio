<template>
  <div id="footer">
    <div id="socials">
      <img src="../assets/fb.png" />

      <img src="../assets/insta.png" />

      <img src="../assets/Linkedin.png" />
    </div>
    <div id="copyright">
      <p>Copyright ©2020 All rights reserved</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#socials {
  display: flex;
  justify-content: center;
  align-content: center;
}
img {
  margin: 0px 20px 0px 20px;
}

#footer {
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}

#copyright {
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin: 10px 0px 10px 0px;
}
</style>
