export default {
  data() {
    return {
      isLoading: true,
      isLoadingMore: false,
      isLoadingComplete: false,
      pagination: {
        currentPage: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    loadingMoreData() {
      this.isLoading = true;
      this.isLoadingMore = false;
      setTimeout(() => {
        this.pagination.currentPage += 1;
        this.fetchPageDataAsync(true);
      }, 1000);
    },
    async sendAxios(flag, httpConfig, params = {}) {
      console.log(params);
      const result = await this.$store.dispatch(httpConfig, params);
      if (flag) {
        // 多次加载数据
        this.pageData = this.pageData.concat(result);
        if (result.length === 0) {
          // 加载到底部
          this.isLoading = true;
          this.isLoadingComplete = true;
        } else {
          this.isLoading = false;
        }
        this.isLoadingMore = true;
      } else {
        // 第一次加载数据
        this.pageData = result;
        // 当第一次加载数据完之后，把这个滚动到底部的函数触发打开
        this.isLoadingMore = false;
        this.isLoading = false;
      }
    },
  },
};
