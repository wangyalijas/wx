<template>
  <div class="education">
    <div class="education__title">教育经历</div>
    <div class="education__info">
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
      <mt-field
      label="学校"
      placeholder="请填写毕业院校"
      v-model="form.school"
      v-validate="'required'"
      name="school"
      :class="{'is-danger': errors.first('school')}"></mt-field>
      <mt-field
      label="专业"
      placeholder="请填写专业"
      v-model="form.major"
      v-validate="'required'"
      name="major"
      :class="{'is-danger': errors.first('major')}"></mt-field>
      <mt-cell title="学历" @click.native="openPopUp">
          <span style="font-size: 14px">
            {{ transformationEducationType(form.educationType) }}
          </span>
      </mt-cell>
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
    <mt-popup position="bottom" v-model="educationTypeSwitch">
      <mt-picker
      :slots="educationTypePicker"
      :show-toolbar="true"
      ref="educationTypePicker"
      value-key="description">
          <span @click="handleEducationTypeCancel"
                  class="mint-datetime-action mint-datetime-cancel">取消</span>
          <span @click="handleEducationTypeConfirm"
              class="mint-datetime-action mint-datetime-confirm">确认</span>
      </mt-picker>
    </mt-popup>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import dataFormat from '../../util/dataFormat';

export default {
  name: 'JobEducation',
  props: {
  },
  data() {
    return {
      data: null,
      form: {
        startTime: '', // 开始时间
        endTime: '', // 结束时间
        school: '', // 学校
        major: '', // 专业
        educationType: null, // 学历
      },
      educationTypeSwitch: false,
    };
  },
  computed: {
    ...mapGetters({
      educationType: 'handleEducationType',
    }),
    educationTypePicker() {
      return [
        {
          flex: 1,
          values: this.educationType,
          className: 'slot1',
          textAlign: 'center',
        },
      ]
    },
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
    openStartPicker() {
      this.$refs.startPicker.open();
    },
    openEndPicker() {
      this.$refs.endPicker.open();
    },
    openPopUp() {
      this.educationTypeSwitch = true;
    },
    transformationEducationType(data) {
      const result = this.educationType.filter(item => item.id == data).shift();
      return result ? result.description : '请选择学历';
    },
    handleStartPickerConfirm(res) {
      this.$set(this.form, 'startTime', dataFormat(res, 'yyyy-MM-dd'));
    },
    handleEndPickerConfirm(res) {
      this.$set(this.form, 'endTime', dataFormat(res, 'yyyy-MM-dd'));
    },
    handleEducationTypeConfirm() {
      this.$set(this.form, 'educationType', this.$refs.educationTypePicker.getValues()[0].id);
      this.educationTypeSwitch = false;
    },
    handleEducationTypeCancel() {
      this.educationTypeSwitch = false;
    },
    postResume() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return this.$toast('格式有误！');
        }
        if(this.data.hasOwnProperty('id')) {
          this.$store.dispatch('resume/putResumeEducation', this.form).then((res) => {
            if(res.state) {
              this.$store.commit('resume/modifyEducation', {form: this.form, data: this.data});
              this.handleRouter('JobResume')
            }
          });
        } else {
          this.$store.dispatch('resume/postResumeEducation', this.form ).then((res) => {
            if(res.state) {
              this.$store.commit('resume/settingNewEducation', Object.assign(this.form, {id: res.id}));
              this.handleRouter('JobResume')
            }
          });
        }
      });
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
