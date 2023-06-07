<template>
  <div id="container" class="admin">
    <!-- 메뉴 타이틀 등으로 사용 -->
    <div id="content">
      <h4 class="content-title">
        <span>2023.04.29 토요일</span>
        가게 매출 정보를 알려드릴게요.
      </h4>
      <div class="sales-result">
        <!-- <button>매출요약</button>
        <div>
          <button>매출상세정보</button>
          <button>누락매출찾기</button>
        </div> -->
        <div class="order-total grid_3">
          <div class="yesterday">
            <p>어제 주문 건수<span class="yesterday-date">4.28 금</span></p>
            <h4 class="amount">100<small class="total-use">건</small></h4>
          </div>
          <div class="today">
            <p>오늘 주문 건수<span class="yesterday-date">4.28 토</span></p>
            <h4 class="amount">50<small class="total-use">건</small></h4>
          </div>
        </div>
        <div class="total-inquiry grid_3">
          <div class="yesterday">
            <p>어제 전체 매출<span class="yesterday-date">4.28 금</span></p>
            <h4 class="amount">932,000<small class="total-use">원</small></h4>
          </div>
          <div class="today">
            <p>오늘 현재 매출<span class="yesterday-date">4.28 토</span></p>
            <h4 class="amount">89,000<small class="total-use">원</small></h4>
          </div>
        </div>
        <div class="detail-store grid_3">
          <div class="store-card">
            <p>매장<br />카드결제</p>
            <div>
              <p>어제 매출 <small class="total-use">870,000</small>원</p>
              <p>현재 매출 <small class="total-use">62,000</small>원</p>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-inquiry">
        <h4 class="content-title"><b>매출조회</b></h4>
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
import axios from 'axios';
export default {
  components: {
    CalendarView,
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/user')
      .then(r => {
        console.log(r);
      })
      .catch(e => {
        console.error(e.message);
      });
  },
};
</script>

<style lang="scss" scoped>
@use '@/style/import-design' as *;

.content-title{
  font-size:2.4rem; margin-top:28px; margin-bottom:14px;
  span{
    width:100%; font-weight:700; display:block;
  }
}
.sales-result{
  @include flex-row; flex-wrap:nowrap;
  > button{
    font-size:2.4rem;
  }
  > div{
    flex-direction:row;
    @include flex-left;
    @include set-color($black, $white);
    box-shadow:$shadow_black;
    border:1px solid $gray;
    border-radius:8px;
    padding:16px;
    margin-left:16px;
    &:first-child{margin-left:0;}
    > div{
      @include flex-col; width:100%;
      > p span{margin-left:6px;}
      > .amount{
        font-size:2.4rem;
        small.total-use{
          font-weight:500; font-size:1.6rem; margin-left:4px;
        }
      }
    }
    .store-card{
      @include flex-left; @include flex-row;
      > div, >p{
        width:100%;
      }
    }
  }
}

</style>
