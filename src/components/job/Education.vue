<template>
  <div class="education" v-if="insideIsShowEducation">
    <div class="education__title">教育经历</div>
    <div class="education__info">
      <mt-field label="开始时间" placeholder="请选择"></mt-field>
      <mt-field label="结束时间" placeholder="请选择"></mt-field>
      <mt-field label="学校" placeholder="请填写毕业院校" type="tel"></mt-field>
      <mt-field label="专业" placeholder="请填写专业" type="email"></mt-field>
      <mt-field label="学历" placeholder="请选择学历" type="date"></mt-field>
    </div>
    <div class="footer">
      <span class="footer-value" @click="writed">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education',
  props: {
    isShowEducation: Boolean,
  },
  data() {
    return {
      insideIsShowEducation: false,
    };
  },
  watch: {
    isShowEducation() {
      this.initialInsideValue();
    },
  },
  methods: {
    initialInsideValue(value = this.isShowEducation) {
      this.insideIsShowEducation = value;
    },
    writed() {
      this.$emit('writedEducation', true);
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
