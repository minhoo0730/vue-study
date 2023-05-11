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
            <div class="list" v-for="(list, idx) in 10" :key="list">
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
        <div class="bg-white h-72 flex justify-start items-center px-16">
          <h2 class="text-[2.0rem] font-bold">주문내역</h2>
        </div>
        <div class="order-items">
          <ul>
            <li v-for="orderList in 10" :key="orderList" class="item">
              오더리스트{{ orderList }}
              <div class="">
                <span class="mr-16"><b>30,000</b>원</span>
                <button>삭제</button>
              </div>
            </li>
          </ul>
        </div>
        <div class="order-button">
          <h2>
            합계
            <span><b>300,000</b>원</span>
          </h2>
          <button>주문하기</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '@/style/order/views/list.css';
</style>
