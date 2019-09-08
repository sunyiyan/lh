<template>
  <div>
    <el-row>
      <el-col
        :span="10"
        v-for="item in vines"
        :key="item"
        :offset="0"
      >

        <div
          shadow="hover"
          style="width: 180px;height: 60px;"
        >
          {{item.name}}
        </div>

        <!-- <el-card
            shadow="hover"
            style="width: 160px;height: 160px;"
          >
            <div style="padding: 6px;height: 160px;">
              <div>
                <div style="position: relative;top: 15px;text-align: center;">{{project.pname}}</div>
              </div>

            </div>
          </el-card> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //藤本植物
      vines: [ //花灌木类
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],vines: [// 行道树类
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],vines: [
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],
      vines: [
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],vines: [
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],vines: [
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],vines: [
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ],
      vines: [
        { name: "紫藤苗" },
        { name: "鸡血藤" },
        { name: "金银花苗" },
        { name: "爬山虎" },
        { name: "凌霄花" },
        { name: "多花紫藤" },
        { name: "美国凌霄" },
        { name: "三叶地锦" }
      ]
    };
  }
};
</script>

<style>
</style>