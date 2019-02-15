<template>
  <div id="scroll">
    <div class="job-resume" v-if="resume">
      <div class="job-resume__warning">️请保存简历后再进行职位投递！</div>
      <div class="job-resume__title">个人信息</div>
      <div class="job-resume__info">
        <mt-field
        label="姓名"
        placeholder="请填写姓名"
        v-model="resume.resume.name"
        v-validate="'required'"
        name="name"
        :class="{'is-danger': errors.first('name')}"></mt-field>
        <mt-cell
        title="性别"
        class="special-cell"
        @click.native="openPopUp"
        :class="{'is-danger': errors.first('genderType')}">
          <span style="font-size: 14px">
            {{handleGenderType(resume.resume.genderType)
              ? handleGenderType(resume.resume.genderType): '请选择'}}
          </span>
          <SexPopup ref="sexpop"
                 v-model="resume.resume.genderType"
                 v-validate="'required'"
                 name="genderType"></SexPopup>
        </mt-cell>
        <mt-field
        label="电话号码"
        placeholder="请填写您的电话号码"
        type="tel"
        v-model="resume.resume.phone"
        v-validate="'required|phone'"
        name="phone"
        :class="{'is-danger': errors.first('phone')}"
        ></mt-field>
        <mt-field
        label="电子邮件"
        placeholder="请输入电子邮件"
        type="email"
        v-model="resume.resume.email"
        v-validate="'required|email'"
        name="email"
        :class="{'is-danger': errors.first('email')}"
        ></mt-field>
        <mt-cell
        class="special-cell"
        title="参加工作年月"
        @click.native="openPicker"
        :class="{'is-danger': errors.first('workYear')}">
          <span style="font-size: 14px">
            {{resume.resume.workYear ? resume.resume.workYear: '请选择'}}
          </span>
          <DatetimePicker
          ref="workYear"
          :pickerName="'picker'"
          :startDate="startDate"
          :endDate="endDate"
          :selectValue="resume.resume.workYear"
          v-model="resume.resume.workYear"
          v-validate="'required'"
          name="workYear"
          :value-transformer="datetimeValueTransformer"></DatetimePicker>
        </mt-cell>
      </div>
      <div class="job-resume__education">
        <div class="job-resume__education--title">教育经历</div>
        <div class="job-resume__education--main">
        <template  v-for="(item, index) in resume.educations">
          <div class="job-resume__education--main__item"
          :key="index"
          @click="handleRouter('JobEducation', item)">
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
      <div class="job-resume__job">
        <div class="job-resume__job--title">工作经历</div>
        <div class="job-resume__job--main">
          <template  v-for="(item, index) in resume.works">
            <div
            class="job-resume__job--main__item"
            :key="index"
            @click="handleRouter('JobExperience', item)">
              <div class="job-resume__job--main__item--header">
                <div class="job-resume__job--main__item--header--title">{{item.company}}</div>
                <div class="job-resume__job--main__item--header--description">{{item.jobName}}</div>
                <div class="job-resume__job--main__item--header--time">{{item.startTime}}</div>
              </div>
              <div class="job-resume__job--main__item--jobDuty">
                <div class="job-resume__job--main__item--jobDuty__title">工作内容</div>
                <div class="job-resume__job--main__item--jobDuty__content"
                     v-for="(jobDutyItem, index) in handleJobDuty(item.jobDuty)"
                     :key="index">
                  {{jobDutyItem}}
                </div>
              </div>
              <div class="job-resume__job--main__item--achievement">
                <div class="job-resume__job--main__item--achievement__title">工作业绩</div>
                <div class="job-resume__job--main__item--achievement__content"
                     v-for="(jobAchievementItem, index) in handleJobDuty(item.jobAchievement)"
                     :key="index">
                  {{jobAchievementItem}}
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="job-resume__education--button"
             @click="handleRouter('JobExperience')">+ 添加工作经历</div>
      </div>
      <div class="job-resume__img">
        <div class="job-resume__img--title">附件</div>
        <div class="job-resume__img--content">
          <upload :data="resume.attachments"></upload>
        </div>
      </div>
      <div class="footer" @click="postResume">
        <span class="footer-value">保存</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import dataFormat from '../../util/dataFormat';
import upload from '../../components/upload/index.vue';
import DatetimePicker from '../../components/DatetimePicker/index.vue';
import SexPopup from '../../components/popup/SexPopup.vue';

export default {
  name: 'JobResume',
  data() {
    return {
      isGetData: false,
    };
  },
  computed: {
    ...mapGetters({
      gender: 'handleGender',
      resume: 'resume/handleResume',
    }),
    startDate() {
      return new Date(new Date().getFullYear() - 60, 0, 1);
    },
    endDate() {
      return new Date();
    },
  },
  methods: {
    handleJobDuty(data) {
      return data.split('\n');
    },
    handleGenderType(data) {
      if (String(data).length <= 0) {
        return false;
      }
      return this.gender.filter(item => item.id === data).shift().description;
    },
    openPicker(event) {
      if (event.target.classList.contains('v-modal')) {
        return;
      }
      this.$refs.workYear.open();
    },
    openPopUp(event) {
      if (event.target.classList.contains('v-modal')) {
        return;
      }
      this.$refs.sexpop.open();
    },
    datetimeValueTransformer(value) {
      return dataFormat(value, 'yyyy-MM-dd');
    },
    getResume() {
      this.$indicator.open();
      this.$store.dispatch('resume/getResume').then(() => {
        this.$indicator.close();
      });
    },
    postResume() {
      this.$validator.validateAll().then((result) => {
        if (!result) {
          return this.$toast('格式有误!');
        }
        this.$indicator.open();
        this.$store.dispatch('resume/postResume', this.resume.resume).then((res) => {
          if (res.code === 200) {
            this.$toast(res.tip);
            this.$indicator.close();
            this.getResume();
          }
        });
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
      if (this.isGetData) {
        this.getResume();
      }
    });
  },
  components: {
    upload,
    DatetimePicker,
    SexPopup,
  },
};
</script>

<style lang="scss">
#scroll{
  height: 100vh;
  .job-resume {
    position: relative;
    background: #ffffff;
    @include e(warning) {
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      width: 100%;
      background: #FDEACC;
      color: #E89000;
    }
    @include e(title) {
      font-size: 0.43rem;
      color: #333333;
      font-weight: bold;
      padding: 0.53rem 0.6rem;
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
          height: 1.20rem;
          position: relative;
          margin-top: 0.53rem;
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
    @include e(job) {
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
          margin-top: 0.80rem;
          &:first-child {
            margin-top: 0.53rem!important;
          }
          @include m(header) {
            position: relative;
            height: 1.20rem;
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
          @include m(jobDuty) {
            margin-top: 0.40rem;
            @include e(title) {
              font-size: 0.35rem;
              color: #666666;
            }
            @include e(content) {
              font-size: 0.35rem;
              color: #666666;
              margin-top: 0.27rem;
            }
          }
          @include m(achievement) {
            margin-top: 0.53rem;
            @include e(title) {
              font-size: 0.35rem;
              color: #666666;
            }
            @include e(content) {
              font-size: 0.35rem;
              color: #666666;
              margin-top: 0.27rem;
            }
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
      border-bottom: 0.03rem solid #F5F5F5;
      @include m(title) {
        margin-top: 0.53rem;
        /*margin-left: 0.53rem;*/
        font-size: 0.43rem;
        color: #333333;
        font-weight: bold;
      }
      @include m(content) {
        margin-top: 0.53rem;
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
}
</style>
