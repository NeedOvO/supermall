<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  import {getHomeMultidata} from "network/home";

  export default {
    name: "HomeRecommendView",
    // props: {
    //
    // }
    data(){
      return {
        recommends: [
          {
            acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
          }
        ]
      }
    },
    created() {
      getHomeMultidata().then(data =>{
        // this.recommends = data.data.banner.list;
        this.recommends = data.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 5px;


  }
</style>
