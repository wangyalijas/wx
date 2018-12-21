<template>
  <div class="job-detail" v-if="data">
    <div class="job-detail__title">
      <div class="job-detail__title--area" :class="length(data.place)">{{data.place}}</div>
      <div class="job-detail__title--job">{{data.name}}</div>
      <div class="job-detail__title--time">
        <i class="iconfont icon-calendar" slot="icon"></i>
        {{data.createdAt}}</div>
    </div>
    <ul class="job-detail__category">
      <li class="job-detail__category--item">
        <span>职业类别</span>
        <span>技术类</span>
      </li>
      <li class="job-detail__category--item">
        <span>工作年限</span>
        <span>{{data.workLife}}</span>
      </li>
      <li class="job-detail__category--item">
        <span>招聘人数</span>
        <span>{{data.recruitCount}}人</span>
      </li>
      <li class="job-detail__category--item">
        <span>学历要求</span>
        <span>{{data.education}}</span>
      </li>
    </ul>
    <div class="job-detail__main">
      <div class="job-detail__main--item">
        <div class="job-detail__main--item__title">工作职责</div>
        <div class="job-detail__main--item__content">
          {{data.duty}}
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
  data() {
    return {
      data: null,
    };
  },
  methods: {
    fetchPageData() {
      this.$indicator.open();
      this.$store.dispatch('job/getJob', this.$route.query).then((res) => {
        console.log(res);
        this.data = res;
        this.$indicator.close();
      });
    },
    length(area) {
      let result = 'length-default'
      if (area.length < 2) {
        result = 'length-2';
      }
      if (area.length < 3) {
        result = 'length-long';
      }
      return result;
    },
  },
  created() {
    this.$nextTick(() => {
      this.fetchPageData();
    });
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
    height: 100vh;
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
          left: 4.99rem;
        }
        &:nth-child(3) {
          top: 1.07rem;
        }
        &:nth-child(4) {
          top: 1.07rem;
          left: 4.99rem;
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
      padding: 0.67rem 0.80rem 1.33rem;
      background: #FFFFFF;
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
      height: 1.33rem;
      width: 10.00rem;
      background: #FFFFFF;
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
          position: absolute;
          top: 0;
          left: 0;
        }
        &:nth-child(2) {
          color: #ffffff;
          height: 1.33rem;
          background: #6EA4FF;
          width: 6.40rem;
          text-align: center;
          line-height: 1.33rem;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
  }
</style>
