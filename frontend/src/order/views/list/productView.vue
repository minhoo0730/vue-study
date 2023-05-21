<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="modal-content">
        <div class="menu-img">
          <img src="https://picsum.photos/id/429/4128/2322" alt="" />
        </div>
        <div class="menu-title">
          <h2 class="text-[2.4rem] font-bold">메뉴 이름</h2>
          <p class="text-[1.4rem] text-gray-500">메뉴 상세 설명</p>
          <p class="flex mt-6"><b class="mr-4">14,000</b>원</p>
        </div>
        <radio-form></radio-form>
      </div>
      <div class="modal-footer">
        <button @click="$emit('closePop')">취소</button>
        <button class="bg-red-500 text-white font-bold">담기</button>
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
    const title = ref('메뉴 이름').value;
    const modalName = ref('orderView').value;
    return {
      title,
      modalName,
    };
  },
};
</script>

<style lang="postcss" scoped>
.modal-content {
  @apply flex flex-col bg-gray-100 !p-0;
  .menu-img {
    @apply !mb-0;
  }
  .menu-title {
    @apply p-16;
  }
  .menu-option {
  }
}
</style>
