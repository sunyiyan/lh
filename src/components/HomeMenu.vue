<template>

<div>
  <el-container>
    <el-aside style="width=360px;height=800px;">
        <router-view></router-view>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main height="800px">
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
};
</script>

<style>
</style>