
<template>
  <div id="enter">
    <el-container>
      <el-header>Header</el-header>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1" v-on:click="$goRoute('/HomeMenu')">花灌木类</el-menu-item>
            <el-menu-item index="2-2">行道树类</el-menu-item>
            <el-menu-item index="2-3">藤本植物类</el-menu-item>
            <el-menu-item index="2-4">宿根草本类</el-menu-item>
            <el-menu-item index="2-5">松柏长青类</el-menu-item>
            <el-menu-item index="2-6">水生植物类</el-menu-item>
            <el-menu-item index="2-7">绿化小苗</el-menu-item>
            <el-menu-item index="2-8">花卉种子</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">行情资讯</template>
            <el-menu-item index="3-1">花灌木类</el-menu-item>
            <el-menu-item index="3-2">行道树类</el-menu-item>
            <el-menu-item index="3-3">藤本植物类</el-menu-item>
            <el-menu-item index="3-4">宿根草本类</el-menu-item>
            <el-menu-item index="3-5">松柏长青类</el-menu-item>
            <el-menu-item index="3-6">水生植物类</el-menu-item>
            <el-menu-item index="3-7">绿化小苗</el-menu-item>
            <el-menu-item index="3-8">花卉种子</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">新闻频道</template>
            <el-menu-item index="4-1">花灌木类</el-menu-item>
            <el-menu-item index="4-2">行道树类</el-menu-item>
            <el-menu-item index="4-3">藤本植物类</el-menu-item>
            <el-menu-item index="4-4">宿根草本类</el-menu-item>
            <el-menu-item index="4-5">松柏长青类</el-menu-item>
            <el-menu-item index="4-6">水生植物类</el-menu-item>
            <el-menu-item index="4-7">绿化小苗</el-menu-item>
            <el-menu-item index="4-8">花卉种子</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">供应信息</template>
            <el-menu-item index="5-1">花灌木类</el-menu-item>
            <el-menu-item index="5-2">行道树类</el-menu-item>
            <el-menu-item index="5-3">藤本植物类</el-menu-item>
            <el-menu-item index="5-4">宿根草本类</el-menu-item>
            <el-menu-item index="5-5">松柏长青类</el-menu-item>
            <el-menu-item index="5-6">水生植物类</el-menu-item>
            <el-menu-item index="5-7">绿化小苗</el-menu-item>
            <el-menu-item index="5-8">花卉种子</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">苗木专场</template>
            <el-menu-item index="6-1">花灌木类</el-menu-item>
            <el-menu-item index="6-2">行道树类</el-menu-item>
            <el-menu-item index="6-3">藤本植物类</el-menu-item>
            <el-menu-item index="6-4">宿根草本类</el-menu-item>
            <el-menu-item index="6-5">松柏长青类</el-menu-item>
            <el-menu-item index="6-6">水生植物类</el-menu-item>
            <el-menu-item index="6-7">绿化小苗</el-menu-item>
            <el-menu-item index="6-8">花卉种子</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">公司简介</template>
            <el-menu-item index="7-1">花灌木类</el-menu-item>
            <el-menu-item index="7-2">行道树类</el-menu-item>
            <el-menu-item index="7-3">藤本植物类</el-menu-item>
            <el-menu-item index="7-4">宿根草本类</el-menu-item>
            <el-menu-item index="7-5">松柏长青类</el-menu-item>
            <el-menu-item index="7-6">水生植物类</el-menu-item>
            <el-menu-item index="7-7">绿化小苗</el-menu-item>
            <el-menu-item index="7-8">花卉种子</el-menu-item>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">联系我们</template>
            <el-menu-item index="8-1">花灌木类</el-menu-item>
            <el-menu-item index="8-2">行道树类</el-menu-item>
            <el-menu-item index="8-3">藤本植物类</el-menu-item>
            <el-menu-item index="8-4">宿根草本类</el-menu-item>
            <el-menu-item index="8-5">松柏长青类</el-menu-item>
            <el-menu-item index="8-6">水生植物类</el-menu-item>
            <el-menu-item index="8-7">绿化小苗</el-menu-item>
            <el-menu-item index="8-8">花卉种子</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-header height="200px">
        <el-carousel
          indicator-position="outside"
          height="200px"
        >
          <el-carousel-item
            v-for="item in urls"
            :key="item"
          >
            <el-image
              :src="item"
              class="el-carousel__item h3"
            ></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-header>

      <el-container>
        <el-main id="enter">
          <router-view></router-view>
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
    return {
      urls: [
        require('@/assets/banner_a.jpg'),
        require('@/assets/banner_8.jpg'),
        require('@/assets/banner_4.jpg')
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
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