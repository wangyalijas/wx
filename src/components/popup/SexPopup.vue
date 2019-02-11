<template>
  <mt-popup
    lockScroll="true"
    position="bottom"
    v-model="sexSwitch"
    @click.native="event => event.stopPropagation()">
    <mt-picker :slots="sexPicker" :show-toolbar="true" ref="sexPicker" value-key="label">
            <span @click="handleSexCancel"
                  class="mint-datetime-action mint-datetime-cancel">取消</span>
      <span @click="handleSexConfirm"
            class="mint-datetime-action mint-datetime-confirm">确认</span>
    </mt-picker>
  </mt-popup>
</template>

<script>
export default {
  name: 'SexPopup',
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
    };
  },
  watch: {
    sexSwitch: {
      handler(val) {
        if (val) {
          // 阻止默认事件
          document.getElementsByTagName('body')[0].addEventListener('touchmove', (e) => {
            e.preventDefault();
          }, { passive: false });
        } else {
          // 打开默认事件
          document.getElementsByTagName('body')[0].addEventListener('touchmove', (e) => {
            e.returnValue = true;
          }, { passive: false });
        }
      },
    },
  },
  methods: {
    handleSexCancel() {
      this.sexSwitch = false;
    },
    handleSexConfirm() {
      // this.$set(this.resume.resume, 'genderType', this.$refs.sexPicker.getValues()[0].id);
      this.emitInputEvent(this.$refs.sexPicker.getValues()[0].id);
      this.sexSwitch = false;
    },
    open() {
      this.sexSwitch = true;
    },
    emitInputEvent(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

</style>
