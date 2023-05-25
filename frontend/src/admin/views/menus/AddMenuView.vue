<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="modal-content">
        <div class="form-box">
          <label for="menu-name">메뉴이름</label>
          <input
            type="text"
            name="menu-name"
            id="menu-name"
            class="block w-full rounded-md border-0 px-16 py-16 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
          />
        </div>
        <div>메뉴설명</div>
        <div>가격</div>
        <div>카테고리</div>
        <div>이미지</div>
      </div>
      <div class="modal-footer">
        <button>취소</button>
        <button>저장</button>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from '@/admin/components/Modal.vue';
import { ref } from 'vue';
export default {
  components: {
    Modal,
  },
  setup() {
    const title = ref('메뉴추가');
    const modalName = ref('AddMenu');
    return {
      title,
      modalName,
    };
  },
};
</script>

<style></style>
