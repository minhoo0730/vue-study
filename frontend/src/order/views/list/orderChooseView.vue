<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="modal-content">
        <div class="menu-choose">
          <p>
            <button class="bg-green-500 text-white">
              매장
              <small>매장에서 먹고 갈래요</small>
            </button>
          </p>
          <p>
            <button class="bg-blue-500 text-white">
              포장
              <small>가져가서 먹을래요</small>
            </button>
          </p>
        </div>
        <div class="back-btn">
          <p>
            <button @click="$emit('closePop')">
              추가주문 할게요.
              <small>주문페이지로 돌아가기</small>
            </button>
          </p>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from '@/order/components/Modal.vue';
import { ref } from 'vue';
export default {
  components: {
    Modal,
  },
  setup() {
    const title = ref('드시고 가실 장소를 선택하세요.').value;
    const modalName = ref('takeOutModal').value;
    return {
      title,
      modalName,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import '@/style/order/components/orderChooseView.css';
</style>
