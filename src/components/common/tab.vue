<template>
  <div class="tab">
    <div class="tab-bar"
         v-for="(item, index) in tabData"
         @click="handleRouter(item.route)"
         :key="index">
      <span class="tab-bar__name"
            :class="{active: item.route === $route.name}">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'tab',
  components: {
  },
  props: {
    tabData: Array,
  },
  created() {
    this.$nextTick(() => {
    });
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  .tab{
    position: fixed;
    bottom: 0;
    height: 1.33rem;
    width: 10.00rem;
    background: #FFFFFF;
    box-shadow: 0 -0.05rem 0.11rem 0 rgba(231,225,225,0.30);
    .tab-bar{
      display: inline-block;
      font-size: 0.43rem;
      @include e(name){
        padding: 0 0.79rem;
        text-align: center;
        color: #666666;
        line-height: 1.33rem;
        border-right: 0.03rem solid #ECECEC;
        &.active{
          color: #4982E2;
        }
      }
      &:last-child .tab-bar__name{
        border-right-width: 0;
      }
    }
  }
</style>
