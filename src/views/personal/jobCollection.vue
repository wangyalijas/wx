<template>
  <div class="job-collection">
    <job-list :rightSwiper="rightSwiper" @handle-click="handleClose"></job-list>
  </div>
</template>

<script>
import JobList from '@/components/personal/jobList';

export default {
  name: 'personalCenter',
  data() {
    return {
      rightSwiper: {
        name: '取消关注',
        backColor: '#C7C7C7',
      },
    };
  },
  computed: {
  },
  components: {
    JobList,
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
    handleClose(msg) {
      this.$messagebox.confirm(`确定取消关注${msg}？`, {
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then((action) => {
        if (action === 'confirm') {
          // 确认的回调
          this.$toast('取消关注成功');
        }
      }).catch((err) => {
        if (err === 'cancel') {
          // 取消的回调
          this.$toast('已取消操作');
        }
      });
    },
  },
};
</script>
<style lang="scss">
  .job-collection{
    position: relative;
  }
</style>
