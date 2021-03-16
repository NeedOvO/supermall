<template>
  <swiper>
    <swiper-item v-for="item in data">
      <a :href="item.link">
        <img class="slide-img" :src="item.image" alt="">

      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  import {getHomeMultidata} from "network/home";
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        // default(){
        //   return []
        // }
      }
    },
    data(){
      return {
        data: [
          {
            acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",

          },

        ]
      }
    },
    created() {
      this.getHomeMultidata();
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods :{
      getHomeMultidata() {
        getHomeMultidata().then(data =>{
          this.data = data.data.banner.list;
          // this.recommend = data.data.recommend.list
        })
      }

    }
  }
</script>

<style scoped>
  .slide-img {
    width: 100%;
  }
</style>
