<template>
  <div>
    <div class="job-resume" v-if="resume">
      <div class="job-resume__title">个人信息</div>
      <div class="job-resume__info">
        <mt-field label="姓名" placeholder="请填写姓名" v-model="resume.resume.name"></mt-field>
        <mt-cell title="性别" @click.native="openPopUp">
          <span style="font-size: 14px">
            {{handleGenderType(resume.resume.genderType)
              ? handleGenderType(resume.resume.genderType): '请选择'}}
          </span>
        </mt-cell>
        <mt-field
        label="电话号码"
        placeholder="请填写您的电话号码"
        type="tel"
        v-model="resume.resume.phone"
        ></mt-field>
        <mt-field
        label="电子邮件"
        placeholder="请输入电子邮件"
        type="email"
        v-model="resume.resume.email"
        ></mt-field>
        <mt-cell title="参加工作年月" @click.native="openPicker">
          <span style="font-size: 14px">
            {{resume.resume.workYear ? resume.resume.workYear: '请选择'}}
          </span>
        </mt-cell>
      </div>
      <div class="job-resume__education">
        <div class="job-resume__education--title">教育经历</div>
        <div class="job-resume__education--main">
        <template  v-for="(item, index) in resume.educations">
          <div class="job-resume__education--main__item" :key="index">
            <div class="job-resume__education--main__item--title">{{item.school}}</div>
            <div class="job-resume__education--main__item--description">{{item.major}}</div>
            <div class="job-resume__education--main__item--time">{{item.startTime}}</div>
          </div>
        </template>
        </div>
        <div
        class="job-resume__education--button"
        @click="handleRouter('JobEducation')">
        + 添加教育经历
        </div>
      </div>
      <div class="job-resume__education">
        <div class="job-resume__education--title">工作经历</div>
        <div class="job-resume__education--main">
          <template  v-for="(item, index) in resume.works">
            <div class="job-resume__education--main__item" :key="index">
              <div class="job-resume__education--main__item--title">{{item.jobName}}</div>
              <div class="job-resume__education--main__item--description">{{item.major}}</div>
              <div class="job-resume__education--main__item--time">{{item.startTime}}</div>
            </div>
          </template>
        </div>
        <div class="job-resume__education--button"
             @click="handleRouter('JobExperience')">+ 添加工作经历</div>
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
    <mt-popup position="bottom" v-model="sexSwitch">
      <mt-picker :slots="sexPicker" :show-toolbar="true" ref="sexPicker" value-key="label">
            <span @click="handleSexCancel"
                  class="mint-datetime-action mint-datetime-cancel">取消</span>
        <span @click="handleSexConfirm"
              class="mint-datetime-action mint-datetime-confirm">确认</span>
      </mt-picker>
    </mt-popup>

    <mt-datetime-picker
      ref="picker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataFormat from '../../util/dataFormat';

export default {
  name: 'JobResume',
  data() {
    return {
      sexSwitch: false,
      sexPicker: [
        {
          flex: 1,
          values: [
            {
              label: '男',
              id: 0,
            },
            {
              label: '女',
              id: 1,
            },
            {
              label: '其他',
              id: 2,
            },
          ],
          className: 'slot1',
          textAlign: 'center',
        },
      ],
      isGetData: false,
    };
  },
  computed: {
    ...mapGetters({
      gender: 'handleGender',
      resume: 'job/handleResume',
    }),
    startDate() {
      return new Date(new Date().getFullYear() - 60, 0, 1);
    },
    endDate() {
      return new Date();
    },
  },
  methods: {
    handleGenderType(data) {
      return this.gender.filter(item => item.id === data).shift().description;
    },
    openPicker() {
      this.$refs.picker.open();
    },
    openPopUp() {
      this.sexSwitch = true;
    },
    handleSexCancel() {
      this.sexSwitch = false;
    },
    handleSexConfirm() {
      this.$set(this.resume.resume, 'genderType', this.$refs.sexPicker.getValues()[0].id);
      this.sexSwitch = false;
    },
    handleConfirm(res) {
      this.$set(this.resume.resume, 'workYear', dataFormat(res, 'yyyy-MM-dd'));
    },
    getResume() {
      this.$indicator.open();
      this.$store.dispatch('job/getResume').then(() => {
        this.$indicator.close();
      });
    },
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === 'JobEducation' || from.name === 'JobExperience') {
      next();
    } else {
      next((vm) => {
        vm.isGetData = true;
      });
    }
  },
  created() {
    this.$nextTick(() => {
      console.log(this.isGetData);
      if (this.isGetData) {
        this.getResume();
      }
    });
  },
  components: {
  },
};
</script>

<style lang="scss">
  .mint-popup{
    width: 100%;
  }
  .mint-field-core{
    text-align: right;
  }
  .picker-toolbar {
    height: 1.07rem;
    border-bottom: solid 1px #eaeaea;
  }
.opcity {
  opacity: 0;
}
.mint-cell{
  .mint-cell-wrapper{
    .mint-cell-title{
      text-align: left;
      font-size: 14px;
      color: #666666;
    }
    .mint-cell-value .mint-field-core{
      text-align: right;
      margin-right: 0.27rem;
      font-size: 14px;
      color: #333333;
    }
  }
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
  }
  @include e(education) {
    padding:0 0.53rem;
    position: relative;
    border-bottom: 0.03rem solid #F5F5F5;
    @include m(title) {
      font-size: 0.43rem;
      color: #333333;
      font-weight: bold;
      padding: 0.40rem  0.27rem 0.27rem;
    }
    @include m(main) {
      padding: 0 0.27rem;
      @include e(item){
        position: relative;
        height: 1.20rem;
        margin-top: 0.27rem;
        @include m(title) {
          font-size: 0.37rem;
          color: #666666;
          font-weight: bold;
          position: absolute;
          top: 0;
          left: 0;
        }
        @include m(description) {
          font-size: 0.35rem;
          color: #999999;
          position: absolute;
          bottom: 0;
          left: 0;
        }
        @include m(time) {
          font-size: 0.35rem;
          color: #999999;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    @include m(button) {
      background: #FFFFFF;
      box-shadow: 0 0 8px 0 rgba(149,177,224,0.35);
      border-radius: 20.5px;
      font-size: 0.37rem;
      color: #4982E2;
      margin-top: 0.80rem;
      margin-left: 2.20rem;
      width: 4.40rem;
      height: 1.09rem;
      text-align: center;
      line-height:  1.09rem;
      margin-bottom: 0.80rem;
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
      border-radius: 12px;
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
    width: 100%;
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
