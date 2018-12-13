<template>
  <div class="education">
    <div class="education__title">工作经历</div>
    <div class="education__info">
      <mt-field label="公司名称" placeholder="请输入公司名称"></mt-field>
      <mt-field label="所在行业" placeholder="请输入行业"></mt-field>
      <mt-field label="开始时间" placeholder="请选择" type="tel"></mt-field>
      <mt-field label="结束时间" placeholder="请选择" type="email"></mt-field>
        <div class="education__info--job">
          <div class="education__info--job__title">
            工作内容
          </div>
          <div class="education__info--job__content">
            <textarea name="" id="" cols="30" rows="6"></textarea>
          </div>
        </div>
      <div class="education__info--job">
        <div class="education__info--job__title">
          工作业绩
        </div>
        <div class="education__info--job__content">
          <textarea name="" id="" cols="30" rows="6"></textarea>
        </div>
      </div>
    </div>
    <div class="footer">
      <span class="footer-value" @click="writed">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobExperience',
  data() {
    return {
    };
  },
  watch: {
  },
  methods: {
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
    /*height: 100vh;*/
    padding-bottom: 1.33rem;
    @include e(title) {
      font-size: 0.43rem;
      color: #333333;
      font-weight: bold;
      padding: 0.53rem 0.53rem;
    }
    @include e(info){
      position: relative;
      padding: 0 0.53rem;
      @include m(job) {
        padding: 0 10px;
        @include e(title) {
          font-size: 14px;
          color: #666666;
          padding: 10px 0;
        }
        @include e(content) {
          margin-top: 0.40rem;
          textarea {
            border: 1px solid #F5F5F5;
            outline: 0;
            line-height: 1.6;
            font-size: inherit;
            width: 100%;
          }
        }
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
