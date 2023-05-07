<template>
  <div id="container">
    <div id="content" class="full-view-page">
      <h2 class="content-title">
        <span>주문관리</span>
      </h2>
      <div class="inquiry-result">
        <div class="order-top">
          <h4 class="content-sub-title">주문내역</h4>
          <div class="order-top-btn">
            <button class="btn add-btn">직접주문</button>
          </div>
        </div>

        <div class="day-result">
          <table>
            <thead>
              <tr>
                <th scope="col">주문번호</th>
                <th scope="col">주문시간</th>
                <th scope="col">주문금액</th>
                <th scope="col">카드명</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="list in 10" :key="list">
                <td>0001</td>
                <td>2023.04.30 09:00</td>
                <td>35,000원</td>
                <td>현대</td>
                <td class="text-center">
                  <button class="detail-btn">
                    <i class="ri-list-unordered"></i>
                    상세정보
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '@/style/admin/views/order.css';
</style>
