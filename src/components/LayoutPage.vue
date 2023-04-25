<template>
  <div class="wrapper">
    <header-page />
    <slot></slot>
  </div>
</template>

<script>
import HeaderPage from './HeaderPage.vue';

export default { components: { HeaderPage } };
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  padding-bottom: 40px;
  background-color: var(--bg-main);
}
</style>
