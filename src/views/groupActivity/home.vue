<template>
  <div class="group-activity">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../../public/img/swipe.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../public/img/swipe.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../public/img/swipe.jpg"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'groupActivity',
  data() {
    return {
    };
  },
  computed: {
  },
  components: {
  },
  filters: {
  },
};
</script>
<style lang="scss">
  .group-activity{
    position: relative;
    .mint-swipe{
      height: 4.59rem;
      .mint-swipe-indicators{
        left: 85%;
      }
      .mint-swipe-items-wrap{
        img{
          height: 4.59rem;
        }
      }
    }
  }
</style>
