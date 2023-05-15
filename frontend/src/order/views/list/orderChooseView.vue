<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="modal-content">
        <div class="menu-choose">
          <p>
            <button class="btn">
              매장
              <small>매장에서 먹고 갈래요</small>
            </button>
          </p>
          <p>
            <button class="btn">
              포장
              <small>가져가서 먹을래요</small>
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
    const modal = ref({
      title: '드시고 가실 장소를 선택하세요.',
      modalName: 'takeOut',
    }).value;
    return modal;
  },
};
</script>

<style lang="postcss" scoped>
.menu-choose {
  @apply flex;
  p {
    @apply flex w-1/2 h-[200px] mx-16;
    button {
      @apply bg-gray-100 w-full rounded-3xl text-[2.8rem] flex flex-col justify-center items-center font-bold;
      small {
        @apply text-[1.6rem] font-normal;
      }
    }
  }
}
</style>
