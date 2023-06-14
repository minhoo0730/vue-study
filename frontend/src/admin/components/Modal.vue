<template>
  <v-dialog
    persistent
    transition="dialog-bottom-transition"
    width="768"
  >
    <v-card>
      <div class="modal-header" v-if="$slots.modalHeader">
        <slot name="modalHeader"></slot>
      </div>
      <div class="modal-header" v-else>
        <h2 style="font-size:2.0rem; color:red; text-align:center; width:100%;">
          #Header 폴백(이 메시지가 보이면 부모 컴포넌트 모달에서 #modalHeader로 슬롯네임드를 지정하세요.)
        </h2>
      </div>
      <div class="modal-content"  v-if="$slots.modalContent">
        <slot name="modalContent"></slot>
      </div>
      <div class="modal-content" v-else>
        <h2 style="font-size:2.0rem; color:red; text-align:center; width:100%;">
          #Footer 폴백(이 메시지가 보이면 부모 컴포넌트 모달에서 #modalContent로 슬롯네임드를 지정하세요.)
        </h2>
      </div>
      <div class="modal-footer"  v-if="$slots.modalFooter">
        <slot name="modalFooter"></slot>
      </div>
      <div class="modal-footer" v-else>
        <h2 style="font-size:2.0rem; color:red; text-align:center; width:100%;">
          #Footer 폴백(이 메시지가 보이면 부모 컴포넌트 모달에서 #modalFooter로 슬롯네임드를 지정하세요.)
        </h2>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
};
</script>

<style lang="scss">
// 모달 컴포넌트 공통 사용
@use '@/style/import-design' as *;
.modal-header {
  @include flex-row; align-items: center; justify-content: space-between; padding:0 16px; height:50px; border-bottom:1px solid $gray_300;
  > h2{
    font-size:2.0rem;
  }
  .close-btn{font-size:2.6rem;}
}
.modal-content{
  padding:16px;
}
.modal-footer{
  @include flex-row;
  > button{font-size:1.6rem; height:50px; background:$gray_300;}
}
</style>
