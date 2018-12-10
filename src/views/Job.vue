<template>
  <div class="home">
    <div class="home__header">
      <div class="home__header--select">
        <wx-select title="职位类别" :options="options"></wx-select>
      </div>
      <div class="home__header--select">
        <wx-select title="地点" :options="options"></wx-select>
      </div>
      <div class="home__header--select">
        <wx-select title="招聘类型" :options="options"></wx-select>
      </div>
    </div>
    <div class="home__search">
      <mt-search
        v-model="value"
        cancel-text="取消"
        placeholder="搜索职位">
      </mt-search>
    </div>
    <div class="home__list">
      <template v-for="(item, index1) in data">
        <div :key="index1" class="home__list--item" @click="handleRouter('JobDetail')">
          <span class="home__list--item__title">{{item.title}}</span>
          <span class="home__list--item__time">{{item.time}}</span>
          <ul class="home__list--item__label">
            <li
            v-for="(label, index2) in item.labels"
            :key="index2"
            class="home__list--item__label--item"
            :class="status(label.status)">{{label.name}}</li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import wxSelect from '../components/select/index.vue';

export default {
  name: 'Job',
  data() {
    return {
      options: ['全部', '技术类', '全部', '技术类'],
      selected: 'tab1',
      value: '',
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
      ],
    };
  },
  computed: {
  },
  methods: {
    status(status) {
      switch (status) {
        case 0:
          return 'green';
        case 1:
          return 'yellow';
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
</style>
<style lang="scss" scoped>
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
      background: #F7F7F7;
      @include m(item) {
        height: 2.40rem;
        background: #ffffff;
        margin-bottom: 0.27rem;
        position: relative;
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
            font-size: 13px;
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
