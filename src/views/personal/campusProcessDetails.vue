<template>
  <div class="campus-process-details">
    <main class="main">
      <span class="main-sign" :class="statusData[$route.query.processId]">{{statusName}}</span>
      <div class="main-title">徐州大学宣讲会</div>
      <div class="main-info">
        <span class="main-info__item"
              v-for="(item, index) in infoItemData"
              :key="index">{{item.value}}</span>
      </div>
      <div class="main-plan">笔试面试安排</div>
      <div class="main-time">
        <div class="main-time-inner">
          <span class="main-time-inner__label">简历截止：</span>
          <span class="main-time-inner__value">3月28日 12:00</span>
        </div>
        <div class="main-time-inner">
          <span class="main-time-inner__label">线上笔试：</span>
          <span class="main-time-inner__value">3月28日 12:00</span>
        </div>
        <div class="main-time-inner">
          <span class="main-time-inner__label">面试：</span>
          <span class="main-time-inner__value">3月28日 12:00</span>
        </div>
      </div>
    </main>
    <div class="footer" v-if="$route.query.processId === 1"
         @click="handleRouter('campusRegister', {campusId: 1})">
      <span class="footer-value">我要报名</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'campusProcessDetails',
  data() {
    return {
      statusData: {
        1: 'notStart',
        2: 'progress',
        3: 'ending',
      },
      infoItemData: [{
        value: '精彩的在线宣讲会将继续与大家见面。',
      }, {
        value: '3月21日19:00欢迎观看。',
      }, {
        value: '宣讲地址时间若有调整，请以公众号更新信息为准。',
      }, {
        value: '先电子科技大学（北校区），3月20日19:00图书馆西裙楼报告厅。',
      }, {
        value: '北京大学3月22日19:00三楼111室。',
      }],
    };
  },
  computed: {
    statusName() {
      const processId = Number(this.$route.query.processId);
      if (processId === 1) {
        return '未开始';
      }
      if (processId === 2) {
        return '进行中';
      }
      if (processId === 3) {
        return '已结束';
      }
      return true;
    },
  },
  components: {
  },
  filters: {
  },
  created() {
    this.$nextTick(() => {
    });
  },
  methods: {
  },
};
</script>
<style lang="scss">
  .campus-process-details{
    position: relative;
    background: #ffffff;
    .main{
      position: relative;
      padding: 0.53rem 0.53rem 3.79rem 0.53rem;
      text-align: left;
      .main-sign{
        position: absolute;
        right: 2.53rem;
        font-size: 12px;
        border-radius: 2px;
        padding: 0.05rem 0.24rem;
        &.notStart{
          color: #F29B2C;
          background: #F9F5ED;
          border: 1px solid #EFDAC1;
        }
        &.progress{
          background: #EDF9F9;
          border: 1px solid #C1EFE8;
          color: #1DB7AE;
        }
        &.ending{
          background: #F0F0F0;
          border: 1px solid #D0D0D0;
          color: #B2B2B2;
        }
      }
      .main-title{
        margin: 0 0 0.53rem 0;
        font-size: 16px;
        color: #333333;
        font-weight: 700;
      }
      .main-info{
        font-size: 13px;
        color: #666666;
        line-height: 28px;
        @include e(item){
          display: block;
        }
      }
      .main-plan{
        margin: 0.80rem 0 0.27rem 0;
        font-size: 14px;
        color: #333333;
        font-weight: 700;
      }
      .main-time{
        font-size: 13px;
        color: #666666;
        .main-time-inner{
          position: relative;
          line-height: 0.75rem;
          @include e(label){
            display: inline-block;
            text-align: right;
            position: absolute;
            width: 2.00rem;
            left: 0;
          }
          @include e(value){
            margin-left: 2.27rem;
          }
        }
      }
    }
    .footer{
      position: fixed;
      bottom: 0;
      width: 10.00rem;
      height: 1.33rem;
      background: #6EA4FF;
      box-shadow: 0 -2px 6px 0 rgba(212,212,212,0.30);
      .footer-value{
        font-size: 16px;
        color: #FFFFFF;
        line-height: 1.33rem;
      }
    }
  }
</style>
