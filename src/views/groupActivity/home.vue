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
    <main class="main">
      <div class="main-list"
           v-for="(item, index) in pageData"
           :key="index">
        <div class="main-list-inner clearfix">
          <span class="main-list-inner__left"></span>
          <div class="main-list-inner__right">
            <span class="main-list-inner__right--title">{{item.title}}</span>
            <span class="main-list-inner__right--value">{{item.content}}</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'groupActivity',
  data() {
    return {
      selectedBar: '1',
      navBarData: [{
        name: '集团动态',
        index: '0',
      }, {
        name: '公司简介',
        index: '1',
      }, {
        name: '员工福利',
        index: '2',
      }, {
        name: '精彩活动',
        index: '3',
      }],
      pageData: [{
        title: '数字化医疗产品解决方案',
        content: '卫宁健康作为中国专业从事医疗卫生领域信息化的上市公司，致力于提供优质的医...',
      }, {
        title: '数字化医疗产品解决方案',
        content: '卫宁健康作为中国专业从事医疗卫生领域信息化的上市公司，致力于提供优质的医...',
      }, {
        title: '数字化医疗产品解决方案',
        content: '卫宁健康作为中国专业从事医疗卫生领域信息化的上市公司，致力于提供优质的医...',
      }, {
        title: '数字化医疗产品解决方案',
        content: '卫宁健康作为中国专业从事医疗卫生领域信息化的上市公司，致力于提供优质的医...',
      }, {
        title: '数字化医疗产品解决方案',
        content: '卫宁健康作为中国专业从事医疗卫生领域信息化的上市公司，致力于提供优质的医...',
      }, {
        title: '数字化医疗产品解决方案',
        content: '卫宁健康作为中国专业从事医疗卫生领域信息化的上市公司，致力于提供优质的医...',
      }],
    };
  },
  computed: {
  },
  components: {
  },
  filters: {
  },
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
              font-size: 12px;
              color: #333333;
            }
          }
        }
      }
    }
  }
</style>
