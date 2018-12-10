<template>
  <div class="campus-process">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../../public/img/swipe.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../public/img/swipe.jpg"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../../public/img/swipe.jpg"/>
      </mt-swipe-item>
    </mt-swipe>
    <section class="main">
      <div class="main-list"
           v-for="(item, index) in pageData"
           :key="index"
           @click="handleRouter('campusProcessDetails', {processId: 1})">
        <div class="main-list-inner clearfix">
          <span class="main-list-inner__sign" :class="statusData[item.status]">
            {{item.status | formatStatus}}
          </span>
          <span class="main-list-inner__left"></span>
          <div class="main-list-inner__right">
            <span class="main-list-inner__right--title">{{item.title}}</span>
            <span class="main-list-inner__right--time">时间：{{item.time}}</span>
            <span class="main-list-inner__right--site">地点：{{item.site}}</span>
          </div>
        </div>
      </div>
    </section>
    <tab :tabData="tabData"></tab>
  </div>
</template>

<script>
import Tab from '@/components/common/tab';

export default {
  name: 'campusProcess',
  data() {
    return {
      statusData: {
        1: 'notStart',
        2: 'progress',
        3: 'ending',
      },
      pageData: [{
        title: '徐州大学宣讲会',
        time: '2018-10-19',
        site: '南区科技馆2层',
        status: 1,
      }, {
        title: '徐州大学宣讲会',
        time: '2018-10-19',
        site: '南区科技馆2层',
        status: 2,
      }, {
        title: '徐州大学宣讲会',
        time: '2018-10-19',
        site: '南区科技馆2层',
        status: 3,
      }],
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
    formatStatus: (value) => {
      if (value === 1) {
        return '未开始';
      }
      if (value === 2) {
        return '进行中';
      }
      if (value === 3) {
        return '已结束';
      }
      return true;
    },
  },
  methods: {
  },
};
</script>
<style lang="scss">
  .campus-process{
    position: relative;
    .mint-swipe{
      height: 4.61rem;
      .mint-swipe-indicators{
        left: 88%;
      }
      .mint-swipe-items-wrap{
        img{
          height: 4.61rem;
        }
      }
    }
    .main{
      .main-list{
        margin: 0.27rem 0 0 0;
        height: 2.75rem;
        background: #FFFFFF;
        box-shadow: 0 2px 6px 0 rgba(223,237,241,0.30);
        .main-list-inner{
          padding: 0.40rem 0 0.40rem 0.80rem;
          position: relative;
          @include e(sign){
            position: absolute;
            right: 1rem;
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
          @include e(left){
            float: left;
            width: 1.95rem;
            height: 1.95rem;
            background: #f8f8f8;
          }
          @include e(right){
            float: left;
            margin-left: 0.40rem;
            text-align: left;
            font-size: 13px;
            color: #999999;
            @include m(title){
              display: block;
              font-weight: 700;
              font-size: 16px;
              color: #333333;
              margin-bottom: 0.27rem;
              width: 150px;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap
            }
            @include m(time){
              display: block;
              margin-bottom: 0.13rem;
            }
            @include m(site){
              display: block;
            }
          }
        }
      }
    }
  }
</style>
