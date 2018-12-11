<template>
  <div class="deliver-resume">
    <div class="main">
      <header class="header">
        <span class="header-top" @click="handleTop">回顶部</span>
        <div class="header-select">
          <wx-select title="全部城市" :options="options"></wx-select>
        </div>
        <div class="header-select">
          <wx-select title="全部类别" :options="options"></wx-select>
        </div>
        <div class="header-select">
          <wx-select title="全部学历" :options="options"></wx-select>
        </div>
      </header>
      <div class="search">
        <mt-search
          v-model="searchValue"
          cancel-text="取消"
          placeholder="搜索职位">
        </mt-search>
      </div>
    </div>
    <div class="list" ref="deliverResume"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
      <template v-for="(item, index1) in data">
        <div :key="index1" class="list--item" @click="handleRouter('JobDetail')">
          <div class="list--item--inner">
            <div class="list--item--inner__title">{{item.title}}</div>
            <div class="list--item--inner__time">{{item.time}}</div>
            <ul class="list--item--inner__label clearfix">
              <li
                v-for="(label, index2) in item.labels"
                :key="index2"
                class="list--item--inner__label--item">{{label.name}}</li>
            </ul>
          </div>
        </div>
      </template>
    </div>
    <tab :tabData="tabData"></tab>
  </div>
</template>

<script>
import Tab from '@/components/common/tab';
import WxSelect from '@/components/select/index';

export default {
  name: 'deliverResume',
  data() {
    return {
      loading: false,
      allLoaded: false,
      searchValue: '',
      options: ['全部', '技术类', '全部', '技术类'],
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
      data: [
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
        {
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        },
      ],
    };
  },
  computed: {
  },
  components: {
    WxSelect,
    Tab,
  },
  filters: {
  },
  created() {
    this.$nextTick(() => {
    });
  },
  methods: {
    loadMore() {
      this.loading = true;
      this.$nextTick(() => {
        this.data.push({
          title: 'JS-01软件开发工程师',
          labels: [
            {
              name: '呼和浩特',
              status: 0,
            },
            {
              name: '5-10年',
              status: 1,
            },
            {
              name: '博士及以上',
              status: 2,
            },
          ],
          time: '2018-11-03',
        });
        this.loading = false;
      });
    },
    handleTop() {
      this.$refs.deliverResume.scrollTop = 0;
    },
    loadTop(id) {
      console.log(id);
    },
    loadBottom(id) {
      this.allLoaded = true;// 若数据已全部获取完毕
      console.log(id);
    },
  },
};
</script>
<style lang="scss">
  .deliver-resume{
    position: relative;
    .main{
      position: fixed;
      top: 0;
      width: 10.00rem;
      z-index: 100;
      .header{
        position: relative;
        box-shadow: 0 0.05rem 0.11rem 0 rgba(231,225,225,0.30);
        height: 1.33rem;
        background: #ffffff;
        .header-select{
          display: inline-block;
          width: 2.67rem;
        }
        .header-top{
          position: absolute;
          right: 0.53rem;
          top: 0.35rem;
          font-size: 0.35rem;
          color: #4982E2;
        }
      }
      .search{
        height: 1.39rem;
        .mint-search {
          height: auto!important;
        }
        .mint-searchbar {
          background: #F7F7F7;
        }
        .mint-searchbar-inner {
          border-radius: 0.11rem;
          .mintui-search {
            margin-right: 0.27rem;
          }
          .mintui-search {
            font-size: 0.37rem;
          }
        }
      }
    }
    .list{
      position: relative;
      margin: 2.72rem 0 1.33rem 0;
      background: #F7F7F7;
      @include m(item) {
        height: 2.40rem;
        background: #ffffff;
        margin-bottom: 0.27rem;
        @include modifier(inner){
          position: relative;
          padding: 0.40rem 0.53rem;
          @include e(title) {
            font-weight: 700;
            font-size: 0.43rem;
            color: #333333;
            margin-bottom: 0.40rem;
          }
          @include e(time) {
            position: absolute;
            top: 0.40rem;
            right: 0.53rem;
            font-size: 0.35rem;
            color: #999999;
          }
          @include e(label) {
            @include m(item) {
              float: left;
              padding: 0.03rem 0.24rem;
              border-radius: 2px;
              margin-right: 0.27rem;
              background: #E8F5FF;
              border: 1px solid #BFE6FF;
              font-size: 13px;
              color: #6CC3FB;
            }
          }
        }
      }
    }
  }
</style>
