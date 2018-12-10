<template>
  <div class="campus-process">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../public/img/swipe.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../public/img/swipe.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../public/img/swipe.jpg"/>
      </mt-swipe-item>
    </mt-swipe>
    <section class="main">

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'campusProcess',
  components: {
  },
};
</script>
<style lang="scss">
  .campus-process{
    position: relative;
    .mint-swipe{
      height: 4.61rem;
      .mint-swipe-indicators{
        left: 88%;
      }
      .mint-swipe-items-wrap{
        img{
          height: 4.61rem;
        }
      }
    }
    .main{

    }
  }
</style>
