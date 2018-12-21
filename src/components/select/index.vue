<template>
  <div class="select">
    <div class="select__header" @click="toggle">
      <span class="select__header--title" :class="{'green': isOpen}" >{{title}}</span>
      <span class="select__header--arrow" :class="[{'rotate': isOpen}, {'green': isOpen}]"></span>
    </div>
    <ul class="select__content" :class="{'open': isOpen}">
      <template v-for="(item, index) in options">
        <li
        :key="index"
        class="select__content--option"
        :class="isSelected(index)"
        @click="handleClick(item, index)">{{item[`${prop.label}`]}}</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wxSelect',
  props: {
    title: String,
    prop: Object,
    options: [Object, Array],
  },
  data() {
    return {
      isOpen: false,
      selectedItemIndex: null,
    };
  },
  computed: {
  },
  methods: {
    isSelected(index) {
      if (index === this.selectedItemIndex) {
        return 'selected';
      }
      return '';
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
    handleClick(item, index) {
      this.selectedItemIndex = index;
      this.handleEmit(item);
      this.toggle();
    },
    handleEmit(item) {
      this.$emit('change', item[`${this.prop.id}`]);
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
      text-indent: 0.53rem;
      @include m(title) {
      &.green {
        color: #90D1FC;
      }
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
        &.green {
          color: #90D1FC;
        }
      }
    }
    @include e(content) {
      height: 2.67rem;
      background: pink;
      overflow-y: auto;
      font-size: 0.37rem;
      color: #606266;
      transition: .2s;
      display: none;
      z-index: 10000;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      padding: 10px 0;
      max-height: 5.33rem;
      overflow-y: auto;
      &.open {
        display: block;
      }
      @include m(option) {
        line-height: 0.7rem;
        text-indent: 0.53rem;
        &.selected {
          color: #90D1FC;
        }
      }
    }
  }
</style>
