<template>
  <div
    class="modal"
    :class="modal.modalName"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
    <div class="modal-bg"></div>

    <div class="modal-component">
      <div class="modal-container">
        <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
        <div class="modal-area">
          <div class="modal-header">
            <h3 class="" id="modal-title">{{ modal.title }}</h3>
          </div>
          <!-- <div class="bg-white p-20">
            <div class="sm:flex sm:items-start"></div>
          </div> -->
          <!-- <div class="modal-content">
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed. This action cannot be undone.
            </p>
          </div> -->
          <slot name="modalContent"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modal: Object,
  },
  setup() {},
};
</script>

<style lang="postcss" scoped></style>
