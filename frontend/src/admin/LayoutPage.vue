<template>
  <div class="admin-view">
    <header id="header">
      <v-row no-gutters class="w-100 h-100 align-center justify-space-between" style="padding:6px 40px;">
        <div class="logo">
          <router-link to="/admin">LOGO</router-link>
        </div>
        <nav class="nav">
          <ul class="d-flex">
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
      </v-row>
    </header>
    <router-view></router-view>
    <footer id="footer">
      <p>© Company Corp. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
*{text-decoration: none; color:#111;}
.admin-view{height:100vh; overflow:auto;}
#header{
  transform: translateY(0%);
  box-shadow: rgba(56, 63, 70, 0.06) 0px 2px 3px 0px;
  width:100%; position: sticky; top:0; z-index:111; background:#fff;
  .nav ul li{
    > a{
      display:flex; flex-direction: column; justify-content: center; align-items: center; font-size:1.4rem; height:56px; width:56px; font-weight:600; border-radius:8px;
      i{
        font-size:2.0rem; margin-bottom:2px; font-weight:400;
      }
    }
    .router-link-active, .router-link-exact-active{
      color:#648fdb; background:#eee;
      i{
        color:#648fdb;
      }
    }
  }
  .user-area{
    button{
      font-size:2.4rem; margin:0 8px;
      &:last-child{margin-right:0;}
      &:first-child{margin-left:0;}
    }
  }
}

#container{
  padding:20px 40px;
}

#footer{
  text-align:center; border-top:1px solid #ddd; padding:10px;
}
// @import '@/style/admin/common/header.scss';
// @import '@/style/admin/common/footer.scss';
</style>
