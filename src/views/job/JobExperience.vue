<template>
  <div class="education">
    <div class="education__title">工作经历</div>
    <div class="education__info">
      <mt-field label="公司名称" placeholder="请输入公司名称" v-model="form.company"></mt-field>
      <mt-field label="职位名称" placeholder="请输入职位名称" v-model="form.jobName"></mt-field>
      <mt-field label="所在行业" placeholder="请输入行业" v-model="form.industry"></mt-field>
      <mt-cell title="开始时间" @click.native="openStartPicker">
          <span style="font-size: 14px">
            {{form.startTime ? form.startTime: '请选择'}}
          </span>
      </mt-cell>
      <mt-cell title="结束时间" @click.native="openEndPicker">
          <span style="font-size: 14px">
            {{form.endTime? form.endTime: '请选择'}}
          </span>
      </mt-cell>
      <div class="education__info--job fixed-textarea">
          <div class="education__info--job__title">
            工作内容
          </div>
          <div class="education__info--job__content">
            <textarea
            @input="packUpKeyBoard()"
            placeholder="请填写工作内容"
            cols="30"
            rows="6"
            v-model="form.jobDuty"></textarea>
          </div>
        </div>
      <div class="education__info--job">
        <div class="education__info--job__title">
          工作业绩
        </div>
        <div class="education__info--job__content" style="margin-bottom: 0.80rem;">
          <textarea
          @blur="packUpKeyBoard()"
          placeholder="请填写工作业绩"
          cols="30"
          rows="6"
          v-model="form.jobAchievement"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="footer" @click="postResume">
      <span class="footer-value">提交</span>
    </div>
    <mt-datetime-picker
      ref="startPicker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleStartPickerConfirm">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="endPicker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleEndPickerConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
/* eslint-disable */
import dataFormat from '../../util/dataFormat';

export default {
  name: 'JobExperience',
  data() {
    return {
      data: null,
      form: {
        company: '', // 公司
        industry: '', // 行业
        jobName: '', // 职位名称
        startTime: '', // 开始时间
        endTime: '', // 结束时间
        jobDuty: '', // 工作内容
        jobAchievement: '', // 工作业绩
      },
      educationTypeSwitch: false,
    };
  },
  computed: {
    startDate() {
      return new Date(new Date().getFullYear() - 60, 0, 1);
    },
    endDate() {
      return new Date();
    },
  },
  watch: {
    data: {
      handler(value) {
        if (typeof value !== 'object') {
          return;
        }
        if (value.hasOwnProperty('id')) {
          Object.assign(this.form, this.data);
        }
      },
      // 深度观察
      deep: true,
    },
  },
  methods: {
    packUpKeyBoard() {
      window.scroll(0, 500);
    },
    postResume() {
      console.log(this.data)
      if(this.data.hasOwnProperty('id')) {
        this.$store.dispatch('resume/putResumeWork', this.form).then((res) => {
          if(res.state) {
            this.$store.commit('resume/modifyWork', {form: this.form, data: this.data});
            this.handleRouter('JobResume')
          }
        });
      } else {
        this.$store.dispatch('resume/postResumeWork', this.form ).then((res) => {
          if(res.state) {
            this.$store.commit('resume/settingNewWork', Object.assign(this.form, {id: res.id}));
            this.handleRouter('JobResume')
          }
        });
      }
    },
    openStartPicker() {
      this.$refs.startPicker.open();
    },
    openEndPicker() {
      this.$refs.endPicker.open();
    },
    handleStartPickerConfirm(res) {
      this.$set(this.form, 'startTime', dataFormat(res, 'yyyy-MM-dd'));
    },
    handleEndPickerConfirm(res) {
      this.$set(this.form, 'endTime', dataFormat(res, 'yyyy-MM-dd'));
    },

  },
  created() {
    this.$nextTick(() => {
      this.data = this.$route.query;
    });
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
        padding: 0 0.27rem;
        @include e(title) {
          font-size: 14px;
          color: #666666;
          padding: 0.27rem 0;
        }
        @include e(content) {
          margin-top: 0.40rem;
          width: 100%;
          textarea {
            -webkit-appearance: none;
            outline: none;
            border: 0.03rem solid #F5F5F5;
            outline: 0;
            line-height: 1.6;
            padding: 0.5rem;
            width: calc(100% - 1rem);
            font-size: 14px;
            color: #666666;
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
