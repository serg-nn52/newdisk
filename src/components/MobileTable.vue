<template>
  <div v-if="getFilterStudents.length" class="mobile-wrapper">
    <div v-for="student in getFilterStudents" :key="student.id" class="mobileTableCard">
      <mobile-cell
        :student="{
          name: student.name,
          date: parseDate(student.date),
          russian: Number(student.subjects[0].score).toFixed(1),
          math: Number(student.subjects[1].score).toFixed(1),
          informatics: Number(student.subjects[2].score).toFixed(1),
          sum: student.sum,
          percents: student.percents,
        }"
      />
    </div>
  </div>
  <h2 class="not-found" v-else>Результаты не найдены!</h2>
</template>

<script>
import MobileCell from '@/widgets/MobileCell.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: { MobileCell },
  computed: {
    ...mapGetters(['getFilterStudents']),
  },
  methods: {
    ...mapMutations(['setSortState', 'setFiltersMutation']),
    parseDate(date) {
      const dateFormated = new Date(date);
      return dateFormated.toLocaleString().split(',')[0];
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_media.scss';
.mobile-wrapper {
  display: none;
  margin-top: 10px;
  @include media-breakpoint-down(md) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
.not-found {
  margin-top: 30px;
  font-size: 18px;
}
</style>
