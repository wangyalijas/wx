<template>
  <div>
    <div class="job-resume" :class="{'opcity': isShowEducation || isShowJobExperience}">
      <div class="job-resume__title">个人信息</div>
      <div class="job-resume__info">
        <mt-field label="姓名" placeholder="请填写姓名"></mt-field>
        <mt-field label="性别" placeholder="请选择"></mt-field>
        <mt-field label="电话号码" placeholder="请填写电话号码" type="tel"></mt-field>
        <mt-field label="电子邮件" placeholder="请填写电子邮件" type="email"></mt-field>
        <mt-field label="参加工作年月" placeholder="请选择" type="date" v-model="form.date"></mt-field>
      </div>
      <div class="job-resume__education">
        <div class="job-resume__education--title">教育经历</div>
        <div class="job-resume__education--button" @click="isShowEducation = true">+ 添加教育经历</div>
      </div>
      <div class="job-resume__education">
        <div class="job-resume__education--title">工作经历</div>
        <div class="job-resume__education--button"
        @click="isShowJobExperience = true">+ 添加工作经历</div>
      </div>
      <div class="job-resume__img">
        <div class="job-resume__img--title">附件</div>
        <div class="job-resume__img--button">+</div>
        <div class="job-resume__img--tip">提示：图片必须小于2M</div>
      </div>
      <div class="footer">
        <span class="footer-value">提交</span>
      </div>
    </div>
    <education
     :isShowEducation="isShowEducation"
     @writedEducation="writedEducation"></education>
    <job-experience
    :isShowJobExperience="isShowJobExperience"
    @writedJobExperience="writedJobExperience"></job-experience>
  </div>
</template>

<script>
import Education from '../../components/job/Education';
import JobExperience from '../../components/job/JobExperience';

export default {
  name: 'JobResume',
  data() {
    return {
      form: {
        date: '',
      },
      isShowEducation: false,
      isShowJobExperience: false,
    };
  },
  methods: {
    writedEducation() {
      this.isShowEducation = false;
    },
    writedJobExperience() {
      this.isShowJobExperience = false;
    },
  },
  components: {
    Education,
    JobExperience,
  },
};
</script>

<style lang="scss" scoped>
.opcity {
  opacity: 0;
}
.job-resume {
  position: relative;
  background: #ffffff;
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
  @include e(education) {
    padding:0 0.53rem;
    height: 4.03rem;
    position: relative;
    border-bottom: 0.03rem solid #F5F5F5;
    @include m(title) {
    position: absolute;
      top: 1.01rem;
      left: 0.53rem;
      font-size: 0.43rem;
      color: #333333;
      font-weight: bold;
    }
    @include m(button) {
    position: absolute;
      background: #FFFFFF;
      box-shadow: 0 0 8px 0 rgba(149,177,224,0.35);
      border-radius: 20.5px;
      font-size: 0.37rem;
      color: #4982E2;
      top: 2.13rem;
      left: 2.80rem;
      padding: 0.29rem 0.80rem;
    }
  }
  @include e(img) {
    padding:0 0.53rem 2rem;
    height: 4.03rem;
    position: relative;
    border-bottom: 0.03rem solid #F5F5F5;
    @include m(title) {
      position: absolute;
      top: 1.01rem;
      left: 0.53rem;
      font-size: 0.43rem;
      color: #333333;
      font-weight: bold;
    }
    @include m(button) {
      position: absolute;
      background: #FFFFFF;
      box-shadow: 0 0 0.21rem 0 rgba(149,177,224,0.35);
      border-radius: 0.55rem;
      font-size: 0.6rem;
      color: #4982E2;
      top: 2.13rem;
      left: 4.24rem;
      width: 1.49rem;
      height: 1.49rem;
      text-align: center;
      line-height: 1.49rem;
    }
    @include m(tip) {
      font-size: 0.37rem;
      color: #666666;
      position: absolute;
      left: 3.04rem;
      top: 3.89rem;
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
