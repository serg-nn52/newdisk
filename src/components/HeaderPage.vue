<template>
  <header class="header">
    <div class="container">
      <router-link class="logo-link" to="/"
        ><LogoHeader class="logo" /><span
          >Система<br />
          таблиц</span
        ></router-link
      >
      <user-info />
    </div>
  </header>
</template>

<script>
import UserInfo from '@/widgets/UserInfo.vue';
import LogoHeader from '../assets/logo.svg';

export default {
  components: {
    LogoHeader,
    UserInfo,
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 45px;
  background-color: var(--bg-header);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1140px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
.logo {
  fill: var(--blue);
}
.logo-link {
  display: flex;
  gap: 5px;
  align-items: center;
  color: var(--blue);
  font-size: 14px;
  span {
    display: block;
  }
}
</style>
