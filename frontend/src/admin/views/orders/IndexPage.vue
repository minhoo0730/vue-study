<template>
  <div id="container">
    <div class="inquiry-result">
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
            <tr>
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
            <tr>
              <td>0002</td>
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
            <tr>
              <td>0003</td>
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
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '@/style/admin/views/order.css';
</style>
