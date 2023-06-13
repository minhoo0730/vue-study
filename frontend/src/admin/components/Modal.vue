<template>
  <v-dialog
    v-model="dialog"
    persistent
    :class="modal.modalName"
    transition="dialog-bottom-transition"
    width="768"
  >
    <v-card>
      <div class="modal-header">
        <h2 class="" id="modal-title">{{ modal.title }}</h2>
        <button class="close-btn" @click.prevent="onClickClose"><i class="ri-close-fill"></i></button>
      </div>
      <slot name="modalContent" class="modal-content"></slot>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    modal: Object,
  },
  emits:['onClose'],
  setup(props, { emit }) {
    let dialog = ref(true);
    const onClickClose = () => {
      dialog.value = false;
      emit('onClose', dialog.value);
    }
    return {
      dialog,
      onClickClose
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/style/import-design' as *;
.modal-header {
  @include flex-row; align-items: center; justify-content: space-between; padding:0 16px; height:50px; border-bottom:1px solid $gray_300;
  > h2{
    font-size:2.0rem;
  }
  .close-btn{font-size:2.6rem;}
}
</style>
