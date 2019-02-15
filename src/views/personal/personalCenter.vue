<template>
  <div class="personal-center">
    <div class="header">
      <img src="../../../public/img/swipe.jpg"/>
    </div>
    <div class="main-deliver">
      <mt-cell title="职位收藏" is-link @click.native="handleRouter('jobCollection')">
        <i class="iconfont icon-collect" slot="icon"></i>
      </mt-cell>
      <mt-cell title="投递记录" is-link @click.native="handleRouter('postRecords')">
        <i class="iconfont icon-deliver" slot="icon"></i>
      </mt-cell>
    </div>
    <div class="main-resume">
      <mt-cell title="我的简历" is-link @click.native="handleRouter('JobResume')">
        <i class="iconfont icon-resume" slot="icon"></i>
      </mt-cell>
    </div>
    <tab :tabData="tabDataSchool" v-if="isSchool"></tab>
    <tab :tabData="tabDataSocial" v-else></tab>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Tab from '@/components/common/tab';
import config from '@/config';

const { tabDataSchool, tabDataSocial } = config;

export default {
  name: 'personalCenter',
  data() {
    return {
      tabDataSchool,
      tabDataSocial,
    };
  },
  computed: {
    ...mapState([
      'isSchool',
    ]),
  },
  components: {
    Tab,
  },
  filters: {
  },
  methods: {
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
      margin-top: 0.40rem;
      .mint-cell{
        margin-bottom: 0;
        min-height: 1.15rem;
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
        min-height: 1.15rem;
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
