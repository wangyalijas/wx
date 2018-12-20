<template>
  <div class="job-collection">
    <main class="main-cell-swiper"
          v-if="pageData.length > 0"
          v-infinite-scroll="loadingMoreData"
          infinite-scroll-disabled="isLoading"
          infinite-scroll-distance="50">
      <mt-cell-swipe
        :title="item.name"
        v-for="(item, index) in pageData"
        :key="index"
        :right="handleSwiperRight(item)">
        <div class="value-sign"
             :class="{active: item.isEnd == 0}">
          <span class="value-sign__value">
            {{item.isEnd == 0 ? '进行中' : '已结束'}}</span>
        </div>
        <div class="value-info">
          <span class="value-info__time">{{item.createdAt}}</span>
        </div>
        <div :class="['value-label', { active: item.isEnd == 0 }]">
          <span class="value-label__name">{{item.place}}</span>
          <span class="value-label__name">
            {{JobType[item.jobType].description}}</span>
        </div>
      </mt-cell-swipe>
    </main>
    <div class="main-empty" v-if="pageData.length <= 0">
      <span>暂无数据</span>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'personalCenter',
  data() {
    return {
      rightSwiper: {
        name: '取消关注',
        backColor: '#C7C7C7',
      },
      pageData: [],
    };
  },
  computed: {
    ...mapGetters({
      JobType: 'handleJobType',
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
      this.sendAxios(flag, 'user/getUserCollectionJob', {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
      });
    },
    handleSwiperRight(item) {
      return [{
        content: this.rightSwiper.name,
        style: { background: this.rightSwiper.backColor },
        handler: () => this.handleCancle(item),
      }];
    },
    handleCancle(item) {
      this.$messagebox.confirm(`确定取消关注${item.name}？`, {
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then((action) => {
        if (action === 'confirm') {
          // 确认的回调
          this.postCollection(item);
        }
      }).catch((err) => {
        if (err === 'cancel') {
          // 取消的回调
          this.$toast('取消操作');
        }
      });
    },
    async postCollection(item) {
      const params = {
        jobId: item.id,
      };
      const result = await this.$store.dispatch('job/postCollection', params);
      if (result.state) {
        this.$toast('取消关注');
        this.$set(this.pagination, 'currentPage', 1);
        this.fetchPageDataAsync(false);
      }
    },
  },
};
</script>
<style lang="scss">
  @import "../../assets/styles/mixin/loadMore.scss";
  .job-collection{
    position: relative;
    .main-cell-swiper{
      text-decoration: none;
      padding-top: 0.40rem;
      .mint-cell-swipe{
        margin-bottom: 0.27rem;
        .mint-cell-wrapper{
          display: block;
          padding: 0 0 0.48rem 0.53rem;
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
              .value-label__name{
                background: #EDEDED;
                border: 0.03rem solid #D2D2D2;
                border-radius: 0.05rem;
                font-size: 0.35rem;
                color: #999999;
                padding: 0.05rem 0.24rem;
                margin-right: 0.27rem;
              }
              &.active{
                .value-label__name{
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
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
    .main-empty{
      height: 100vh;
      background: #ffffff;
      text-align: center;
      span{
        line-height: 100vh;
      }
    }
    .loading-more{
      border-top: none;
      margin-bottom: 0;
    }
  }
</style>
