<template>
  <div class="education" v-if="insideIsShowJobExperience">
    <div class="education__title">工作经历</div>
    <div class="education__info">
      <mt-field label="公司名称" placeholder="请输入公司名称"></mt-field>
      <mt-field label="所在行业" placeholder="请输入行业"></mt-field>
      <mt-field label="开始时间" placeholder="请选择" type="tel"></mt-field>
      <mt-field label="结束时间" placeholder="请选择" type="email"></mt-field>
      <mt-field
       label="工作内容"
       placeholder="请填写工作内容"
       type="textarea"
       rows="4"></mt-field>
      <mt-field
        label="工作业绩"
        placeholder="请填写工作业绩"
        type="textarea"
        rows="4"></mt-field>
    </div>
    <div class="footer">
      <span class="footer-value" @click="writed">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobExperience',
  props: {
    isShowJobExperience: Boolean,
  },
  data() {
    return {
      insideIsShowJobExperience: false,
    };
  },
  watch: {
    isShowJobExperience() {
      this.initialInsideValue();
    },
  },
  methods: {
    initialInsideValue(value = this.isShowJobExperience) {
      this.insideIsShowJobExperience = value;
    },
    writed() {
      this.$emit('writedJobExperience', true);
    },
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
  .education {
    position: absolute;
    top: 0;
    background: #ffffff;
    width: 100%;
    height: 100vh;
    @include e(title) {
      font-size: 0.43rem;
      color: #333333;
      font-weight: bold;
      padding: 0.53rem 0.53rem;
    }
    @include e(info){
      position: relative;
      padding: 0 0.53rem;
      .mint-cell{
        .mint-cell-wrapper{
          border-bottom: 0.03rem solid #F5F5F5;
          .mint-cell-title{
            text-align: left;
          }
          .mint-cell-value .mint-field-core{
            text-align: right;
            margin-right: 0.27rem;
          }
        }
        border-bottom: 1px solid #F5F5F5;
      }
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
