<template>
<div class="job-attachment-detail" v-if="data">
  <div class="delete"  :class="{'is-delete': isDelete}">
    <i class="iconfont icon-shanchu" @click="deleteAttchment(data.id)"></i>
  </div>
  <img :src="data.address" @click="handleDelete">
</div>
</template>

<script>
export default {
  name: 'JobAttachmentDetail',
  data() {
    return {
      data: null,
      isDelete: false,
    };
  },
  created() {
    this.$nextTick(() => {
      this.data = this.$route.query;
    });
  },
  methods: {
    handleDelete() {
      this.isDelete = !this.isDelete;
      console.log(this.isDelete);
    },
    deleteAttchment(id) {
      this.$store.dispatch('resume/deleteResumeAttachment', id).then((res) => {
        if (res.state) {
          this.$toast('删除成功！');
          this.handleRouter('JobResume');
        }
      });
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.job-attachment-detail {
  width: 100%;
  min-height: 100vh;
  position: relative;
  img{
    width: 100%;
    min-height: 100vh;
  }
  .delete {
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    &.is-delete {
      height: 30px;
    }
    .iconfont {
      position: absolute;
      right: 10px;
      bottom: 2px;
    }
  }
}
</style>
