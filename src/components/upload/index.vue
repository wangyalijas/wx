<template>
  <div class="upload">
    <div class="upload--img">
      <template v-for="(item, index) in data">
        <div :key="index" class="upload--img__item"
             v-longtap="callback">
          <img :src="item.address" alt="">
        </div>
      </template>
      <div
      class="upload--button"
      @click="() => $refs.inputFile.click()">+</div>
    </div>
    <div class="upload--tip">提示：图片必须小于2M</div>
    <input
      type="file"
      @change="handleInputChange"
      style="display: none"
      ref="inputFile"
      accept=“image/*”>
  </div>
</template>

<script>

export default {
  name: 'upload',
  props: {
    data: Array,
  },
  methods: {
    handleInputChange(event) {
      const file = event.target.files[0];
      const imgMasSize = 1024 * 1024 * 2; // 2MB

      // 检查文件类型
      if (['jpeg', 'png', 'gif', 'jpg'].indexOf(file.type.split('/')[1]) < 0) {
        // 自定义报错方式
        // Toast.error("文件类型仅支持 jpeg/png/gif！", 2000, undefined, false);
        return this.$toast('文件类型仅支持 jpeg/png/gif！');
      }

      // 文件大小限制
      if (file.size > imgMasSize) {
        // 文件大小自定义限制
        // Toast.error("文件大小不能超过10MB！", 2000, undefined, false);
        return this.$toast('文件大小不能超过2MB');
      }
      return this.transformFileToFormData(file);
    },
    transformFileToFormData(file) {
      const formData = new FormData();
      // 自定义formData中的内容
      // type
      formData.append('type', file.type);
      // size
      formData.append('size', file.size || 'image/jpeg');
      // name
      formData.append('name', file.name);
      // lastModifiedDate
      formData.append('lastModifiedDate', file.lastModifiedDate);
      // append 文件
      formData.append('file', file);
      // 上传图片
      this.uploadImg(formData);
    },
    uploadImg(formData) {
      this.$store.dispatch('resume/postResumeAttachment', formData).then((res) => {
        if (res.state) {
          console.log(res);
          this.$toast('上传成功！');
        }
      });
    },
    callback(e, el, vNode) {
      console.log(vNode.key, 1)
      const index = vNode.key;
      this.$toast('长按');
      this.$store.dispatch('resume/deleteResumeAttachment', this.data[`${index}`].id).then((res) => {
        if (res.state) {
          console.log(res);
          this.$toast('删除成功！');
        }
      });
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
      justify-content:left;
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
          border-radius: 12px;
          width: 100%;
          height: 100%;
          pointer-events: none;
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
