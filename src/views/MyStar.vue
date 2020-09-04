<template>
  <div class="my-star">
      <hm-header>我的收藏</hm-header>
      <div class="list">
          <div class="item">
              <div class="info">
                  <div class="title">林志玲穿透视黑纱裙米兰看秀腹部微隆显孕味</div>
                  <div class="user">
                      <span>火星时报</span>
                      <span>52跟帖</span>
                  </div>
              </div>
              <div class="img">
                  <img src="../assets/1.jpg" alt="">
              </div>
          </div>
          <div class="item">
              <div class="info">
                  <div class="title">林志玲穿透视黑纱裙米兰看秀腹部微隆显孕味</div>
                  <div class="user">
                      <span>火星时报</span>
                      <span>52跟帖</span>
                  </div>
              </div>
              <div class="img">
                  <img src="../assets/1.jpg" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  .info {
    flex: 1;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .user {
      color: #666;
      font-size: 14px;
    }
  }
  .img {
    img {
      width: 120px;
      height: 74px;
      // 作用和background-size类似，，设置图片的大小
      // cover的缺点：保证图片覆盖完整的大小， 缺点：会有一部分被截取掉
      // contain: 保证图片被完整的显示，会有留白
      object-fit: cover;
    }
  }
}
</style>
