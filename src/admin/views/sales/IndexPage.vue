<template>
  <div id="container">
    <!-- 메뉴 타이틀 등으로 사용 -->
    <div id="content">
      <h4 class="sales-title">
        <span>2023.04.29 토요일</span>
        가게 매출 정보를 알려드려요.
      </h4>
      <div class="sales-result">
        <!-- <button>매출요약</button>
        <div>
          <button>매출상세정보</button>
          <button>누락매출찾기</button>
        </div> -->
        <div class="sales-inquiry">
          <div class="yesterday">
            <p>어제 전체 매출<span class="yesterday-date">4.28 금</span></p>
            <h4 class="amount">932,000<small>원</small></h4>
          </div>
          <div class="today">
            <p>오늘 현재 매출<span class="yesterday-date">4.28 토</span></p>
            <h4 class="amount">89,000<small>원</small></h4>
          </div>
        </div>
        <div class="sales-inquiry detail-inquiry">
          <div class="store-card">
            <p>매장카드결제</p>
            <div>
              <p>어제 매출 <span>870,000</span>원</p>
              <p>현재 매출 <span>62,000</span>원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '@/style/admin/views/sales.css';
</style>
