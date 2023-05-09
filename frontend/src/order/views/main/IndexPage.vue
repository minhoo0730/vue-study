<template>
  <div class="main-view">
    <div class="visual-img">제품 이미지영역</div>
    <div class="slogan" @click.prevent="$router.push('/list')">
      <h2 class="main-title">매장을 이용하기 위해서 화면을 터치하세요.</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '@/style/order/views/main.css';
</style>
