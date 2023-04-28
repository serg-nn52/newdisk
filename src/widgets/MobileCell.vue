<template>
  <div class="card-wrapper">
    <div>ФИО</div>
    <div>{{ student.name }}</div>
    <div>Дата подачи заявления</div>
    <div>{{ student.date }}</div>
    <div>Балл по русскому</div>
    <score-cell :score="student.russian" />
    <div>Балл по математике</div>
    <score-cell :score="student.math" />
    <div>Балл по информатике</div>
    <score-cell :score="student.informatics" />
    <div>Суммарный балл</div>
    <score-cell :isSum="true" :score="student.sum" />
    <div>Процент</div>
    <progressbar-mobile :percents="student.percents" />
  </div>
</template>

<script>
import ProgressbarMobile from './ProgressbarMobile.vue';
import ScoreCell from './ScoreCell.vue';

export default {
  components: { ScoreCell, ProgressbarMobile },
  props: ['student'],
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 50%) minmax(0, 50%);
  grid-row-gap: 5px;
  div {
    background-color: var(--white);
    padding: 10px 15px;
    font-size: 12px;
    &:nth-child(2n + 1) {
      color: var(--search-color);
      font-weight: 700;
    }
  }
}
</style>
