<template>
  <mt-popup
  position="bottom"
  v-model="educationTypeSwitch"
  @click.native="event => event.stopPropagation()">
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'MajorPopup',
  data() {
    return {
      educationTypeSwitch: false,
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
      ];
    },
  },
  watch: {
    educationTypeSwitch: {
      handler(val) {
        const divR = document.getElementById('scroll');
        if (val) {
          // 阻止默认事件
          divR.style.overflowY = 'hidden';
        } else {
          // 打开默认事件
          divR.style.overflowY = '';
        }
      },
    },
  },
  methods: {
    handleEducationTypeConfirm() {
      this.emitInputEvent(this.$refs.educationTypePicker.getValues()[0].id);
      this.educationTypeSwitch = false;
    },
    handleEducationTypeCancel() {
      this.educationTypeSwitch = false;
    },
    open() {
      this.educationTypeSwitch = true;
    },
    emitInputEvent(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

</style>
