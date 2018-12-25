<template>
  <div class="education">
    <div class="education__title">教育经历</div>
    <div class="education__info">
      <mt-cell
      title="开始时间"
      @click.native="openStartPicker"
      :class="{'is-danger': errors.first('startTime')}">
          <span style="font-size: 14px">
            {{form.startTime ? form.startTime: '请选择'}}
          </span>
        <DatetimePicker
          ref="startTime"
          :pickerName="'startTime'"
          :startDate="startDate"
          :endDate="endDate"
          v-model="form.startTime"
          v-validate="'required'"
          name="startTime"
          :value-transformer="datetimeValueTransformer"></DatetimePicker>
      </mt-cell>
      <mt-cell
      title="结束时间"
      @click.native="openEndPicker"
      :class="{'is-danger': errors.first('endTime')}">
          <span style="font-size: 14px">
            {{form.endTime ? form.endTime: '请选择'}}
          </span>
        <DatetimePicker
          ref="endTime"
          :pickerName="'endTime'"
          :startDate="startDate"
          :endDate="endDate"
          v-model="form.endTime"
          v-validate="'required'"
          name="endTime"
          :value-transformer="datetimeValueTransformer"></DatetimePicker>
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
      <mt-cell
      title="学历"
      @click.native="openPopUp"
      :class="{'is-danger': errors.first('educationType')}">
          <span style="font-size: 14px">
            {{ transformationEducationType(form.educationType) }}
          </span>
      </mt-cell>
      <MajorPopup ref="educationType"
                  v-model="form.educationType"
                  v-validate="'required'"
                  name="educationType"></MajorPopup>
    </div>
    <div class="footer" @click="postResume">
      <span class="footer-value">提交</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapGetters } from 'vuex';
import dataFormat from '../../util/dataFormat';
import DatetimePicker from '../../components/DatetimePicker/index.vue';
import MajorPopup from '../../components/popup/MajorPopup.vue'
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
    datetimeValueTransformer(value) {
      return dataFormat(value, 'yyyy-MM-dd');
    },
    openStartPicker(event) {
      if (event.path[0].classList.contains('v-modal')) {
        return;
      }
      this.$refs.startTime.open();
    },
    openEndPicker(event) {
      if (event.path[0].classList.contains('v-modal')) {
        return;
      }
      this.$refs.endTime.open();
    },
    openPopUp() {
      if (event.path[0].classList.contains('v-modal')) {
        return;
      }
      this.$refs.educationType.open()
    },
    transformationEducationType(data) {
      const result = this.educationType.filter(item => item.id == data).shift();
      return result ? result.description : '请选择学历';
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
  components: {
    DatetimePicker,
    MajorPopup,
  }
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
