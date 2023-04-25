<template>
  <layout-page>
    <div class="container">
      <h1 class="title">Список заявлений</h1>
      <input-search class="search" />
      <student-table />
    </div>
  </layout-page>
</template>

<script>
import LayoutPage from '@/components/LayoutPage.vue';
import InputSearch from '@/widgets/InputSearch.vue';
import StudentTable from '@/components/StudentTable.vue';

export default {
  name: 'HomeView',
  components: {
    LayoutPage,
    InputSearch,
    StudentTable,
  },
};
</script>

<style lang="scss">
.container {
  width: 1140px;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
}
.title {
  font-weight: 700;
  font-size: 20px;
  margin-top: 40px;
}
.search {
  margin-top: 10px;
}
</style>
