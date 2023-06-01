<template>
  <v-layout>
    <v-row no-gutters>
      <v-col cols="9">
        <v-row no-gutters style="padding:0 16px; height:60px; display:flex; align-items: center; background: #333;">
          <div class="d-flex w-100 h-100 align-center">
            <v-col cols="2" style="padding:0;">
              <div class="logo" style="color:#fff;">로고</div>
            </v-col>
            <v-col cols="auto" style="padding:0;">
              <ul class="v-row v-row--no-gutters">
                <li style="color:#fff;" class="mr-3"><button>세트메뉴</button></li>
                <li style="color:#fff;" class="mr-3"><button>철판메뉴</button></li>
                <li style="color:#fff;" class="mr-3"><button>우동메뉴</button></li>
                <li style="color:#fff;" class="mr-3"><button>사이드메뉴</button></li>
                <li style="color:#fff;"><button>음료</button></li>
              </ul>
            </v-col>
          </div>
        </v-row>
        <v-row no-gutters class="px-8 pt-8 pb-8 overflow-y-auto" style="height:calc(100vh - 60px); background:#eee;">
          <v-row>
            <v-col cols="3"
              v-for="(list, idx) in 16"
              :key="list"
              @click.prevent="onProductModal()"
            >
              <v-card
                style="cursor:pointer; border:1px solid #fff; background:#fff;"
                variant="outlined"
              >
                <div class="img">
                  <img style="width:100%;" src="https://picsum.photos/id/429/4128/2322" />
                </div>
                <div class="menu-info" style="padding:10px;">
                  <p class="menu-name">메뉴{{ idx + 1 }}</p>
                  <p class="use"><b>20,000</b>원</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
      <v-col cols="3" style="background:#fff;">
        <v-col style=" padding:0;">
          <div class="d-flex align-center" style="height:60px; padding:0 16px; box-shadow: 0 2px 3px 0 rgba(56,63,70,.06);">
            <h2 class="" style="font-size:2.0rem;">주문내역</h2>
          </div>
          <div class="order-items overflow-auto" style="height:calc(100vh - 200px); padding:0 16px;">
            <ul>
              <li v-for="orderList in 16" :key="orderList" class="py-2" style="border-bottom:1px solid #e1e1e1;">
                <div class="d-flex justify-space-between mb-3" style="">
                  <p style="font-size:1.6rem;">오더리스트{{ orderList }}</p>
                  <div class="">
                    <button class="btn minus-btn">-</button>
                    <input type="number" value="1" min="1" class="text-center" style="width:50px;"/>
                    <button class="btn plus-btn">+</button>
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <span style="font-size:2.0rem;"><b>30,000</b>원</span>
                  <button>삭제</button>
                </div>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column justify-space-between" style="height:140px; border-top:1px solid #e9e9e9;">
            <div class="pa-4">
              <p class="mb-2" style="font-size:2.0rem;">
                주문수량<span><b>10</b></span
                >개
              </p>
              <p style="font-size:2.0rem;">
                합계
                <span><b>300,000</b>원</span>
              </p>
            </div>
            <button class="w-100 text-center bg-red-accent-3" style="height:50px; color:#fff;" @click.prevent="onChooseModalOpen()">
              주문하기
            </button>
          </div>
        </v-col>
      </v-col>
    </v-row>
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
  </v-layout>


  <!-- <test-modal></test-modal> -->
  <!-- <div id="container" class="order">
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
              v-for="(list, idx) in 16"
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
  </div> -->
</template>

<script>
import orderChooseView from './orderChooseView.vue';
import productView from './productView.vue';
import testModal from './testModal.vue';
import { ref } from 'vue';
export default {
  components: {
    orderChooseView,
    productView,
    testModal
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

<style lang="scss" scoped>
// @import '@/style/order/views/list.scss';
</style>
