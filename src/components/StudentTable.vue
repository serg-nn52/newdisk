<template>
  <div class="table">
    <div class="table-header">
      <div class="header-name">ФИО</div>
      <div class="header-date">Дата подачи заявления</div>
      <div class="header-grade">Балл по русскому</div>
      <div class="header-grade">Балл по математике</div>
      <div class="header-grade">Балл по информатике</div>
      <div class="header-grade">Суммарный балл</div>
      <div class="header-percent">Процент</div>
    </div>
    <div v-for="student in getStudents" :key="student.id" class="table-row">
      <div class="row-name">{{ student.name }}</div>
      <div class="row-date">{{ parseDate(student.date) }}</div>
      <score-cell :score="Number(student.subjects[0].score).toFixed(1)" />
      <score-cell :score="Number(student.subjects[1].score).toFixed(1)" />
      <score-cell :score="Number(student.subjects[2].score).toFixed(1)" />
      <score-cell :isSum="true" :score="getSumScores(student.id)" />
      <progressbar-cell :percents="getPercents(student.id)" />
    </div>
  </div>
</template>

<script>
import ScoreCell from '@/widgets/ScoreCell.vue';
import { mapGetters } from 'vuex';
import ProgressbarCell from '@/widgets/ProgressbarCell.vue';

export default {
  components: { ScoreCell, ProgressbarCell },
  computed: {
    ...mapGetters(['getStudents', 'getSumScores', 'getPercents']),
  },
  methods: {
    parseDate(date) {
      const dateFormated = new Date(date);
      return dateFormated.toLocaleString().split(',')[0];
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-gap: 5px;
}
.table-header {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 170px repeat(4, 140px) 65px;
  text-align: center;
  font-weight: 700;
  color: var(--blue);
  div {
    padding: 10px 5px;
  }
}
.table-row {
  display: grid;
  grid-template-columns: 1fr 170px repeat(4, 140px) 65px;
  text-align: left;
  grid-gap: 2px;
  div {
    display: flex;
    align-items: center;
    padding: 10px 5px;
    background-color: var(--white);
  }
}
</style>
