<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header--select">
        <wx-select
        title="职位类别"
        :options="jobType"
        :prop="{id: 'id', label: 'description'}"
        @change="handleChangeJobType"
        ></wx-select>
      </div>
      <div class="home__header--select">
        <wx-select
        title="地点"
        :options="workPlace"
        :prop="{id: 'id', label: 'name'}"
        @change="handleWorkPlace"
        ></wx-select>
      </div>
      <div class="home__header--select">
        <wx-select
        title="招聘类型"
        :options="recruitType"
        :prop="{id: 'id', label: 'description'}"
        @change="handleRecruitType"
        ></wx-select>
      </div>
    </div>
    <div class="home__search">
      <mt-search
        v-model="getJobListParams.name"
        cancel-text="取消"
        placeholder="搜索职位"
        @input="handleSearch">
      </mt-search>
    </div>
    <div class="home__list"
         v-infinite-scroll="loadingMoreData"
         infinite-scroll-disabled="isLoading"
         infinite-scroll-distance="50">
      <template v-for="(item, index1) in pageData">
        <div
        :key="index1"
        class="home__list--item"
        @click="handleRouter('JobDetail', {id: item.id})">
          <span class="home__list--item__title">{{item.name}}</span>
          <span class="home__list--item__time">{{item.createdAt}}</span>
          <ul class="home__list--item__label">
            <li class="home__list--item__label--item blue">{{item.place}}</li>
            <li class="home__list--item__label--item blue">{{item.workLife}}</li>
            <li class="home__list--item__label--item blue">{{item.education}}</li>
            <!--<li-->
            <!--v-for="(label, index2) in item.labels"-->
            <!--:key="index2"-->
            <!--class="home__list&#45;&#45;item__label&#45;&#45;item"-->
            <!--:class="status(label.status)">{{label.name}}</li>-->
          </ul>
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
    <tab :tabData="tabData"></tab>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import wxSelect from '../../components/select/index.vue';
import Tab from '@/components/common/tab';

export default {
  name: 'Job',
  data() {
    return {
      selected: 'tab1',
      value: '',
      tabData: [
        {
          name: '招聘职位',
          route: 'Job',
        }, {
          name: '我的',
          route: 'campusProcess',
        },
      ],
      getJobListParams: {
        jobType: '',
        place: '',
        recruitType: '',
        name: '',
      },
      pageData: [],
    };
  },
  computed: {
    ...mapGetters({
      jobType: 'handleJobType',
      workPlace: 'handleWorkPlace',
      recruitType: 'handleRecruitType',
    }),
  },
  methods: {
    fetchPageDataAsync(flag) {
      this.sendAxios(flag, 'job/getJobList', Object.assign(this.getJobListParams, this.pagination));
    },
    handleChangeJobType(res) {
      this.$set(this.getJobListParams, 'jobType', res);
      this.$set(this.pagination, 'currentPage', 1);
      this.fetchPageDataAsync(false);
    },
    handleWorkPlace(res) {
      this.$set(this.getJobListParams, 'place', res);
      this.$set(this.pagination, 'currentPage', 1);
      this.fetchPageDataAsync(false);
    },
    handleRecruitType(res) {
      this.$set(this.getJobListParams, 'recruitType', res);
      this.$set(this.pagination, 'currentPage', 1);
      this.fetchPageDataAsync(false);
    },
    handleSearch() {
      this.fetchPageDataAsync(false);
    },
    status(status) {
      switch (status) {
        case 0:
          return 'blue';
        case 1:
          return 'blue';
        case 2:
          return 'blue';
        default:
          break;
      }
      return false;
    },
  },
  components: {
    wxSelect,
    Tab,
  },
  created() {
    this.$nextTick(() => {
      this.fetchPageDataAsync(false);
    });
  },
};
</script>

<style lang="scss">
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
.home {
  .tab .tab-bar__name {
    padding: 0 1.847rem;
  }
}
</style>
<style lang="scss" scoped>
  @import "../../assets/styles/mixin/loadMore.scss";
  .home {
    @include e(header) {
     width: 100%;
     height: 1.33rem;
     box-shadow: 0 2px 4px 0 rgba(231,225,225,0.30);
     display: flex;
      @include m(select) {
      height: 1.33rem;
      z-index: 10;
     }
    }
    @include e(search) {
      height: 1.39rem;
    }
    @include e(list) {
      /*margin-bottom: 1.33rem;*/
      background: #F7F7F7;
      @include m(item) {
        height: 2.40rem;
        background: #ffffff;
        margin-bottom: 0.27rem;
        position: relative;
        &:last-child {
          margin-bottom: 0;
        }
        @include e(title) {
          position: absolute;
          top: 0.40rem;
          left: 0.93rem;
          font-size: 0.43rem;
          color: #333333;
        }
        @include e(time) {
          position: absolute;
          top: 0.59rem;
          right: 0.91rem;
          font-size: 0.35rem;
          color: #999999;
        }
        @include e(label) {
          position: absolute;
          left: 0.93rem;
          bottom: 0.40rem;
          @include m(item) {
            float: left;
            padding: 0.1rem 0.27rem;
            border-radius: 2px;
            font-size: 0.35rem;
            margin-right: 0.27rem;
            &.green {
              background: #EDF9F9;
              border: 1px solid #C1EFE8;
              color: #5BE4A2;
            }
            &.yellow {
              background: #FFFBF2;
              border: 1px solid #EFDAC1;
              color: #FDB658;
            }
            &.blue {
              background: #E8F5FF;
              border: 1px solid #BFE6FF;
              color: #6CC3FB;
            }
          }
        }
      }
    }
  }
</style>
