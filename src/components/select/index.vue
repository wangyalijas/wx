<template>
  <div class="select">
    <div class="select__header" @click="toggle">
      <span class="select__header--title">{{title}}</span>
      <span class="select__header--arrow" :class="{'rotate': isOpen}"></span>
    </div>
    <ul class="select__content" :class="{'open': isOpen}">
      <template v-for="(item, index) in options">
        <li :key="index" class="select__content--option">{{item}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wxSelect',
  props: {
    title: String,
    options: Array,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
  .select {
    z-index: 10;
    @include e(header) {
      min-width: 3.33rem;
      min-height: 1.33rem;
      line-height: 1.33rem;
      font-size: 0.37rem;
      color: #666666;
      background: #ffffff;
      @include m(title) {
      }
      @include m(arrow) {
        display: inline-block;
        margin-left: 0.13rem;
        width: 0.27rem;
        height: 0.16rem;
        background: url("../../../public/icon/arrow.svg") no-repeat 100% 100%;
        transition: .2s;
        &.rotate {
          transform: rotate(180deg)
        }
      }
    }
    @include e(content) {
      font-size: 0.37rem;
      color: #606266;
      transition: .2s;
      display: none;
      z-index: 10000;
      background: #ffffff;
      &.open {
        display: block;
      }
      @include m(option) {
        line-height: 0.6rem;
      }
    }
  }
</style>
