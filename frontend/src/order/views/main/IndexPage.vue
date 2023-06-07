<template>
  <v-layout>
    <v-row no-gutters>
      <v-col>
        <div class="visual-img">제품 이미지영역</div>
        <div class="slogan bg-deep-purple-accent-4" @click.prevent="$router.push('/order/list')">
          <h2 class="main-title">매장을 이용하기 위해서 화면을 터치하세요.</h2>
        </div>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// @import '@/style/order/views/main.scss';
</style>
