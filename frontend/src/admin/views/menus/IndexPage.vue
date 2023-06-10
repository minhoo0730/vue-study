<template>
  <div id="container" class="admin">
    <div id="content" class="full-view-page">
      <h2 class="content-title">
        <span>메뉴관리</span>
      </h2>
      <div class="product-view">
        <div class="product-top">
          <h4 class="content-sub-title">등록된 메뉴</h4>
          <div class="product-top-btn">
            <button class="btn add-btn" @click.prevent="onClickAddMenu()">
              메뉴추가
            </button>
          </div>
        </div>
        <div class="product">
          <div class="product-list" v-for="a in 12" :key="a">
            <div class="p-area">
              <div class="p-image">
                <p>메뉴이미지</p>
              </div>
              <div class="p-detail">
                <h4>떡갈비 철판볶음밥</h4>
                <p class="p-comment">메뉴 설명</p>
                <p class="categore">메인메뉴</p>
                <p class="sales-use"><span class="use">10,000</span>원</p>
              </div>
            </div>
            <div class="p-button">
              <button class="delete-btn btn">삭제</button>
              <button class="modify-btn btn">수정</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <add-menu-view v-if="AddMenuModal == true"></add-menu-view>
  </div>
</template>

<script>
import AddMenuView from './AddMenuView.vue';
import { ref } from 'vue';
export default {
  components: {
    AddMenuView,
  },
  setup() {
    let AddMenuModal = ref(false);
    const onClickAddMenu = () => {
      AddMenuModal.value = true;
    };
    return {
      AddMenuModal,
      onClickAddMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
// @import '@/style/admin/views/menus.scss';
</style>
