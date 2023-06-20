<template>
  <div id="container" class="admin">
    <div id="content" class="full-view-page">
      <h4 class="content-title">
        <span>메뉴관리</span>
      </h4>
      <div class="product-view">
        <div class="product-top">
          <h4 class="content-sub-title">등록된 메뉴</h4>
          <div class="product-top-btn">
            <button class="btn add-btn" @click.prevent="onClickAddMenu">
              메뉴추가
            </button>
          </div>
        </div>
        <div class="product">
          <v-row no-gutters>
            <v-col cols="3" v-for="list in menuList" :key="list" class="product-list">
              <div class="p-area">
                <div class="p-image">
                  <img :src="`${list.image}`">
                </div>
                <div class="p-detail">
                  <div class="p-info">
                    <h4>{{ list.name }}</h4>
                    <p class="p-comment">{{ list.description }}</p>
                    <p class="categore">{{ list.categore }}</p>
                    <p class="sales-use"><span class="use">{{ list.price }}</span>원</p>
                  </div>
                </div>
                <div class="p-button">
                  <button class="delete-btn btn">삭제</button>
                  <button class="modify-btn btn">수정</button>
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- <div class="product-list grid_4" v-for="list in menuList" :key="list">
            <div class="p-area">
              <div class="p-image">
                <img :src="`${list.image}`">
              </div>
              <div class="p-detail">
                <div class="p-info">
                  <h4>{{ list.name }}</h4>
                  <p class="p-comment">{{ list.description }}</p>
                  <p class="categore">{{ list.categore }}</p>
                  <p class="sales-use"><span class="use">{{ list.price }}</span>원</p>
                </div>
              </div>
            </div>
            <div class="p-button">
              <button class="delete-btn btn">삭제</button>
              <button class="modify-btn btn">수정</button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <add-menu-view
    :addMenuModal = addMenuModal
      v-if="addMenuModal == true"
      @addMenuClose="addMenuModal = false"></add-menu-view>
  </div>
</template>

<script>
import AddMenuView from './AddMenuView.vue';
import api from '@/api/api'
import { ref, onBeforeMount, computed } from 'vue';
export default {
  components: {
    AddMenuView,
  },
  setup() {
    let addMenuModal = ref(false);
    const menuList = ref([]);
    const onClickAddMenu = () => {
      addMenuModal.value = true;
    };
    const getMenuData = () => {
      api.menus.list().then(response => {
        const responseData = response.data;
        responseData.forEach(data => {
          const price = data.price.toLocaleString('ko-KR');
          data.price = price;
          menuList.value.push(data);
        })
      })
    }
    onBeforeMount(() => {
      getMenuData();
    })
    return {
      addMenuModal,
      menuList,
      onClickAddMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
@use '@/style/import-design' as *;
// @import '@/style/admin/views/menus.scss';

#content{
  .product{
    @include flex-row; width:100%; flex-wrap: wrap;
    .product-list{
      @include flex-col;
      // &:nth-child(4n+1){
      //   margin-left:0;
      // }
      // &:nth-child(4n){
      //   margin-right:0;
      // }
      &:nth-child(4n+1){
        .p-area{
          margin-left:0;
        }
      }
      &:nth-child(4n){
        .p-area{
          margin-right:0;
        }
      }
      .p-area{
        @include flex-row; align-items: center;  background:$white; border:1px solid $gray-400; border-radius:8px; padding:16px; margin:0 16px 16px 0; position:relative;
        .p-image{
          @include flex-center; border-radius:8px; overflow:hidden; width:100px; height:100px; flex:0 0 auto;
          > img{width:100%;}
        }
        .p-detail{
          @include flex-col; justify-content: center; flex:1 1 auto; margin-left:14px;
          .p-info{
            > h4{margin-bottom:10px; font-size:2.0rem;}
            .categore{
              font-weight:400; background:$gray_300; border:1px solid $gray_500; display:inline-block; padding:4px 8px; border-radius:8px; color:$gray_600; font-size:1.2rem; margin-top:6px;
            }
            .sales-use{
              margin-top:12px;
              font-weight:400;
              .use{
                font-weight:600; margin-right:4px;
              }
            }
            &.full-view-page{
              width:100%;
            }
          }
        }
        .p-button{
          position:absolute; right:16px; bottom:16px;
          button{
            font-size:1.4rem; border:1px solid $gray; padding:0 16px; border-radius:4px; margin:0 4px;
          }
        }
      }
    }
  }
}
</style>
