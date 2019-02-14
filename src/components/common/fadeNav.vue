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
      <span :class="[open ? 'menu-close' : 'menu-open', 'menu-button']"></span>
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
  bottom: 50px;
  div{
    position: relative;
    width: 46px;
    height: 46px;
    line-height: 46px;
    border-radius: 50%;
    text-align: center;
    background: #2460C6;
    transition: all ease .5s;
    color: #ffffff;
    font-size: 16px;
    &.qa{
      position: absolute;
      top: -30px;
      right: 45px;
      background: #F5A623;
    }
    &.recommend{
      position: absolute;
      top: -60px;
      background: #6CDC96;
    }
    &.menu{
      .menu-button{
        display: inline-block;
        width: 24px;
        height: 24px;
        background-size: 24px 24px;
        vertical-align: middle;
      }
      .menu-open{
        background: url("../../../public/icon/menu.svg") no-repeat center;
      }
      .menu-close{
        background: url("../../../public/icon/close.svg") no-repeat center;
      }
    }
  }
}
</style>
