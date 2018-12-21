<template>
  <div class="campus-process-details">
    <main class="main">
      <template v-for="(status, statusIndex) in ScheduleState">
        <span class="main-sign"
              :key="statusIndex"
              v-if="detailsDataObj.scheduleState == status.id"
              :class="status.name">{{status.description}}</span>
      </template>
      <div class="main-title">{{detailsDataObj.name}}</div>
      <div class="main-info">
        <span class="main-info__item"
              v-for="(item, index) in content"
              :key="index">{{item}}</span>
      </div>
      <div class="main-plan">笔试面试安排</div>
      <div class="main-time">
        <div class="main-time-inner">
          <span class="main-time-inner__label">简历截止：</span>
          <span class="main-time-inner__value">{{detailsDataObj.resumeEndTime}}</span>
        </div>
        <div class="main-time-inner">
          <span class="main-time-inner__label">线上笔试：</span>
          <span class="main-time-inner__value">
            {{detailsDataObj.writeExamStartTime}} ~ {{detailsDataObj.writeExamEndTime}}</span>
        </div>
        <div class="main-time-inner">
          <span class="main-time-inner__label">面试：</span>
          <span class="main-time-inner__value">
            {{detailsDataObj.interviewStartTime}} ~ {{detailsDataObj.interviewEndTime}}</span>
        </div>
      </div>
    </main>
    <div class="footer" v-if="detailsDataObj.scheduleState == 0"
         @click="handleRouter('campusRegister', {campusId: detailsDataObj.id})">
      <span class="footer-value">我要报名</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'campusProcessDetails',
  data() {
    return {
      detailsDataObj: {},
    };
  },
  computed: {
    ...mapGetters({
      ScheduleState: 'handleScheduleState',
    }),
    content() {
      return this.detailsDataObj.content.split('\n');
    },
  },
  components: {
  },
  filters: {
  },
  created() {
    this.$nextTick(() => {
      this.fetchDetailsAsync();
    });
  },
  methods: {
    async fetchDetailsAsync() {
      const params = {
        id: this.$route.query.processId,
      };
      this.detailsDataObj = await this.$store.dispatch('campusProcess/getSchedule', params);
    },
  },
};
</script>
<style lang="scss">
  .campus-process-details{
    position: relative;
    background: #ffffff;
    height: 100vh;
    .main{
      position: relative;
      padding: 0.53rem 0 0 0.53rem;
      text-align: left;
      .main-sign{
        position: absolute;
        right: 2.53rem;
        font-size: 0.32rem;
        border-radius: 2px;
        padding: 0.05rem 0.24rem;
        &.NotStart{
          color: #F29B2C;
          background: #F9F5ED;
          border: 0.03rem solid #EFDAC1;
        }
        &.OnGoing{
          background: #EDF9F9;
          border: 0.03rem solid #C1EFE8;
          color: #1DB7AE;
        }
        &.End{
          background: #F0F0F0;
          border: 0.03rem solid #D0D0D0;
          color: #B2B2B2;
        }
      }
      .main-title{
        margin: 0 0 0.53rem 0;
        font-size: 0.43rem;
        color: #333333;
        font-weight: 700;
      }
      .main-info{
        font-size: 0.35rem;
        color: #666666;
        line-height: 0.75rem;
        @include e(item){
          display: block;
          max-width: 8.93rem;
          word-break: break-all;
        }
      }
      .main-plan{
        margin: 0.80rem 0 0.27rem 0;
        font-size: 0.37rem;
        color: #333333;
        font-weight: 700;
      }
      .main-time{
        font-size: 0.35rem;
        color: #666666;
        .main-time-inner{
          position: relative;
          line-height: 0.75rem;
          @include e(label){
            display: inline-block;
            text-align: right;
            position: absolute;
            width: 2.00rem;
            left: 0;
          }
          @include e(value){
            margin-left: 2.27rem;
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
      box-shadow: 0 -2px 6px 0 rgba(212,212,212,0.30);
      text-align: center;
      .footer-value{
        font-size: 0.43rem;
        color: #FFFFFF;
        line-height: 1.33rem;
      }
    }
  }
</style>
