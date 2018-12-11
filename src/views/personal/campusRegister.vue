<template>
  <div class="campus-register">
    <main class="main">
      <mt-field label="姓名" placeholder="请填写姓名"></mt-field>
      <mt-field label="身份证" placeholder="请填写身份证"></mt-field>
      <mt-field label="电话" placeholder="请填写电话号码"></mt-field>
      <mt-field label="邮箱" placeholder="请填写邮箱" type="email"></mt-field>
    </main>
    <div class="footer">
      <span class="footer-value">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'campusRegister',
  data() {
    return {};
  },
  computed: {
  },
  components: {
  },
  filters: {
  },
  methods: {
  },
};
</script>
<style lang="scss">
  .campus-register{
    position: relative;
    background: #ffffff;
    .main{
      position: relative;
      padding: 0.53rem 0.53rem 7.20rem 0.53rem;
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
      }
    }
    .footer{
      position: fixed;
      bottom: 0;
      width: 10.00rem;
      height: 1.33rem;
      background: #6EA4FF;
      box-shadow: 0 -0.05rem 0.16rem 0 rgba(212,212,212,0.30);
      .footer-value{
        font-size: 0.43rem;
        color: #FFFFFF;
        line-height: 1.33rem;
      }
    }
  }
</style>
