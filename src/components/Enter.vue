
<template>
  <div id="enter">
    <el-container>

      <el-header>Header</el-header>
      <el-header>Menu</el-header>
      <el-header height = "200px">
        <el-carousel
          :interval="4000"
          type="card"
          height="200px"
        >
          <el-carousel-item
            v-for="item in 6"
            :key="item"
          >
            <h3 class="medium">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-header>

      <el-container>
        <el-aside width="200px">menu</el-aside>
        <el-main>

        </el-main>
      </el-container>
      <el-footer>about</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Enter",
  data() {
    return {};
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* //幻灯片 */
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>