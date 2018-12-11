<template>
  <main class="main-cell-swiper">
    <mt-cell-swipe
      :title="item.name"
      v-for="(item, index) in pageData"
      :key="index"
      :right="handleSwiperRight(index)">
      <div class="value-sign"
           :class="{active: item.statusId === 1}">
          <span class="value-sign__value">
            {{item.statusId === 1 ? '进行中' : '已结束'}}</span>
      </div>
      <div class="value-info">
        <span class="value-info__time">{{item.time}}</span>
        <span class="value-info__status"
              :class="{active: item.viewId === 1}">
          {{item.viewId === 1 ? '已被查阅' : '未被查阅'}}</span>
      </div>
      <div class="value-label">
          <span class="value-label__name"
                :class="{active: item.statusId === 1}"
                v-for="(sign, signIndex) in item.sign"
                :key="signIndex">{{sign}}</span>
      </div>
    </mt-cell-swipe>
  </main>
</template>

<script>
export default {
  name: 'jobList',
  data() {
    return {
      pageData: [{
        name: 'JS-01软件开发工程师',
        time: '2018-11-03',
        statusId: 1,
        viewId: 1,
        sign: ['呼和浩特', '技术类'],
      }, {
        name: 'JS-01软件开发工程师',
        time: '2018-11-03',
        statusId: 0,
        viewId: 0,
        sign: ['呼和浩特', '技术类'],
      }, {
        name: 'JS-01软件开发工程师',
        time: '2018-11-03',
        statusId: 1,
        viewId: 1,
        sign: ['呼和浩特', '技术类'],
      }, {
        name: 'JS-01软件开发工程师',
        time: '2018-11-03',
        statusId: 0,
        viewId: 1,
        sign: ['呼和浩特', '技术类'],
      }, {
        name: 'JS-01软件开发工程师',
        time: '2018-11-03',
        statusId: 1,
        viewId: 1,
        sign: ['呼和浩特', '技术类'],
      }, {
        name: 'JS-01软件开发工程师',
        time: '2018-11-03',
        statusId: 0,
        viewId: 1,
        sign: ['呼和浩特', '技术类'],
      }],
    };
  },
  props: {
    rightSwiper: Object,
  },
  computed: {
  },
  components: {
  },
  filters: {
  },
  methods: {
    handleSwiperRight(index) {
      return [{
        content: this.rightSwiper.name,
        style: { background: this.rightSwiper.backColor },
        handler: () => this.handleCancle(index),
      }];
    },
    handleCancle(index) {
      console.log(index);
    },
  },
};
</script>
<style lang="scss">
  .main-cell-swiper{
    text-decoration: none;
    padding-top: 0.40rem;
    .mint-cell-swipe{
      margin-bottom: 0.27rem;
      .mint-cell-wrapper{
        display: block;
        padding: 0 0 0.53rem 0.53rem;
        .mint-cell-title{
          padding-top: 0.53rem;
          margin-bottom: 0.40rem;
          .mint-cell-text{
            font-size: 0.43rem;
            color: #333333;
            font-weight: 700;
          }
        }
        .mint-cell-value{
          display: block;
          .value-sign{
            top: 0;
            position: absolute;
            right: 0;
            width:0;
            height:0;
            border-color: transparent #C7C7C7;
            border-width: 0 1.55rem 1.55rem 0;
            border-style: solid;
            @include e(value){
              display: block;
              width: 2.00rem;
              line-height: 1.07rem;
              text-align: center;
              transform: rotate(45deg) translate3d(0,0,0);
              font-size: 0.32rem;
              color: #FFFFFF;
              font-weight: normal;
            }
            &.active{
              border-color: transparent #6EA4FF;
            }
          }
          .value-info{
            display: block;
            margin-bottom: 0.53rem;
            @include e(time){
              font-size: 0.35rem;
              color: #999999;
              margin-right: 0.35rem;
            }
            @include e(status){
              font-size: 0.37rem;
              color: #E55F5F;
              &.active{
                color: #6EA4FF;
              }
            }
          }
          .value-label{
            display: block;
            @include e(name){
              background: #EDEDED;
              border: 0.03rem solid #D2D2D2;
              border-radius: 0.05rem;
              font-size: 0.35rem;
              color: #999999;
              padding: 0.05rem 0.24rem;
              margin-right: 0.27rem;
              &.active{
                background: #E8F5FF;
                border: 0.03rem solid #BFE6FF;
                border-radius: 0.05rem;
                color: #6CC3FB;
              }
            }
          }
        }
      }
      .mint-cell-right{
        .mint-cell-swipe-buttongroup{
          .mint-cell-swipe-button{
            width: 3.2rem;
            height: 3.28rem;
            line-height: 3.28rem;
            text-align: center;
            font-size: 0.45rem;
            color: #FFFFFF;
          }
        }
      }
    }
  }
</style>
