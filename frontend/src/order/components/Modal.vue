<template>
  <v-dialog
    v-model="dialog"
    persistent
    :id="modal.modalName"
    transition="dialog-bottom-transition"
    width="768"
  >
    <v-card>
      <div class="modal-header">
        <h3 class="" id="modal-title">{{ modal.title }}</h3>
      </div>
      <slot name="modalContent"></slot>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from 'vue';
export default {
  props: {
    modal:Object
  },
  setup() {
    let dialog = ref(true);
    return {
      dialog
    };
  },
};
</script>

<style lang="scss" scoped>
  #orderView .modal-header{display:none;}
</style>
