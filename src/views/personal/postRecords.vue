<template>
  <div class="post-records">
    <job-list :rightSwiper="rightSwiper"></job-list>
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
  methods: {
  },
};
</script>
<style lang="scss">
  .post-records{
    position: relative;
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
