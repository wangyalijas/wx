<template>
  <div class="tips-dialog" v-if="statusObj.flag">
    <div class="dialog-wrap">
      <span class="dialog-wrap__spin">
        <i class="iconfont" :class="statusObj.icon" slot="icon"></i>
      </span>
      <span class="dialog-wrap__text">{{statusObj.name}}</span>
    </div>
    <div class="dialog-mask"></div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'tipsDialog',
  components: {
  },
  data() {
    return {
      timer: null,
    };
  },
  props: {
    statusObj: Object,
    tipsDialogFlag: Boolean,
  },
  created() {
    this.$nextTick(() => {
    });
  },
  watch: {
    'statusObj.flag': {
      handler(curVal) {
        if (curVal) {
          this.startTime();
        }
      },
      deep: true,
    },
  },
  computed: {
  },
  methods: {
    startTime() {
      this.timer = setInterval(() => {
        this.$emit('handle-dialog');
        clearInterval(this.timer);
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
  .tips-dialog{
    transition: opacity .2s linear;
    .dialog-wrap{
      top: 50%;
      left: 50%;
      position: fixed;
      transform: translate(-50%, -50%);
      color: white;
      box-sizing: border-box;
      text-align: center;
      opacity: 0.9;
      background: #464646;
      border-radius: 8px;
      padding: 0.29rem 1.23rem;
      @include e(spin){
        display: inline-block;
        text-align: center;
        .icon-success{
          font-size: 39px;
        }
        .icon-error{
          font-size: 39px;
        }
      }
      @include e(text){
        display: block;
        text-align: center;
        margin-top: 0.27rem;
        font-size: 0.37rem;
        color: #FFFFFF;
      }
    }
    .dialog-mask{
      top: 0;
      left: 0;
      position: fixed;
      width: 100%;
      height: 100%;
      opacity: 0;
      background: transparent;
    }
  }
</style>
