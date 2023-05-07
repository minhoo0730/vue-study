<template>
  <header id="header">
    <div class="header-area">
      <div class="logo"><a href="/admin">LOGO</a></div>
      <nav class="nav">
        <ul>
          <li>
            <router-link to="/admin/orders">
              <i class="ri-todo-line"></i>
              주문
            </router-link>
          </li>
          <li>
            <router-link to="/admin/menus">
              <i class="ri-restaurant-line"></i>
              메뉴
            </router-link>
          </li>
          <li>
            <router-link to="/admin/sales">
              <i class="ri-cash-line"></i>
              매출
            </router-link>
          </li>
          <li>
            <router-link to="/admin/member">
              <i class="ri-user-line"></i>
              멤버
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="user-area">
        <!-- <button><i class="ri-search-line"></i></button> -->
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
@import '@/style/admin/common/footer.css';
</style>
