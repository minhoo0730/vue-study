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
          <div class="list" v-for="(list, idx) in 12" :key="list">
            <div class="menu">
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
      </div>
      <div class="my-order">오더 내역</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '@/style/order/views/list.css';
</style>
