<template>

    <div class="tab-bar-item" @click="itemClick">

      <div v-if="!isActive">
        <slot name="item-icon"></slot>
      </div>

      <div v-else>
        <slot name="item-icon-active"></slot>
      </div>

      <div :style="activeStyle">

        <slot name="item-text"></slot>
      </div>

    </div>


</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activecolor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: false
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      activeStyle() {
        if (this.isActive){
          return {color: this.activecolor}
        }else {
          return {}
        }
      }
    },
    methods: {
      itemClick() {
        console.log('被点击'+this.path);
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
  }
  .tab-bar-item img {
    width: 1px;
    height: 1px;
    margin-top: 2px;
    vertical-align: middle;
    margin-bottom: 5px;

  }
</style>
