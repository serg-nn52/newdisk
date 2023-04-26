<template>
  <div class="user__wrapper">
    <div class="user__info">
      <p class="user__name">Сергей</p>
      <p>Сотрудник</p>
    </div>
    <img class="avatar" src="@/assets/img/avatar.jpg" alt="avatar" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user__wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  text-align: right;
}
.user__name {
  font-size: 12px;
  font-weight: 700;
  color: var(--blue);
}
.avatar {
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
}
</style>
