<template>
  <div class="campus-process-details">
    <main class="main">
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
  </div>
</template>

<script>
export default {
  name: 'campusProcessDetails',
  data() {
    return {
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
  },
  components: {
  },
  filters: {
  },
};
</script>
<style lang="scss">
  .campus-process-details{
    position: relative;
    background: #ffffff;
    .main{
      padding: 0.53rem 0.53rem 0 0.53rem;
      text-align: left;
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
  }
</style>
