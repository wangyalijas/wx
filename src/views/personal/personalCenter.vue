<template>
  <div class="personal-center">
    <div class="header">
      <img src="../../../public/img/swipe.jpg"/>
    </div>
    <div class="main-deliver">
      <mt-cell title="职位收藏" is-link href="/job-collection">
        <i class="iconfont icon-collect" slot="icon"></i>
      </mt-cell>
      <mt-cell title="投递记录" is-link href="/post-records">
        <i class="iconfont icon-deliver" slot="icon"></i>
      </mt-cell>
      <mt-cell title="集团动态（暂时入口）" is-link href="/group-activity">
        <i class="iconfont icon-deliver" slot="icon"></i>
      </mt-cell>
    </div>
    <div class="main-resume">
      <mt-cell title="我的简历" is-link href="/job-resume">
        <i class="iconfont icon-resume" slot="icon"></i>
      </mt-cell>
    </div>
    <tab :tabData="tabData"></tab>
  </div>
</template>

<script>
import Tab from '@/components/common/tab';

export default {
  name: 'personalCenter',
  data() {
    return {
      tabData: [{
        name: '校园行程',
        route: 'campusProcess',
      }, {
        name: '投递简历',
        route: 'deliverResume',
      }, {
        name: '个人中心',
        route: 'personalCenter',
      }],
    };
  },
  computed: {
  },
  components: {
    Tab,
  },
  filters: {
  },
};
</script>
<style lang="scss">
  a:link{
    background: #ffffff;
  }
  .personal-center{
    position: relative;
    .header{
      img{
        height: 5.20rem;
      }
    }
    .main-deliver{
      .mint-cell{
        margin-bottom: 0;
        min-height: 1.12rem;
        .mint-cell-wrapper{
          padding: 0 0.40rem 0 0.48rem;
          border-bottom: 0.03rem solid #F6F6F6;
          .mint-cell-title{
            .iconfont{
              display: inline-block;
              margin-right: 0.27rem;
              &.icon-collect{
                color: #f5746c;
              }
              &.icon-deliver{
                color: #89c648;
              }
            }
            .mint-cell-text{
              font-size: 0.43rem;
              color: #666666;
            }
          }
        }
      }
    }
    .main-resume{
      margin-top: 0.40rem;
      .mint-cell{
        min-height: 1.12rem;
        .mint-cell-wrapper{
          padding: 0 0.40rem 0 0.48rem;
          .mint-cell-title{
            .iconfont{
              display: inline-block;
              margin-right: 0.27rem;
              &.icon-resume{
                color: #6fa2f7;
              }
            }
            .mint-cell-text{
              font-size: 0.43rem;
              color: #666666;
            }
          }
        }
      }
    }
  }
</style>
