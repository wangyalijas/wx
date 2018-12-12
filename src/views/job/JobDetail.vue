<template>
  <div class="job-detail">
    <div class="job-detail__title">
      <div class="job-detail__title--area">上海</div>
      <div class="job-detail__title--job">MIGO4-实施工程师</div>
      <div class="job-detail__title--time">
        <i class="iconfont icon-calendar" slot="icon"></i>
        2018-03-15</div>
    </div>
    <ul class="job-detail__category">
      <li class="job-detail__category--item">
        <span>职业类别</span>
        <span>技术类</span>
      </li>
      <li class="job-detail__category--item">
        <span>工作年限</span>
        <span>两年</span>
      </li>
      <li class="job-detail__category--item">
        <span>招聘人数</span>
        <span>2人</span>
      </li>
      <li class="job-detail__category--item">
        <span>学历要求</span>
        <span>本科</span>
      </li>
    </ul>
    <div class="job-detail__main">
      <div class="job-detail__main--item">
        <div class="job-detail__main--item__title">工作职责</div>
        <div class="job-detail__main--item__content">
          1.负责后台开发数据及维护，调度系统与大数据处理平台相关工作；<br>
          2.负责后台开发数据及维护，调度系统与大数据处理平台相关工作；
        </div>
      </div>
      <div class="job-detail__main--item">
        <div class="job-detail__main--item__title">工作职责</div>
        <div class="job-detail__main--item__content">
          1.负责后台开发数据及维护，调度系统与大数据处理平台相关工作；<br>
          2.负责后台开发数据及维护，调度系统与大数据处理平台相关工作；
        </div>
      </div>
    </div>
    <div class="job-detail__tab">
      <div class="job-detail__tab--item"><i class="iconfont icon-collect"></i>收藏</div>
      <div class="job-detail__tab--item" @click="handleRouter('JobResume')">投递岗位</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobDetail',
  created() {
    this.$nextTick(() => {
      this.fetchPageData();
    });
  },
  methods: {
    fetchPageData() {
      this.$indicator.open();
      setTimeout(() => {
        this.$indicator.close();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
  .iconfont{
    display: inline-block;
    margin-right: 0.27rem;
    &.icon-collect{
      color: #5E90E5;
    }
  }
  .job-detail {
    background: #FFFFFF;
    @include e(title) {
      margin: 0 0.80rem;
      position: relative;
      height: 2.72rem;
      background: #FFFFFF;
      border-bottom: 1px solid #F6F6F6;
      @include m(area) {
        background: #E8F5FF;
        border: 0.03rem solid #BFE6FF;
        border-radius: 50%;
        font-size: 0.43rem;
        color: #6CC3FB;
        position: absolute;
        width: 1.04rem;
        height: 1.04rem;
        text-align: center;
        line-height: 1.04rem;
        top: 0.8rem;
      }
      @include m(job) {
        height: 0.59rem;
        line-height: 0.59rem;
        font-size: 16px;
        color: #333333;
        position: absolute;
        left: 1.57rem;
        top: 0.8rem;
        font-weight: bold;
      }
      @include m(time) {
        margin-top: 0.13rem;
        height: 0.48rem;
        line-height: 0.48rem;
        font-size: 0.35rem;
        color: #999999;
        position: absolute;
        left: 1.57rem;
        bottom: 0.9rem;
        .icon-calendar{
          font-size: 12px;
        }
      }
    }
    @include e(category) {
      height: 1.87rem;
      margin: 0 0.80rem;
      background: #FFFFFF;
      border-bottom: 1px solid #F6F6F6;
      position: relative;
      @include m(item) {
        position: absolute;
        &:nth-child(1) {
          top: 0.27rem;
        }
        &:nth-child(2) {
          top: 0.27rem;
          left: 5.2rem;
        }
        &:nth-child(3) {
          top: 1.07rem;
        }
        &:nth-child(4) {
          top: 1.07rem;
          left: 5.2rem;
        }
        span:nth-child(1) {
          margin-right: 0.53rem;
        }
        span:nth-child(2) {
          font-weight: bold;
        }
      }
    }
    @include e(main) {
      padding: 0.67rem 0.80rem;
      @include m(item) {
        margin-bottom: 0.80rem;
        @include e(title) {
          font-size: 0.35rem;
          color: #333333;
          font-weight: bold;
          text-align: left;
          margin-bottom: 0.27rem;
        }
        @include e(content) {
          font-size: 0.35rem;
          color: #666666;
          text-align: left;
          line-height: 22px;
        }
      }
    }
    @include e(tab) {
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      box-shadow: 0 -2px 4px 0 rgba(212,212,212,0.30);
      text-align: center;
      @include m(item) {
        display: inline-block;
        font-size: 0.43rem;
        line-height: 1.33rem;
        &:nth-child(1) {
          width: 3.60rem;
          height: 1.33rem;
          line-height: 1.33rem;
          background: #FFFFFF;
          text-align: center;
        }
        &:nth-child(2) {
          color: #ffffff;
          height: 1.33rem;
          background: #6EA4FF;
          width: 6.40rem;
          text-align: center;
          line-height: 1.33rem;
        }
      }
    }
  }
</style>
