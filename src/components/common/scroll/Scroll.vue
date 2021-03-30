<template>
  <div class="wrapper" >
      <slot></slot>
  </div>
</template>

<script>
  import BScroll1 from 'better-scroll'

  export default {
    name: "Scroll",
    data(){
      return {
        scroll: null
      }
    },

    // ,
    mounted(){
      this.scroll = new BScroll1(document.querySelector('.wrapper'),{

      });
      console.log(this.scroll);
    },
    methods: {
      refresh() {
        this.scroll.refresh();
        console.log('diaoyong');
      }
    }
  }
</script>

<style scoped>
/*.content{*/
  /*height: 100vh;*/
/*}*/
</style>
