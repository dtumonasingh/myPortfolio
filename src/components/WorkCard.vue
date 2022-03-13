<template>
  <div id="work-card">
    <div id="image">
      <img src="../assets/image1.png" />
    </div>

    <div id="data">
      <div id="title">
        <p>Designing Dashboards</p>
      </div>

      <div id="meta-data">
        <div id="year">
          <p>2020</p>
        </div>

        <div id="tag-name">
          <p>Dashboard</p>
        </div>
      </div>

      <div id="content">
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

#image {
  align-items: center;
  display: flex;
}
#work-card {
  display: flex;
  align-content: center;
  margin: 10px 0px 10px 0px;
}

#title {
  font-weight: bold;
  font-size: 30px;
}

#data {
  margin-left: 20px;
  justify-content: space-around;
}

#year {
  background-color: black;
  font-size: 16px;
  color: white;
  width: 60px;
  border-radius: 20px;
  padding: 0px;
  margin: 0px;
  display: flex;
  justify-content: center;
}

#tag-name {
  font-weight: 100;
  font-size: 20;
  margin-left: 20px;
}

#data {
  display: flex;
  flex-direction: column;
}

#meta-data {
  display: flex;
}

#content {
  font-size: 16px;
  font-weight: 200px;
}
</style>
