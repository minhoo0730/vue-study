<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="modal-content">
        <div class="menu-img">
          <img src="https://picsum.photos/id/429/4128/2322" alt="" />
        </div>
        <div class="menu-title">
          <h2>메뉴 이름</h2>
          <p>메뉴 상세 설명</p>
          <p><b>14,000</b>원</p>
          <!-- <h2 class="text-[2.4rem] font-bold">메뉴 이름</h2>
          <p class="text-[1.4rem] text-gray-500">메뉴 상세 설명</p>
          <p class="flex mt-6"><b class="mr-4">14,000</b>원</p> -->
        </div>
        <radio-form></radio-form>
      </div>
      <div class="modal-footer">
        <button class="close-btn" @click.prevent="$emit('closePop')">
          취소
        </button>
        <button class="add-order" @click.prevent="$emit('addOrder')">
          담기
        </button>
        <button class="quick-order" @click.prevent="$emit('openOrderView')">
          바로 주문
        </button>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from '@/order/components/Modal.vue';
import RadioForm from '@/order/components/RadioForm.vue';
import { ref } from 'vue';

export default {
  components: {
    Modal,
    RadioForm,
  },
  setup() {
    const title = ref('메뉴 이름');
    const modalName = ref('orderView');
    return {
      title,
      modalName,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/style/order/components/productView.scss';
</style>
