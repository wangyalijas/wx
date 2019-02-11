<template>
  <mt-datetime-picker
    @click.native="event => event.stopPropagation()"
    :ref="pickerName"
    type="date"
    :startDate="startDate"
    :endDate="endDate"
    v-model="defaultDate"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    @visible-change="handleValueChange"
    @confirm="handleConfirm">
  </mt-datetime-picker>
</template>

<script>
import dataFormat from '../../util/dataFormat';

export default {
  name: 'DatetimePicker',
  props: {
    pickerName: String,
    startDate: {
      required: false,
    },
    selectValue: String,
    endDate: {
      required: false,
    },
    valueTransformer: {
      default() {
        return function (value, updater) {
          updater(value);
        };
      },
      type: Function,
    },
  },
  data() {
    return {
      defaultDate: '', // 默认是当前日期
    };
  },
  methods: {
    handleValueChange(val) {
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
    handleConfirm(date) {
      // if (!(date instanceof Date)) {
      //   return;
      // }
      this.emitInputEvent(this.valueTransformer(date));
    },
    open() {
      this.defaultDate = this.selectValue
        ? this.selectValue : this.datetimeValueTransformer(new Date());
      this.$refs[`${this.pickerName}`].open();
    },
    emitInputEvent(value) {
      this.$emit('input', value);
    },
    datetimeValueTransformer(value) {
      return dataFormat(value, 'yyyy-MM-dd');
    },
  },
};
</script>

<style scoped>

</style>
