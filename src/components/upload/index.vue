<template>
  <div class="upload">
    <div class="upload--img">
      <template v-for="(item, index) in data">
        <div :key="index" class="upload--img__item">
          <img :src="item.address" alt="">
        </div>
      </template>
      <div
      class="upload--button"
      @click="() => $refs.inputFile.click()">+</div>
    </div>
    <div class="upload--tip">提示：图片必须小于2M</div>
    <input type="file" @change="processFile" style="display: none" ref="inputFile">
  </div>
</template>

<script>
export default {
  name: 'upload',
  props: {
    data: Array,
  },
  methods: {
    processFile(res) {
      console.log(res);
    },
  },
};
</script>

<style scoped lang="scss">
  .upload {
    width: 100%;
    @include m(img) {
      display: flex;
      flex-wrap: wrap;
      align-items:center;
      justify-content:center;
      width: 100%;
      @include e(item) {
        width: 1.49rem;
        height: 1.49rem;
        background: pink;
        box-shadow: 0 0 0.21rem 0 rgba(149,177,224,0.35);
        border-radius: 12px;
        margin-right: 0.27rem;
        margin-top: 0.27rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    @include m(button) {
      background: #FFFFFF;
      box-shadow: 0 0 0.21rem 0 rgba(149,177,224,0.35);
      border-radius: 12px;
      font-size: 0.6rem;
      color: #4982E2;
      width: 1.49rem;
      height: 1.49rem;
      text-align: center;
      line-height: 1.49rem;
      margin-top: 0.27rem;
    }
    @include m(tip) {
      font-size: 0.37rem;
      color: #666666;
      width: 100%;
      text-align: center;
      margin-top: 0.53rem;
    }
  }
</style>
