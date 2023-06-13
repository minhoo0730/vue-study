<template>
  <modal :modal="{ title, modalName }" @onClose="onClose">
    <template #modalContent>
      <div class="modal-content">
        <div class="form-box">
          <v-text-field
          v-model="form.name"
          id="menu-name"
          class="grid_1"
          variant="outlined"
          density="compact"
          type="text"
          label="메뉴이름"
          :rules="[() => !!form.name || '메뉴 이름을 입력하세요.']"
          required>
          </v-text-field>
        </div>
        <div class="form-box">
          <v-text-field
          v-model="form.description"
          id="menu-description"
          class="grid_1"
          variant="outlined"
          density="compact"
          type="text"
          label="메뉴설명"
          :rules="[() => !!form.name || '메뉴 설명을 입력하세요.']"
          required>
          </v-text-field>
        </div>
        <div class="form-box">
          <v-text-field
          v-model="form.price"
          id="menu-price"
          class="grid_1"
          variant="outlined"
          density="compact"
          type="number"
          label="가격입력"
          :rules="[() => !!form.price || '가격을 입력 해주세요.']"
          required>
          </v-text-field>
        </div>
        <div class="form-box">
          <label for="menu-categore" class="form-label">카테고리</label>
          <input
            type="text"
            name="menu-categore"
            id="menu-categore"
            class="grid_1"
            v-model="form.categore"
          />
        </div>
        <div class="form-box">
          <label for="menu-image" class="form-label">이미지</label>
          <input
            type="file"
            name="menu-image"
            id="menu-image"
            class="grid_1"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button class="grid_2">취소</button>
        <button class="grid_2">저장</button>
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

  setup(props, {emit}) {
    const title = ref('메뉴추가');
    const modalName = ref('AddMenu');
    const dialog = ref(true);
    const form = ref({
      name:'',
      description:'',
      price:'',
    });
    const onClose = (value) => {
      dialog.value = value;
      emit('addMenuClose',dialog)
    }
    return {
      title,
      modalName,
      form,
      categore:'',
      dialog,
      onClose,
    };
  },
};
</script>

<style lang="scss" scoped>
  @use '@/style/import-design' as *;

  .modal-content{
    padding:16px;
  }

  .modal-footer{
    @include flex-row;
    > button{font-size:1.6rem; height:50px; background:$gray_300;}
  }
</style>
