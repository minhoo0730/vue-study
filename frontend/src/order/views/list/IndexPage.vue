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
                <li style="color:#fff;" class="mr-3"><button>추천메뉴</button></li>
                <li style="color:#fff;" class="mr-3"><button>커피</button></li>
                <li style="color:#fff;" class="mr-3"><button>티</button></li>
                <li style="color:#fff;" class="mr-3"><button>음료</button></li>
                <!-- <li style="color:#fff;" class="mr-3"><button>철판메뉴</button></li>
                <li style="color:#fff;" class="mr-3"><button>우동메뉴</button></li>
                <li style="color:#fff;" class="mr-3"><button>사이드메뉴</button></li>
                <li style="color:#fff;"><button>음료</button></li> -->
              </ul>
            </v-col>
          </div>
        </v-row>
        <v-row no-gutters class="px-8 pt-8 pb-8 overflow-y-auto" style="height:calc(100vh - 60px); background:#eee; align-items: flex-start">
          <v-row>
            <v-col cols="3"
              v-for="(list, idx) in menuList" :key="list" @click.prevent="onProductModal(list)">
              <v-card
                style="cursor:pointer; border:1px solid #fff; background:#fff;"
                variant="outlined"
              >
                <div class="img">
                  <img style="width:100%;" src="https://picsum.photos/id/429/4128/2322" />
                </div>
                <div class="menu-info" style="padding:10px;">
                  <p class="menu-name">{{ list.name }}<br>
                    <span>{{ list.description }}</span>
                  </p>
                  <p class="use"><b>{{ priceToString(list.price) }}</b>원</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
      <v-col cols="3" style="background:#fff;">
        <v-col style="padding:0;">
          <div class="d-flex align-center" style="height:60px; padding:0 16px; box-shadow: 0 2px 3px 0 rgba(56,63,70,.06);">
            <h2 class="" style="font-size:2.0rem;">주문내역</h2>
          </div>
          <div class="order-items overflow-auto" style="height:calc(100vh - 200px); padding:0 16px;">
            <ul>
              <li v-for="(menu, mIdx) in addMenuList" :key="mIdx" class="py-2" style="border-bottom:1px solid #e1e1e1;">
                <div class="d-flex justify-space-between align-center mb-2" style="">
                  <p> {{ menu.name }}</p>
                  <div class="">
                    <button class="btn minus-btn" @click="onMinusInquiry(menu)" :disabled="menu.inQuiry == 1">-</button>
                    <input type="number" min="1" class="text-center" style="width:36px;" v-model.number="menu.inQuiry" readonly/>
                    <button class="btn plus-btn" @click="onPlusInquiry(menu)">+</button>
                  </div>
                </div>
                <div class="d-flex justify-space-between">
                  <p><b class="mr-1">{{ priceToString(menu.addPrice) }}</b>원</p>
                  <button @click.prevent="onMenuDelete(menu)">삭제</button>
                </div>
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column justify-space-between" style="height:140px; border-top:1px solid #e9e9e9;">
            <div class="pa-4">
              <p class="mb-2" style="font-size:2.0rem;">
                주문수량<span><b>{{ totalMenuCounting }}</b></span
                >개
              </p>
              <p style="font-size:2.0rem;">
                합계
                <span><b>{{ priceToString(totalMenuPrice) }}</b>원</span>
              </p>
            </div>
            <button class="btn order-btn" style="" @click.prevent="onChooseModalOpen" :disabled="addMenuList.length == 0">
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
      :selectMenuView="selectMenuView"
      @openOrderView="openOrderView()"
      @add-order="addOrder"
      @closePop="onProductModalClose()"
    ></product-view>
  </v-layout>
</template>

<script>
import orderChooseView from './orderChooseView.vue';
import productView from './productView.vue';
import api from '@/api/api'
import { onBeforeMount, ref, computed, watch } from 'vue';
export default {
  components: {
    orderChooseView,
    productView,
  },
  setup() {
    const chooseModal = ref(false);
    const productModal = ref(false);
    const menuList = ref([]);
    const selectMenuView = ref({});
    const addMenuList = ref([]);
    const totalMenuCounting = ref(0);
    const totalMenuPrice = ref(0);
    watch(() => addMenuList.value,
      (list) => {
        if(list.length > 0){
          let inQuirySum = 0;
          let priceSum = 0;
          list.forEach(data => {
            inQuirySum = inQuirySum + data.inQuiry;
            priceSum = priceSum + data.addPrice;
            totalMenuCounting.value = inQuirySum;
            totalMenuPrice.value = priceSum;
          })
        }
      },
      { deep: true }
    )
    const onChooseModalOpen = () => {
      chooseModal.value = true;
    };
    const onChooseModalClose = () => {
      chooseModal.value = false;
    };
    const onProductModal = (menu) => {
      selectMenuView.value = menu;
      productModal.value = true;
    };
    const onProductModalClose = () => {
      selectMenuView.value = {};
      productModal.value = false;
    };
    const openOrderView = () => {
      chooseModal.value = true;
      onProductModalClose();
    };
    const addOrder = (menu) => {
      let defaultinQuiry = {};
      defaultinQuiry.addPrice = menu.price;
      menu.addPrice = defaultinQuiry.addPrice;
      if(addMenuList.value.length > 0){
        if(addMenuList.value.includes(menu) == true){
          menu.inQuiry++;
          menu.addPrice = menu.addPrice * menu.inQuiry;
        } else {
          addMenuList.value.push(menu);
        }
        onProductModalClose();
      } else {
        addMenuList.value.push(menu);
        onProductModalClose();
      }
    };
    const getMenuList = () => {
      api.menus.list().then(response => {
        const responseData = response.data;
        responseData.forEach(data => {
          // const price = data.price.toLocaleString('ko-KR');
          // data.price = price;
          menuList.value.push(data);
        })
      })
    }
    const onMinusInquiry = (selectMenu) => {
      selectMenu.inQuiry--;
      selectMenu.addPrice = selectMenu.price * selectMenu.inQuiry;
    }
    const onPlusInquiry = (selectMenu) => {
      selectMenu.inQuiry++;
      selectMenu.addPrice = selectMenu.price * selectMenu.inQuiry;
    }
    const priceToString = (price) => {
      return price.toLocaleString('ko-KR');
    }
    const onMenuDelete = (menu) => {
      for(let i=0; i < addMenuList.value.length; i++){
        if(addMenuList.value[i]._id == menu._id){
          addMenuList.value.splice(i, 1);
          i--;
        }
      }
    }
    onBeforeMount(() => {
      getMenuList();
    })
    return {
      chooseModal,
      productModal,
      menuList,
      selectMenuView,
      addMenuList,
      totalMenuCounting,
      totalMenuPrice,
      onChooseModalOpen,
      onChooseModalClose,
      onProductModal,
      onProductModalClose,
      openOrderView,
      addOrder,
      getMenuList,
      onMinusInquiry,
      onPlusInquiry,
      priceToString,
      onMenuDelete,
    };
  },
};
</script>

<style lang="scss" scoped>
// @import '@/style/order/views/list.scss';
</style>
