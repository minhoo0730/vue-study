<template>
  <div id="container" class="admin">
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

<style lang="scss" scoped>
// @import '@/style/admin/views/order.css';
@use '@/style/import-design' as *;
.inquiry-result{
  .order-top{
    display:flex; justify-content:space-between; align-items:flex-end;margin:16px 0 12px 0;
    .add-btn{
      display:flex; background:#648fdb; color:$white; border:none; padding:0 10px;
    }
  }
  .day-result{
    margin:16px 0; border:1px solid $gray_300; border-radius:8px;
    > table{
      width:100%; text-align:left; background:$white;
      thead th{
        color:$black; background:$gray_100; padding:10px 16px; border-bottom:1px solid $gray_300;
      }
      tbody tr{
        border:1px solid $gray_300;
        &:last-child{border:none;}
        td{
          padding:10px 16px; font-weight:400;
          .detail-btn{
            background:$green_100; border:1px solid $green_300; padding:8px 4px; border-radius:8px; font-size:1.4rem; color:$green_600; font-weight:600;
            > i{
              margin:0 4px;
            }
          }
        }
      }
    }
  }
}


</style>
