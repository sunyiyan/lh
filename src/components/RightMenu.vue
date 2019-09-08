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
        
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flows: [
        //花灌木类
        { name: "丛生木槿" },
        { name: "胶东卫矛" },
        { name: "水蜡球" },
        { name: "大叶黄杨球" },
        { name: "欧月" },
        { name: "贴梗海棠" },
        { name: "瓜子黄杨" },
        { name: "红叶石楠球" }
      ],

      borders: [
        // 行道树类
        { name: "苦楝树" },
        { name: "红叶碧桃" },
        { name: "枫杨" },
        { name: "紫玉兰" },
        { name: "栾树" },
        { name: "红榉树" },
        { name: "速生竹柳" },
        { name: "竹柳树" }
      ],

      // 藤本植物类
      vines: [
        { name: "黄刺玫" },
        { name: "树状月季" },
        { name: "藤本月季" },
        { name: "藤蔓月季" },
        { name: "藤本月季苗" },
        { name: "油麻藤" },
        { name: "鸡血藤" },
        { name: "月季花" }
      ],

      perennials: [
        // { name: "宿根草本类"},
        { name: "美人蕉" },
        { name: "葱兰" },
        { name: "马兰花" },
        { name: "佛甲草" },
        { name: "马尼拉草坪" },
        { name: "剑麻" },
        { name: "常夏石竹" },
        { name: "玉簪花" }
      ],

      Evergreens: [
        // { name: "松柏长青类"},
        { name: "刺松" },
        { name: "地柏" },
        { name: "蜀桧" },
        { name: "黑松" },
        { name: "刺柏" },
        { name: "塔柏" },
        { name: "云杉" },
        { name: "铅笔柏" }
      ],
      hydrophytes: [
        // { name: "水生植物类" },
        { name: "菖蒲" },
        { name: "睡莲" },
        { name: "青竹" },
        { name: "早园竹苗" },
        { name: "紫竹苗" },
        { name: "金镶玉竹" },
        { name: "刚竹苗" },
        { name: "黄槽竹" }
      ],

      plantlets: [
        // { name: "绿化小苗" },
        { name: "木槿小苗" },
        { name: "北海道黄杨" },
        { name: "金叶水杉" },
        { name: "红叶小檗小苗" },
        { name: "卫矛" },
        { name: "地柏小苗" },
        { name: "迎春花" },
        { name: "紫薇小苗" }
      ],

      seeds: [
        // { name: "花卉种子" },
        { name: "台湾草种子" },
        { name: "红花草种子" },
        { name: "中华结缕草种子" },
        { name: "天堂草种子" },
        { name: "弯叶画眉草" },
        { name: "白三叶种子" },
        { name: "百喜草种子" },
        { name: "多年生黑麦草" }
      ]
    };
  }
};
</script>

<style>
</style>