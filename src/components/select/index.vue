<template>
  <div>
    <div class="select">
      <div class="select__header" @click="toggle">
        <span class="select__header--title" :class="{'green': isOpen}" >{{title}}</span>
        <span class="select__header--arrow" :class="[{'rotate': isOpen}, {'green': isOpen}]"></span>
      </div>
    </div>
    <ul class="content" :class="{'open': isOpen}" :style="{height: whatHeight}">
      <template v-for="(item, index) in options">
        <li
          :key="index"
          class="content--option"
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
    prop: {
      type: Object,
      default() {
        return {
          id: 'id',
          label: 'description',
        };
      },
    },
    value: {
      type: String,
      default: '全部',
    },
    options: [Object, Array],
  },
  data() {
    return {
      isOpen: false,
      selectedItemIndex: null,
    };
  },
  mounted() {
    const eventType = 'click';
    const handler = (event) => {
      if (this.$el.contains(event.target)) {
        // eslint-disable-next-line
        console.log('点击在组件内', this);
      } else {
        // eslint-disable-next-line
        console.log('点击在组件外', this);
        this.isOpen = false;
      }
    };
    document.addEventListener(eventType, handler);
    this.$once('hook:destroyed', () => {
      document.removeEventListener(eventType, handler);
    });
  },
  computed: {
    whatHeight() {
      if (this.options.length <= 3) {
        return 'height: 2.67rem;';
      }
      return 'height: 6.67rem;';
    },
  },
  watch: {
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
      this.$emit('change', item);
    },
    initSelectedItemIndex() {
      this.selectedItemIndex = this.options.map(item => item[`${this.prop.label}`]).indexOf(this.value);
    },
  },
  created() {
    this.$nextTick(() => {
      this.initSelectedItemIndex();
    });
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
      text-align: center;
      @include m(title) {
        font-size: 0.37rem;
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
  }
  .content {
    width: 10rem;
    position: absolute;
    left: 0;
    z-index: 500;
    overflow-y: auto;
    font-size: 0.43rem;
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
      line-height: 0.9rem;
      text-indent: 0.53rem;
      &.selected {
        color: #90D1FC;
      }
    }
  }

</style>
