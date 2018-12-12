<template>
  <div class="campus-register">
    <main class="main">
      <mt-field label="姓名" placeholder="请填写姓名"></mt-field>
      <mt-field label="身份证" placeholder="请填写身份证"></mt-field>
      <mt-field label="电话" placeholder="请填写电话号码" class="empty"></mt-field>
      <mt-field label="邮箱" placeholder="请填写邮箱" type="email"></mt-field>
    </main>
    <div class="footer" @click="submit">
      <span class="footer-value">提交</span>
    </div>
    <tips-dialog :statusObj="statusObj" @handle-dialog="handleDialog"></tips-dialog>
  </div>
</template>

<script>
import TipsDialog from '@/components/common/tipsDialog';

export default {
  name: 'campusRegister',
  data() {
    return {
      statusObj: {
        name: '提交成功',
        status: 'success',
        icon: 'icon-success',
        flag: false,
      },
    };
  },
  computed: {
  },
  components: {
    TipsDialog,
  },
  filters: {
  },
  methods: {
    submit() {
      this.$set(this.statusObj, 'flag', true);
    },
    handleDialog() {
      this.$set(this.statusObj, 'flag', false);
    },
  },
};
</script>
<style lang="scss">
  .mint-indicator{
    .mint-indicator-wrapper{
      opacity: 0.9;
      background: #464646;
      border-radius: 8px;
      padding: 16px 42px !important;
      .mint-indicator-text{
        font-size: 14px;
        color: #FFFFFF;
      }
    }
  }
  .campus-register{
    position: relative;
    background: #ffffff;
    .main{
      position: relative;
      padding: 0.53rem 0.53rem 7.20rem 0.53rem;
      .mint-cell{
        &.empty{
          .mint-cell-wrapper{
          }
        }
        .mint-cell-wrapper{
          .mint-cell-title{
            text-align: left;
          }
          .mint-cell-value .mint-field-core{
            text-align: right;
            margin-right: 0.27rem;
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
