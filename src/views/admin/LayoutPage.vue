<template>
  <header id="header">
    <div class="header-area">
      <div class="logo"><a href="/admin">LOGO</a></div>
      <nav class="nav">
        <ul>
          <li><router-link to="/admin/sales">매출관리</router-link></li>
          <li><router-link to="/admin/menus">메뉴관리</router-link></li>
          <li><router-link to="/admin/users">사용자관리</router-link></li>
          <li><router-link to="/admin/orders">주문관리</router-link></li>
        </ul>
      </nav>
      <div class="user-area">
        <button>검색</button>
        <button>알림</button>
        <button>사용자페이지 버튼</button>
      </div>
    </div>
  </header>
  <div id="content">
    <router-view></router-view>
  </div>
  <footer id="footer">Footer</footer>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped></style>
