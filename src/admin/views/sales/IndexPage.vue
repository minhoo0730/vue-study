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
        <div class="order-total">
          <div class="yesterday">
            <p>어제 주문 건수<span class="yesterday-date">4.28 금</span></p>
            <h4 class="amount">100<small class="use">건</small></h4>
          </div>
          <div class="today">
            <p>오늘 주문 건수<span class="yesterday-date">4.28 토</span></p>
            <h4 class="amount">50<small class="use">건</small></h4>
          </div>
        </div>
        <div class="total-inquiry">
          <div class="yesterday">
            <p>어제 전체 매출<span class="yesterday-date">4.28 금</span></p>
            <h4 class="amount">932,000<small class="use">원</small></h4>
          </div>
          <div class="today">
            <p>오늘 현재 매출<span class="yesterday-date">4.28 토</span></p>
            <h4 class="amount">89,000<small class="use">원</small></h4>
          </div>
        </div>
        <div class="detail-store">
          <div class="store-card">
            <p>매장 카드결제</p>
            <div>
              <p>어제 매출 <small class="use">870,000</small>원</p>
              <p>현재 매출 <small class="use">62,000</small>원</p>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-inquiry">
        <ul class="tab-menu">
          <li><button class="btn tab-btn">일</button></li>
          <li><button class="btn tab-btn">월</button></li>
          <li><button class="btn tab-btn">분기</button></li>
          <li><button class="btn tab-btn">날짜</button></li>
        </ul>
        <calendar-view></calendar-view>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarView from '@/admin/components/CalendarView.vue';
export default {
  components: {
    CalendarView,
  },
};
</script>

<style lang="postcss" scoped>
@import '@/style/admin/views/sales.css';
</style>
