<template>
  <div class="campus-process">
    <mt-swipe :auto="3000">
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
    <section class="main"
             v-infinite-scroll="loadingMoreData"
             infinite-scroll-disabled="isLoading"
             infinite-scroll-distance="50">
      <div class="main-list"
           v-for="(item, index) in pageData"
           :key="index"
           @click="handleRouter('campusProcessDetails', {processId: item.id})">
        <div class="main-list-inner clearfix">
          <template v-for="(status, statusIndex) in ScheduleState">
            <span :key="statusIndex"
                  v-if="item.scheduleState == status.id"
                  class="main-list-inner__sign"
                  :class="status.name">
              {{status.description}}
            </span>
          </template>
          <span class="main-list-inner__left">
            <img :src="item.cover"/>
          </span>
          <div class="main-list-inner__right">
            <span class="main-list-inner__right--title">{{item.name}}</span>
            <span class="main-list-inner__right--time">时间：{{item.startTime}}</span>
            <span class="main-list-inner__right--site">地点：{{item.place}}</span>
          </div>
        </div>
      </div>
    </section>
    <div class="loading-more"
         :style="`display: ${isLoadingMore} ? block : none`">
      <div class="loading-more__wrapper" v-if="!isLoadingComplete">
        <span class="loading-more__wrapper--spin"></span>
        <span class="loading-more__wrapper--text">加载中</span>
      </div>
      <span class="loading-more--text" v-if="isLoadingComplete">我是有底线的</span>
    </div>
    <tab :tabData="tabData"></tab>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Tab from '@/components/common/tab';

export default {
  name: 'campusProcess',
  data() {
    return {
      pageData: [],
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
    ...mapGetters({
      ScheduleState: 'handleScheduleState',
    }),
  },
  components: {
    Tab,
  },
  filters: {
  },
  created() {
    this.$nextTick(() => {
      // 第一次加载数据
      this.fetchPageDataAsync(false);
      console.log(this.ScheduleState);
    });
  },
  methods: {
    async fetchPageDataAsync(flag) {
      this.sendAxios(flag, 'campusProcess/getScheduleList', {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
      });
    },
  },
};
</script>
<style lang="scss">
  @import "../../assets/styles/mixin/loadMore.scss";
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
        box-shadow: 0 0.05rem 0.16rem 0 rgba(223,237,241,0.30);
        .main-list-inner{
          padding: 0.40rem 0 0.40rem 0.80rem;
          position: relative;
          @include e(sign){
            position: absolute;
            right: 1rem;
            font-size: 0.32rem;
            border-radius: 0.05rem;
            padding: 0.05rem 0.24rem;
            &.NotStart{
              color: #F29B2C;
              background: #F9F5ED;
              border: 0.03rem solid #EFDAC1;
            }
            &.OnGoing{
              background: #EDF9F9;
              border: 0.03rem solid #C1EFE8;
              color: #1DB7AE;
            }
            &.End{
              background: #F0F0F0;
              border: 0.03rem solid #D0D0D0;
              color: #B2B2B2;
            }
          }
          @include e(left){
            float: left;
            width: 1.95rem;
            height: 1.95rem;
            background: #f8f8f8;
            img{
              width: 1.95rem;
              height: 1.95rem;
            }
          }
          @include e(right){
            float: left;
            margin-left: 0.40rem;
            text-align: left;
            font-size: 0.35rem;
            color: #999999;
            @include m(title){
              display: block;
              font-weight: 700;
              font-size: 0.43rem;
              color: #333333;
              margin-bottom: 0.2rem;
              width: 4.27rem;
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
