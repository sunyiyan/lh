<template>

  <el-container>
    <el-aside width="360px">
        <router-view></router-view>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row>
          <el-col
            :span="5"
            v-for="project in allprojects"
            :key="project.pid"
            :offset="1"
          >
            <el-card
              :body-style="{ padding: '0px', height:'360px'}"
              shadow="hover"
              style="width: 260px;height: 320px;"
            >
              <div style="padding: 6px;height: 310px;">
                <div>
                  <div>
                    <font size="5">{{project.pcname}}</font>
                  </div>
                  <div style="position: relative;top: 15px;text-align: center;">{{project.pname}}</div>
                </div>

              </div>
            </el-card>
          </el-col>
        </el-row>

      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>

</template>

<script>
export default {
  data() {
    return {
      //藤本植物
      vines: [
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],
      allprojects: [
        {
          pid: "123",
          pname: "pname",
          pcname: "pcname1",
          pdatesave: "2018-4-9 11:11:11",
          ppageview: 10
        },
        {
          pid: "123",
          pname: "pname",
          pcname: "pcname2",
          pdatesave: "2018-4-9 11:11:11",
          ppageview: 10
        },
        {
          pid: "123",
          pname: "pname",
          pcname: "pcname",
          pdatesave: "2018-4-9 11:11:11",
          ppageview: 10
        },
        {
          pid: "123",
          pname: "pname",
          pcname: "pcname",
          pdatesave: "2018-4-9 11:11:11",
          ppageview: 10
        },
        {
          pid: "123",
          pname: "pname",
          pcname: "pcname",
          pdatesave: "2018-4-9 11:11:11",
          ppageview: 10
        },
        {
          pid: "123",
          pname: "pname",
          pcname: "pcname",
          pdatesave: "2018-4-9 11:11:11",
          ppageview: 10
        }
      ]
    };
  }
};
</script>

<style>
html,
body {
  margin: 0px;
  height: 100%;
}
</style>