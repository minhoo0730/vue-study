<template>
  <div id="container" class="order">
    <div id="content">
      <div class="order-area">
        <div class="order-header">
          <div class="logo">로고</div>
          <nav class="nav">
            <ul>
              <li><button>세트메뉴</button></li>
              <li><button>철판메뉴</button></li>
              <li><button>우동메뉴</button></li>
              <li><button>사이드메뉴</button></li>
              <li><button>음료</button></li>
            </ul>
          </nav>
        </div>
        <div class="menu-list">
          <div class="list-area">
            <div
              class="list"
              v-for="(list, idx) in 12"
              :key="list"
              @click.prevent="onProductModal()"
            >
              <div class="img">
                <img src="https://picsum.photos/id/429/4128/2322" />
              </div>
              <div class="menu-info">
                <p class="menu-name">메뉴{{ idx + 1 }}</p>
                <p class="use"><b>20,000</b>원</p>
              </div>
            </div>
          </div>
        </div>
        <div class="content-footer" aria-label="Pagination">
          <div class="menu-title">
            <h2>주문하실 메뉴를 선택하세요.</h2>
          </div>
          <div class="pagination-btn">
            <a href="#" class=""><i class="ri-arrow-left-line"></i>이전 </a>
            <a href="#" class="">다음<i class="ri-arrow-right-line"></i></a>
          </div>
        </div>
      </div>
      <div class="my-order">
        <div class="order-title">
          <h2 class="text-[2.0rem] font-bold">주문내역</h2>
        </div>
        <div class="order-items">
          <ul>
            <li v-for="orderList in 10" :key="orderList" class="item">
              <div class="order-name">
                <p>오더리스트{{ orderList }}</p>
                <div>
                  <button class="btn minus-btn">-</button>
                  <input type="number" value="1" min="1" />
                  <button class="btn plus-btn">+</button>
                </div>
              </div>
              <div class="order-use">
                <span class="mr-16"><b>30,000</b>원</span>
                <button>삭제</button>
              </div>
            </li>
          </ul>
        </div>
        <div class="order-button">
          <div class="order-count">
            <p>
              주문수량<span><b>10</b></span
              >개
            </p>
            <p>
              합계
              <span><b>300,000</b>원</span>
            </p>
          </div>
          <button class="btn" @click.prevent="onChooseModalOpen()">
            주문하기
          </button>
        </div>
      </div>
    </div>
    <order-choose-view
      v-if="chooseModal == true"
      @closePop="onChooseModalClose()"
    ></order-choose-view>
    <product-view
      v-if="productModal == true"
      @openOrderView="openOrderView()"
      @addOrder="addOrder()"
      @closePop="onProductModalClose()"
    ></product-view>
  </div>
</template>

<script>
import orderChooseView from './orderChooseView.vue';
import productView from './productView.vue';
import { ref } from 'vue';
export default {
  components: {
    orderChooseView,
    productView,
  },
  setup() {
    let chooseModal = ref(false);
    let productModal = ref(false);
    const onChooseModalOpen = () => {
      chooseModal.value = true;
    };
    const onChooseModalClose = () => {
      chooseModal.value = false;
    };
    const onProductModal = () => {
      productModal.value = true;
    };
    const onProductModalClose = () => {
      productModal.value = false;
    };
    const openOrderView = () => {
      chooseModal.value = true;
      productModal.value = false;
    };
    const addOrder = () => {
      productModal.value = false;
    };
    return {
      chooseModal,
      productModal,
      onChooseModalOpen,
      onChooseModalClose,
      onProductModal,
      onProductModalClose,
      openOrderView,
      addOrder,
    };
  },
};
</script>

<style lang="postcss" scoped>
@import '@/style/order/views/list.css';
</style>
