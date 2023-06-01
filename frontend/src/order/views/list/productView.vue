<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="modal-content">
        <div class="menu-img">
          <img src="https://picsum.photos/id/429/4128/2322" class="w-100" />
        </div>
        <div class="menu-title" style="padding:16px;">
          <h2 style="font-weight:700; font-size:2.4rem;">메뉴 이름</h2>
          <p style="font-size:1.4rem; margin-top:6px;" class="text-grey-darken-1">메뉴 상세 설명</p>
          <p class="d-flex mt-2"><b class="mr-1">14,000</b>원</p>
        </div>
        <radio-form></radio-form>
      </div>
      <div class="modal-footer d-flex">
        <button style="height:50px; font-size:1.6rem;" class="w-50 bg-grey-lighten-3" @click.prevent="$emit('closePop')">
          취소
        </button>
        <button style="height:50px; font-size:1.6rem;" class="w-50 text-white bg-green-accent-4" @click.prevent="$emit('addOrder')">
          담기
        </button>
        <button style="height:50px; font-size:1.6rem;" class="w-100 bg-red-accent-3" @click.prevent="$emit('openOrderView')">
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

// @import '@/style/order/components/productView.scss';
</style>
