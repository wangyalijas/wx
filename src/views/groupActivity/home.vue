<template>
  <div class="group-activity">
    <div class="header">
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
      <mt-navbar v-model="selectedBar">
        <mt-tab-item :id="item.index"
                     v-for="(item, index) in navBarData"
                     :key="index">{{item.name}}</mt-tab-item>
      </mt-navbar>
    </div>
    <main class="main"
          v-infinite-scroll="loadingMoreData"
          infinite-scroll-disabled="isLoading"
          infinite-scroll-distance="50">
      <div class="main-list"
           @click="handleOpenNews(item.weUrl)"
           v-for="(item, index) in pageData"
           :key="index">
        <div class="main-list-inner clearfix">
          <span class="main-list-inner__left">
            <img :src="item.cover">
          </span>
          <div class="main-list-inner__right">
            <span class="main-list-inner__right--title">{{item.name}}</span>
            <span class="main-list-inner__right--value">
              {{item.simpleContent | formatContent}}</span>
          </div>
        </div>
      </div>
    </main>
    <div class="loading-more"
         :style="`display: ${isLoadingMore} ? block : none`">
      <span class="loading-more--text" v-if="!isLoadingComplete">正在加载中...</span>
      <span class="loading-more--text" v-if="isLoadingComplete">我是有底线的</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'groupActivity',
  data() {
    return {
      selectedBar: '0',
      navBarData: [{
        value: 'Dynamics',
        name: '集团动态',
        index: '0',
      }, {
        value: 'Introduction',
        name: '公司简介',
        index: '1',
      }, {
        value: 'Welfare',
        name: '员工福利',
        index: '2',
      }, {
        value: 'Activity',
        name: '精彩活动',
        index: '3',
      }],
      pageData: [],
    };
  },
  computed: {
    ...mapGetters({
      NewsType: 'handleNewsType',
    }),
  },
  watch: {
    selectedBar(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$set(this.pagination, 'currentPage', 1);
        this.fetchPageDataAsync(false);
      }
    },
  },
  components: {
  },
  filters: {
    formatContent(value) {
      // 计算字节数
      if (value.replace(/[^\x00-\xff]/g, 'xx').length >= 70) {
        return `${value.slice(0, 70)}...`;
      }
      return value;
    },
  },
  created() {
    this.$nextTick(() => {
      this.fetchPageDataAsync(false);
    });
  },
  methods: {
    async fetchPageDataAsync(flag) {
      this.sendAxios(flag, 'news/getNewsList', {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
        newsType: this.selectedBar,
      });
    },
    handleOpenNews(wbUrl) {
      window.location.href = wbUrl;
    },
  },
};
</script>
<style lang="scss">
  .group-activity{
    position: relative;
    .header{
      position: fixed;
      top: 0;
      width: 10.00rem;
      height: 5.92rem;
      z-index: 100;
      .mint-swipe{
        height: 4.59rem;
        .mint-swipe-indicators{
          left: 85%;
        }
        .mint-swipe-items-wrap{
          img{
            height: 4.59rem;
          }
        }
      }
      .mint-navbar{
        box-shadow: 0 2px 2px 0 rgba(194,194,194,0.50);
        .mint-tab-item{
          margin: 0 0.07rem;
          .mint-tab-item-label{
            font-size: 0.37rem;
            color: #666666;
          }
          &.is-selected{
            color: #2460C6;
            border-bottom: 3px solid #2460C6;
          }
        }
      }
    }
    .main{
      margin-top: 6.19rem;
      .main-list{
        margin: 0 0 0.27rem 0;
        height: 2.75rem;
        background: #FFFFFF;
        box-shadow: 0 0.05rem 0.16rem 0 rgba(223,237,241,0.30);
        .main-list-inner{
          padding: 0.37rem 0 0.40rem 0.80rem;
          position: relative;
          @include e(left){
            float: left;
            width: 1.73rem;
            height: 1.73rem;
            background: #f8f8f8;
            img{
              width: 1.73rem;
              height: 1.73rem;
            }
          }
          @include e(right){
            float: left;
            margin-left: 0.40rem;
            text-align: left;
            font-size: 0.35rem;
            color: #999999;
            width: 6.67rem;
            @include m(title){
              display: block;
              font-weight: 700;
              font-size: 0.43rem;
              color: #333333;
              margin-bottom: 0.13rem;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap
            }
            @include m(value){
              display: inline-block;
              overflow:hidden;
              max-width: 6.67rem;
              font-size: 12px;
              color: #333333;
            }
          }
        }
      }
    }
    .loading-more{
      background: #ffffff;
      height: 1.07rem;
      text-align: center;
      @include m(text){
        line-height: 1.07rem;
      }
    }
  }
</style>
