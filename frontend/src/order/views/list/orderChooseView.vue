<template>
  <modal :modal="{ title, modalName }">
    <template v-slot:modalContent>
      <div class="d-flex step-list">
        <p :class="orderState == '' ? 'step-on' : 'not-step'">
          <small>STEP.01</small>
          장소선택
        </p>
        <p
          :class="
            orderState == 'place' || orderState == 'takeOut'
              ? 'step-on'
              : 'not-step'
          "
        >
          <small>STEP.02</small>
          결제방식 선택
        </p>
        <p
          :class="
            orderState == 'samsungPay' ||
            orderState == 'applyPay' ||
            orderState == 'creditCard'
              ? 'step-on'
              : 'not-step'
          "
        >
          <small>STEP.03</small>
          결제
        </p>
      </div>
      <div class="modal-content">
        <div class="menu-place" v-if="orderState == ''">
          <h2>
          <!-- <h2 class="text-[2.4rem] font-bold text-center mb-16"> -->
            드시고 가실 장소를 선택하세요.
          </h2>
          <div class="place-area">
            <p>
              <button
                @click.prevent="orderState = 'place'"
              >
              <!-- <button
                class="bg-green-500 text-white"
                @click.prevent="orderState = 'place'"
              > -->
                매장
                <small>매장에서 먹고 갈래요</small>
              </button>
            </p>
            <p>
              <button
                @click.prevent="orderState = 'takeOut'"
              >
              <!-- <button
                class="bg-blue-500 text-white"
                @click.prevent="orderState = 'takeOut'"
              > -->
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
          <h2>
          <!-- <h2 class="text-[2.4rem] font-bold text-center mb-20"> -->
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
        <button @click="$emit('closePop')">
          추가주문 할게요.
          <small>주문페이지로 돌아가기</small>
        </button>
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

<style lang="scss" scoped>
.step-list{
  background:#F5F5F5;
  > p{
    width:100%; display:flex; flex-direction:column; justify-content: center; padding:0 16px; height:50px; color:#757575; position:relative; align-items: center;
    > small{margin-bottom:4px;}
  }
  .step-on{
    font-weight:600;
    background:#FF1744 ; color:#fff;
  }
}
.modal-content > div{
  padding:0 20px;
  > h2{
    font-size:2.4rem; text-align:center; padding:20px 0 16px 0;
  }
  .place-area{
    display:flex; flex-direction: row;
    > p{
      width:100%;
      margin:0 16px;
      button{
        border:1px solid #eee; border-radius:8px;
        font-size:2.4rem; font-weight:600; width:100%; height:200px; display:flex; justify-content: center; flex-direction: column; align-items: center;
        small{
          font-size:1.6rem; margin-top:8px; font-weight:400;
        }
      }
    }
  }
  .pay-button{
    display:flex; flex-direction: row;
    p {
      display:flex; width:calc(100%/3); height:200px; margin:0 16px;
      button{
        width:100%; border-radius:8px; font-size:2.4rem; display:flex; flex-direction:column; justify-content:center; align-items:center; font-weight:600; border:1px solid #eee;
      }
    }
  }
}
.back-btn {
  margin-top:16px;
  display:flex;
  justify-content:center;
  border-top:1px solid #e9e9e9;
  button {
    width:100%; font-size:2.0rem; background:#EEEEEE; padding:16px 0;
    color:#111; font-weight:600;
    small{
      font-size:1.6rem; font-weight:400; margin-left:8px;
    }
  }
}

// @import '@/style/order/components/orderChooseView.scss';
</style>
