<template>
  <div id="container" class="admin">
    <div id="content">
      <h2 class="content-title">
        <span>멤버관리</span>
      </h2>
      <div class="member-view">
        <div class="member-top">
          <div class="member-top-btn">
            <button class="btn add-btn">멤버추가</button>
          </div>
        </div>
        <div class="member">
          <div class="member-role">
            <h4>권한 리스트</h4>
            <div>
              <button class="btn member-btn" v-for="list in 6" :key="list">
                권한 이름(관리자, 임직원 등)
              </button>
            </div>
          </div>
          <div class="member-area">
            <div class="search">
              <div class="count">전체 <b>0</b>명</div>
              <div class="search-area">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                />
              </div>
            </div>
            <div class="member-list">
              <div class="table-header">
                <h2 class="table-label">이름</h2>
                <h2 class="table-label">부서</h2>
                <h2 class="table-label">직책</h2>
              </div>
              <div class="table-content" v-for="member in 10" :key="member">
                <p class="table-label">이민호</p>
                <p class="table-label">개발팀</p>
                <p class="table-label">대리</p>
              </div>
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

<style lang="scss" scoped>
@import '@/style/admin/views/member.scss';
</style>
