<template>
  <mt-datetime-picker
    @click.native="event => event.stopPropagation()"
    :ref="pickerName"
    type="date"
    :startDate="startDate"
    :endDate="endDate"
    year-format="{value} 年"
    month-format="{value} 月"
    date-format="{value} 日"
    @confirm="handleConfirm">
  </mt-datetime-picker>
</template>

<script>

export default {
  name: 'DatetimePicker',
  props: {
    pickerName: String,
    startDate: {
      required: false,
    },
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
  methods: {
    handleConfirm(date) {
      // if (!(date instanceof Date)) {
      //   return;
      // }
      this.emitInputEvent(this.valueTransformer(date));
    },
    open() {
      this.$refs[`${this.pickerName}`].open();
    },
    emitInputEvent(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style scoped>

</style>
