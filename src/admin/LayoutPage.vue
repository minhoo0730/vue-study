<template>
  <header id="header">
    <div class="header-area">
      <div class="logo"><a href="/admin">LOGO</a></div>
      <nav class="nav">
        <ul>
          <li><router-link to="/admin/orders">주문관리</router-link></li>
          <li><router-link to="/admin/sales">매출관리</router-link></li>
          <li><router-link to="/admin/menus">메뉴관리</router-link></li>
          <li><router-link to="/admin/users">사용자관리</router-link></li>
        </ul>
      </nav>
      <div class="user-area">
        <button><i class="ri-search-line"></i></button>
        <button><i class="ri-notification-3-line"></i></button>
        <button><i class="ri-user-settings-line"></i></button>
      </div>
    </div>
  </header>
  <router-view></router-view>
  <footer id="footer">
    <p>© Company Corp. All rights reserved.</p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import '@/style/admin/common/header.css';
@import '@/style/admin/common/content.css';
@import '@/style/admin/common/footer.css';
</style>
