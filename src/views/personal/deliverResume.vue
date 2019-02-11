<template>
  <div class="deliver-resume">
    <div class="main">
      <header class="header">
        <span class="header-top" @click="handleTop">回顶部</span>
        <div class="header-select">
          <wx-select
            title="全部城市"
            :options="WorkPlace"
            @change="handleWorkPlace"
          ></wx-select>
        </div>
        <div class="header-select">
          <wx-select
            title="全部类别"
            :options="JobType"
            @change="handleChangeJobType"
          ></wx-select>
        </div>
        <div class="header-select">
          <wx-select
            :value="formatSchool"
            title="招聘类型"
            :options="RecruitType"
            @change="handleRecruitType"
          ></wx-select>
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
    <div class="list"
         v-infinite-scroll="loadingMoreData"
         infinite-scroll-disabled="isLoading"
         infinite-scroll-distance="50">
      <template v-for="(item, index1) in pageData">
        <div :key="index1" class="list--item" @click="handleRouter('JobDetail', {id: item.id})">
          <div class="list--item--inner">
            <div class="list--item--inner__title">{{item.name}}</div>
            <div class="list--item--inner__time">{{item.createdAt}}</div>
            <ul class="list--item--inner__label clearfix">
              <li class="list--item--inner__label--item">{{item.place}}</li>
              <li class="list--item--inner__label--item">{{item.education}}</li>
              <li class="list--item--inner__label--item">{{formatType(item.jobType, JobType)}}</li>
            </ul>
          </div>
        </div>
      </template>
    </div>
    <div class="loading-more"
         :style="`display: ${isLoadingMore} ? block : none`">
      <div class="loading-more__wrapper" v-if="!isLoadingComplete">
        <span class="loading-more__wrapper--spin"></span>
        <span class="loading-more__wrapper--text">加载中</span>
      </div>
      <span class="loading-more--text" v-if="isLoadingComplete">我是有底线的</span>
    </div>
    <tab :tabData="tabDataSchool"></tab>
  </div>
</template>

<script>
import Tab from '@/components/common/tab';
import WxSelect from '@/components/select/index';
import { mapGetters } from 'vuex';
import config from '@/config';

const { tabDataSchool } = config;
export default {
  name: 'deliverResume',
  data() {
    return {
      searchValue: '',
      selectSearch: {
        jobType: '',
        place: '',
        recruitType: '',
      },
      tabDataSchool,
      pageData: [],
    };
  },
  computed: {
    ...mapGetters({
      JobType: 'handleJobType',
      WorkPlace: 'handleWorkPlace',
      RecruitType: 'handleRecruitType',
      isSchool: 'handleIsSchool',
    }),
    formatSchool() {
      // 校园招聘 招聘类型：实习
      this.$set(this.selectSearch, 'recruitType', this.isSchool ? '1' : '');
      return this.isSchool ? '实习' : '全部';
    },
  },
  watch: {
    searchValue: () => {
      this.changeType();
    },
  },
  components: {
    WxSelect,
    Tab,
  },
  filters: {
  },
  created() {
    this.$nextTick(() => {
      this.fetchPageDataAsync(false);
    });
  },
  methods: {
    formatType(item, valueArr) {
      let result = '';
      valueArr.forEach((value) => {
        if (item === value.id) {
          result = value.description;
        }
      });
      return result;
    },
    async fetchPageDataAsync(flag) {
      this.sendAxios(flag, 'job/getJobList', {
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize,
        jobType: this.selectSearch.jobType,
        place: this.selectSearch.place,
        recruitType: this.selectSearch.recruitType,
        name: this.searchValue,
      });
    },
    handleTop() {
      window.scroll(0, 0);
    },
    handleChangeJobType(res) {
      this.$set(this.selectSearch, 'jobType', res.id);
      this.changeType();
    },
    handleWorkPlace(res) {
      this.$set(this.selectSearch, 'place', res.name);
      this.changeType();
    },
    handleRecruitType(res) {
      this.$set(this.selectSearch, 'recruitType', res.id);
      this.changeType();
    },
    changeType() {
      this.$set(this.pagination, 'currentPage', 1);
      this.fetchPageDataAsync(false);
    },
  },
};
</script>
<style lang="scss">
  @import "../../assets/styles/mixin/loadMore.scss";
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
          display: inline-flex;
          width: 2.67rem;
          .select{
            .select__header{
              min-width: 2.67rem;
            }
          }
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
      margin: 2.72rem 0 0 0;
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
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
</style>
