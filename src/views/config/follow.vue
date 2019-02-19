<template>
  <div class="wexin-wrapper">
    <img src="http://hufe.club/3.png" alt="">
    <div>请关注微信公众号卫宁招聘</div>
  </div>
</template>

<script>
export default {
  name: 'follow',
  data() {
    return {};
  },
  computed: {
  },
  components: {
  },
  created() {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
  .wexin-wrapper{
    height: 100vh;
    text-align: center;
    position: relative;
    img {
      position: absolute;
      width: 6rem;
      left: 50%;
      margin-top: 4rem;
      margin-left: -3rem;
    }
    div {
      position: absolute;
      top: 10rem;
      width: 100%;
      text-align: center;
      font-size: 0.53rem;
    }
  }
</style>
