<template>

  <div class='con'>
    <div class="title_item_style">花灌木类</div>
    <div v-for="item in flows">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>
    <div class="title_item_style">行道树类</div>
    <div v-for="item in borders">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>

    <div class="title_item_style">藤本植物类</div>
    <div v-for="item in vines">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>

    <div class="title_item_style">宿根草本类</div>
    <div v-for="item in perennials">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>

    <div class="title_item_style">松柏长青类</div>
    <div v-for="item in Evergreens">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>

    <div class="title_item_style">水生植物类</div>
    <div v-for="item in hydrophytes">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>

    <div class="title_item_style">绿化小苗</div>
    <div v-for="item in plantlets">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>

    <div class="title_item_style">花卉种子</div>
    <div v-for="item in seeds">
      <!-- order的值是整数，默认为0，整数越小，item排列越靠前 这里只给item1 和item4设置了order属性 1跟4排到了最后面，并且4在1的前面 -->
      <div class="item_style">{{item.name}}</div>
    </div>

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
.con {
  /* 要创建一个 flex 容器，只需要将一个 display: flex 属性添加到一个元素上。
默认情况下，所有的直接子元素都被认为是 flex 项，并从左到右依次排列在一行中。
如果 flex 项的宽度总和大于容器，那么 flex 项将按比例缩小，直到它们适应 flex 容器宽度 */
  display: flex;

  /* flex-direction 决定主轴的方向 row(默认)|row-reverse|column|column-reverse*/
  /* flex-direction: row; */

  /* flex-wrap决定当排列不下时是否换行以及换行的方式,nowrap(默认)|wrap|wrap-reverse */
  /* flex-wrap:wrap; */

  /* flex-flow是lex-direction和flex-wrap的简写形式，如：row wrap|column wrap-reverse等。默认值为row nowrap，即横向排列 不换行 */
  flex-flow: row wrap;

  /* !当主轴沿水平方向时!justify-content,决定item在主轴上的对齐方式，可能的值有flex-start（默认），flex-end，center，space-between，space-around */
  justify-content: flex-start;
  /* !主轴水平时!决定了item在交叉轴上的对齐方式，可能的值有flex-start|flex-end|center|baseline|stretch */
  align-items: flex-start;
}
.item_style {
  width: 120px;
  height: 50px;
  background: #8db6cd;
  border: 1px solid black;
  margin-left: 10px;
  text-align: center;
  line-height: 50px;
}
.title_item_style {
  width: 260px;
  height: 50px;
  background: #8db6cd;
  border: 1px solid black;
  margin-left: 10px;
  text-align: center;
  line-height: 50px;
}
</style>