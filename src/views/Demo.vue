<template>
  <div class="demo">
      <van-button type="primary" @click='crop'>裁剪</van-button>
      <vue-cropper
       ref="cropper"
      autoCrop
      autoCropWidth="150"
      autoCropHeight="150"
      fixed
       img='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1835845522,1643506290&fm=26&gp=0.jpg'></vue-cropper>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper'
export default {
  components: {
    VueCropper
  },
  methods: {
    // 获取裁剪后的图片的base64数据， 一般用于直接显示
    crop() {
      this.$refs.cropper.getCropData(data => {
        console.log(data)
      })
      // 获取裁剪后的图片的数据, 一般用于上传
      this.$refs.cropper.getCropBlob((data) => {
        // do something
        console.log(data)
      })
    }
  }
}
</script>

<style lang="less">
.demo {
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
