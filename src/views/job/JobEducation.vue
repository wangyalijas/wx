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
      <mt-field label="学校" placeholder="请填写毕业院校" v-model="form.school"></mt-field>
      <mt-field label="专业" placeholder="请填写专业" v-model="form.major"></mt-field>
      <!--<mt-field label="学历" placeholder="请选择学历" v-model="form.educationType"></mt-field>-->
      <mt-cell title="学历" @click.native="openPopUp">
          <span style="font-size: 14px">
            {{handleEducationType(form.educationType)
              ? handleEducationType(form.educationType): '请选择学历'}}
          </span>
      </mt-cell>
    </div>
    <div class="footer">
      <span class="footer-value" @click="handleRouter('JobResume')">提交</span>
    </div>
    <mt-datetime-picker
      ref="startPicker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
    <mt-datetime-picker
      ref="endPicker"
      type="date"
      :startDate="startDate"
      :endDate="endDate"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm">
    </mt-datetime-picker>
    <mt-popup position="bottom" v-model="educationTypeSwitch">
      <mt-picker
      :slots="educationTypePicker"
      :show-toolbar="true"
      ref="educationTypePicker"
      value-key="label">
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
      educationTypePicker: [
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
    };
  },
  computed: {
    ...mapGetters({
      educationType: 'handleEducationType',
    }),
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
    handleEducationType(data) {
      // return this.gender.filter(item => item.id === data).shift().description;
    },
    handleConfirm() {
    },
    handleEducationTypeConfirm() {
    },
    handleEducationTypeCancel() {
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
