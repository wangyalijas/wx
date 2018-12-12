<template>
  <div class="post-records">
    <job-list :rightSwiper="rightSwiper" class="main-page" @handle-click="handleClose"></job-list>
    <div class="footer">
      <span class="footer-value">寻找适合我的职位</span>
    </div>
  </div>
</template>

<script>
import JobList from '@/components/personal/jobList';

export default {
  name: 'postRecords',
  data() {
    return {
      rightSwiper: {
        name: '删除',
        backColor: '#F47373',
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
      this.$messagebox.confirm(`确定删除${msg}？`, {
        title: '提示',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then((action) => {
        if (action === 'confirm') {
          // 确认的回调
          this.$toast('删除成功');
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
  .post-records{
    position: relative;
    .main-page{
      margin-bottom: 1.33rem;
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
