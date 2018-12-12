<template>
  <div class="campus-register">
    <main class="main">
      <mt-field label="姓名"
                :class="{empty: requiredDataArray[0].isComplete}"
                placeholder="请填写姓名"
                v-model="submitInfo.name"></mt-field>
      <mt-field label="身份证"
                @blur.native.capture="checkValueFormat('cardId')"
                :class="{empty: requiredDataArray[1].isComplete}"
                placeholder="请填写身份证"
                v-model="submitInfo.cardId"></mt-field>
      <mt-field label="电话"
                @blur.native.capture="checkValueFormat('phoneNum')"
                :class="{empty: requiredDataArray[2].isComplete}"
                placeholder="请填写电话号码"
                v-model="submitInfo.phoneNum"></mt-field>
      <mt-field label="邮箱"
                @blur.native.capture="checkValueFormat('email')"
                :class="{empty: requiredDataArray[3].isComplete}"
                placeholder="请填写邮箱" type="email"
                v-model="submitInfo.email"></mt-field>
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
      submitInfo: {
        name: '',
        cardId: '',
        phoneNum: '',
        email: '',
      },
      requiredDataArray: [{
        name: 'name',
        isComplete: false,
      }, {
        name: 'cardId',
        isComplete: false,
      }, {
        name: 'phoneNum',
        isComplete: false,
      }, {
        name: 'email',
        isComplete: false,
      }],
      ReGEXP: {
        cardId: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        phoneNum: /^1[34578]\d{9}$/,
        email: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,
      },
    };
  },
  computed: {
  },
  components: {
    TipsDialog,
  },
  watch: {
  },
  filters: {
  },
  methods: {
    checkValueFormat(type) {
      /**
       * @author xiangjj
       * @date 2018/12/12
       * @Description: 格式正则验证
       * */
      const regexp = this.ReGEXP[type];
      if (this.submitInfo[type].replace(/\s+/g, '').length > 0 && !regexp.test(this.submitInfo[type])) {
        this.$toast('格式输入错误！');
        this.$set(this.submitInfo, type, '');
      }
    },
    submit() {
      if (this.checkComplete()) {
        this.$set(this.statusObj, 'flag', true);
      }
    },
    checkComplete() {
      /**
       * @author xiangjj
       * @date 2018/12/12
       * @Description: 检验输入完整
       * */
      this.requiredDataArray.forEach((value) => {
        this.$set(value, 'isComplete', false);
        // 规则禁止直接在对象实例上调用 Object.prototype 的一些方法
        if (Object.prototype.hasOwnProperty.call(this.submitInfo, value.name)) {
          if (this.submitInfo[value.name].replace(/\s+/g, '') === '') {
            this.$set(value, 'isComplete', true);
          }
        }
      });
      const isFlag = this.requiredDataArray.every(value => value.isComplete === false);
      return isFlag;
    },
    handleDialog() {
      /**
       * @author xiangjj
       * @date 2018/12/12
       * @Description: 弹框回传
       * */
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
    height: 100vh;
    .main{
      position: relative;
      padding: 0.53rem 0.53rem 7.20rem 0.53rem;
      .mint-cell{
        margin-bottom: 0.27rem;
        &.empty{
          border: 0.03rem solid rgba(255, 0, 0, 0.3) !important;
          box-shadow: 0 0 9px 0 rgba(255, 0, 0, 0.3) !important;
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
