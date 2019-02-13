<template>
  <div class="nav-link">
    <div :class="[ open ? '' : 'fadeOutDown', 'qa animated']"
         @click="handleLocation(qaRoute)">
      QA
    </div>
    <div :class="[ open ? '' : 'fadeOutRight', 'recommend animated']"
         @click="handleLocation(recommendRoute)">
      内推
    </div>
    <div @click="open = !open" class="menu">
      菜单
    </div>
  </div>
</template>
<!--JavaScript-->
<script>
export default {
  name: 'fade',
  props: {
    qaRoute: {
      type: String,
      default: '/',
    },
    recommendRoute: {
      type: String,
      default: '/',
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleLocation(url) {
      window.location.href = url;
    },
  },
};
</script>
<!--CSS-PAGE-->
<style lang="scss" scoped>
@import "../../assets/styles/theme/animate.css";
.nav-link{
  position: fixed;
  right: 15px;
  bottom: 80px;
  div{
    position: relative;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
    text-align: center;
    background: rgba(0,0,0,.2);
    transition: all ease .5s;
    color: #ffffff;
    &.qa{
      position: absolute;
      top: -30px;
      right: 45px;
    }
    &.recommend{
      position: absolute;
      top: -60px;
    }
    .icon{
      color: #ffffff;
    }
  }
}
</style>
