<template>
  <modal :class="modalName"  v-model="dialog">
    <template #modalHeader>
        <h2 class="" id="modal-title">{{ title }}</h2>
        <button class="close-btn" @click.prevent="onClickClose"><i class="ri-close-fill"></i></button>
    </template>
    <template #modalContent>
      <v-form>
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
            :rules="[() => !!form.price || '가격을 입력하세요.']"
            required>
          </v-text-field>
        </div>
        <div class="form-box">
            <v-text-field
              v-model="form.categore"
              id="menu-categore"
              class="grid_1"
              variant="outlined"
              density="compact"
              type="text"
              label="카테고리"
              :rules="[() => !!form.categore || '카테고리를 입력하세요.']"
              required>
            </v-text-field>
        </div>
        <!-- <div class="form-box">
          <label for="menu-image" class="form-label">이미지</label>
          <input
            type="file"
            name="menu-image"
            id="menu-image"
            class="grid_1"
          />
        </div> -->
      </v-form>
    </template>
    <template #modalFooter>
        <!-- <button class="grid_2">취소</button> -->
        <button class="grid_1"  @click.prevent="onSubmit(form)">저장</button>
    </template>
  </modal>
</template>

<script>
import Modal from '@/admin/components/Modal.vue';
import axios from 'axios';
import { ref, onBeforeMount } from 'vue';
export default {
  components: {
    Modal,
  },
  props:{
    addMenuModal:Boolean,
  },

  setup(props, {emit}) {
    const title = ref('메뉴추가');
    const modalName = ref('AddMenu');
    const dialog = ref(props.addMenuModal);
    const form = ref({
      name:'',
      description:'',
      price:'',
      categore:'',
    });
    const onClickClose = () => {
      dialog.value = false;
      emit('addMenuClose',dialog)
    }
    const onSubmit = async (form) => {
      await axios.post('http://localhost:8000/api/menu', form).then(() => {
        dialog.value = false;
        emit('addMenuClose', dialog)
      }).catch(error => {
        console.log(error);
      })
    }
    onBeforeMount(() => {
      dialog.value = true;
    })
    return {
      title,
      modalName,
      form,
      dialog,
      onClickClose,
      onSubmit
    };
  },
};
</script>

<style lang="scss" scoped>
// 메뉴추가 모달 컴포넌트
  @use '@/style/import-design' as *;
</style>
