<template>
  <div id="home" >
    <nav-bar class="home-nav">
      <template  #center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <scroll class="content">
      <div>
        <home-swiper />
        <home-recommend-view/>
        <feature/>
        <tab-control class="tab-control" :titles="['流行' , '新款' , '精选']" @tabClick = "tabClick"/>
        <goods-list :goods="ShowGoods"/>
      </div>

    </scroll>

  </div>
</template>

<script>
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommendView from './childComps/HomeRecommendView'
  import Feature from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'

  import {getHomeMultidata , getHomeGoods} from "network/home";


  export default {
    name: "Home",
    data(){
      return {
        banners: [],
        recommend: [],
        goods: {
          pop: {
            page: 0,
            list:[]
          },
          new: {
            page: 0,
            list:[]
          },
          sell: {
            page: 0,
            list:[]
          }
        },
        currentType: 'pop',
        scroll: null
      }
    },
    components: {
      HomeSwiper,
      HomeRecommendView,
      Feature,
      NavBar,
      TabControl,
      GoodsList,
      Scroll
    },
    computed: {
      ShowGoods(){
        return this.goods[this.currentType].list;
      }
    },
    created(){
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      /**
       * 事件监听
       * */
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType = 'pop';
            break;
          case 1:
            this.currentType = 'new';
            break;
          case 2:
            this.currentType = 'sell';
            break;

        }
      },
      /**
       * 网络请求
       * */
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
          console.log(this.goods.pop);
        })
      }

    }
  }
</script>

<style scoped>
  #home{
    padding-top: 40px;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0px;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control{
    position: sticky;
    top: 40px;
  }

  .content {
    /*height: calc(100% - 89px);*/
    /*overflow: hidden;*/
    position: absolute;
    top: 40px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
</style>
