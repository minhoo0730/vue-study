<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="step-list">
        <p :class="orderState == '' ? 'step-on' : 'not-step'">
          <small>STEP.01</small>
          장소선택
        </p>
        <p :class="orderState ? 'step-on' : 'not-step'">
          <small>STEP.02</small>
          결제방식 선택
        </p>
        <p>
          <small>STEP.03</small>
          결제
        </p>
      </div>
      <div class="modal-content">
        <div class="menu-place" v-if="orderState == ''">
          <h2 class="text-[2.4rem] font-bold text-center mb-16">
            드시고 가실 장소를 선택하세요.
          </h2>
          <div class="place-area">
            <p>
              <button
                class="bg-green-500 text-white"
                @click.prevent="orderState = 'place'"
              >
                매장
                <small>매장에서 먹고 갈래요</small>
              </button>
            </p>
            <p>
              <button
                class="bg-blue-500 text-white"
                @click.prevent="orderState = 'takeOut'"
              >
                포장
                <small>가져가서 먹을래요</small>
              </button>
            </p>
          </div>
        </div>
        <div
          class="pay-choose"
          v-else-if="orderState == 'place' || orderState == 'takeOut'"
        >
          <h2 class="text-[2.4rem] font-bold text-center mb-20">
            결제하실 방법을 선택하세요.
          </h2>
          <div class="pay-button">
            <p>
              <button @click.prevent="onClickPayMent('samsungPay')">
                삼성페이
              </button>
            </p>
            <p>
              <button @click.prevent="onClickPayMent('applyPay')">
                애플페이
              </button>
            </p>
            <p>
              <button @click.prevent="onClickPayMent('creditCard')">
                신용카드
              </button>
            </p>
          </div>
        </div>
        <div
          class="payment"
          v-else-if="
            orderState == 'samsungPay' ||
            orderState == 'applyPay' ||
            orderState == 'creditCard'
          "
        >
          결제화면
        </div>
      </div>
      <div class="back-btn">
        <p>
          <button @click="$emit('closePop')">
            추가주문 할게요.
            <small>주문페이지로 돌아가기</small>
          </button>
        </p>
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
    const title = ref('주문하기');
    const modalName = ref('takeOutModal');
    let orderState = ref('');
    let payMent = ref('');
    const onClickPayMent = value => {
      orderState.value = value;
    };
    return {
      title,
      modalName,
      orderState,
      payMent,
      onClickPayMent,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import '@/style/order/components/orderChooseView.css';
</style>
