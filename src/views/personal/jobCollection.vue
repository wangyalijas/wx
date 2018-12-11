<template>
  <div class="job-collection">
    <job-list :rightSwiper="rightSwiper"></job-list>
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
  methods: {
  },
};
</script>
<style lang="scss">
  .job-collection{
    position: relative;
  }
</style>
