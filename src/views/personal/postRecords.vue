<template>
  <div class="post-records">
    <main class="main"
          v-if="pageData.length > 0"
          v-infinite-scroll="loadingMoreData"
          infinite-scroll-disabled="isLoading"
          infinite-scroll-distance="50">
      <div class="main-list"
           v-for="(item, index) in pageData"
           :key="index">
        <div class="main-list__inner">
          <div class="main-list__inner--sign"
               :class="{active: item.isEnd == 0}">
          <span>{{item.isEnd == 0 ? '进行中' : '已结束'}}</span>
          </div>
          <span class="main-list__inner--name">{{item.name}}</span>
          <div class="main-list__inner__info">
            <span class="main-list__inner__info--time">{{item.createdAt}}</span>
            <span class="main-list__inner__info--status" :class="{active: item.reviewType == 0}">
              {{ReviewType[item.reviewType].description}}</span>
          </div>
          <div :class="['main-list__inner__label', { active: item.isEnd == 0 }]">
            <span>{{item.place}}</span>
            <span>{{JobType[item.jobType].description}}</span>
          </div>
        </div>
      </div>
      <div class="loading-more"
           v-if="pageData.length > 0"
           :style="`display: ${isLoadingMore} ? block : none`">
        <div class="loading-more__wrapper" v-if="!isLoadingComplete">
          <span class="loading-more__wrapper--spin"></span>
          <span class="loading-more__wrapper--text">加载中</span>
        </div>
        <span class="loading-more--text" v-if="isLoadingComplete">我是有底线的</span>
      </div>
    </main>
    <div class="main-empty" v-if="pageData.length <= 0">
      <span>暂无数据</span>
    </div>
    <div class="footer" @click="handleRouter('deliverResume')">
      <span class="footer-value">寻找适合我的职位</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'postRecords',
  data() {
    return {
      pageData: [],
    };
  },
  computed: {
    ...mapGetters({
      JobType: 'handleJobType',
      ReviewType: 'handleReviewType',
    }),
  },
  components: {
  },
  filters: {
  },
  created() {
    this.$nextTick(() => {
      this.fetchPageDataAsync(false);
    });
  },
  methods: {
    async fetchPageDataAsync(flag) {
      this.sendAxios(flag, 'user/getUserDeliveryJob', {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
      });
    },
  },
};
</script>
<style lang="scss">
  @import "../../assets/styles/mixin/loadMore.scss";
  .post-records{
    position: relative;
    .main{
      overflow-x: hidden;
      .main-list{
        position: relative;
        margin-top: 0.27rem;
        height: 3.28rem;
        width: 10.00rem;
        background: #ffffff;
        box-shadow: 0 2px 6px 0 rgba(223,237,241,0.30);
        @include e(inner){
          padding: 0.53rem 0 0 0.53rem;
          @include m(sign){
            top: 0;
            position: absolute;
            right: 0;
            width:0;
            height:0;
            border-color: transparent #C7C7C7;
            border-width: 0 1.55rem 1.55rem 0;
            border-style: solid;
            span{
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
          @include m(name){
            display: block;
            font-size: 16px;
            color: #333333;
            font-weight: 700;
          }
          @include element(info){
            margin: 0.13rem 0 0.40rem 0;
            @include m(time){
              font-size: 13px;
              color: #999999;
              margin-right: 0.35rem;
            }
            @include m(status){
              font-size: 14px;
              color: #6EA4FF;
              &.active{
                color: #E55F5F;
              }
            }
          }
          @include element(label){
            span{
              background: #EDEDED;
              border: 0.03rem solid #D2D2D2;
              border-radius: 0.05rem;
              font-size: 0.35rem;
              color: #999999;
              padding: 0.05rem 0.24rem;
              margin-right: 0.27rem;
            }
            &.active{
              span{
                background: #E8F5FF;
                border: 0.03rem solid #BFE6FF;
                border-radius: 0.05rem;
                color: #6CC3FB;
              }
            }
          }
        }
      }
    }
    .main-empty{
      height: calc(100vh - 1.33rem);
      background: #ffffff;
      text-align: center;
      span{
        line-height: 100vh;
      }
    }
    .footer{
      position: fixed;
      bottom: 0;
      width: 10.00rem;
      height: 1.33rem;
      background: #6EA4FF;
      box-shadow: 0 -0.05rem 0.16rem 0 rgba(212,212,212,0.30);
      text-align: center;
      .footer-value{
        font-size: 0.43rem;
        color: #FFFFFF;
        line-height: 1.33rem;
      }
    }
  }
</style>
