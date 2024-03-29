<template>
  <div class="wrapper-table">
    <div v-if="getFilterStudents.length" class="table">
      <div class="table-header" onselectstart="return false" onmousedown="return false">
        <sortable-cell :name="'name'">ФИО</sortable-cell>
        <sortable-cell :name="'date'">Дата подачи заявления</sortable-cell>
        <sortable-cell :name="'russian'">Балл по русскому</sortable-cell>
        <sortable-cell :name="'math'">Балл по математике</sortable-cell>
        <sortable-cell :name="'informatics'">Балл по информатике</sortable-cell>
        <sortable-cell :name="'sum'">Суммарный балл</sortable-cell>
        <sortable-cell :name="'percents'">Процент</sortable-cell>
      </div>
      <div v-for="student in getFilterStudents" :key="student.id" class="table-row">
        <div class="row-name">{{ student.name }}</div>
        <div class="row-date">{{ parseDate(student.date) }}</div>
        <score-cell :score="Number(student.subjects[0].score).toFixed(1)" />
        <score-cell :score="Number(student.subjects[1].score).toFixed(1)" />
        <score-cell :score="Number(student.subjects[2].score).toFixed(1)" />
        <score-cell :isSum="true" :score="student.sum" />
        <progressbar-cell :percents="student.percents" />
      </div>
    </div>
    <h2 class="not-found" v-else>Результаты не найдены!</h2>
  </div>
</template>

<script>
import ScoreCell from '@/widgets/ScoreCell.vue';
import { mapGetters, mapMutations } from 'vuex';
import ProgressbarCell from '@/widgets/ProgressbarCell.vue';
import SortableCell from './SortableCell.vue';

export default {
  components: {
    ScoreCell,
    ProgressbarCell,
    SortableCell,
  },

  computed: {
    ...mapGetters(['getFilterStudents']),
  },
  methods: {
    ...mapMutations(['setSortState', 'setFiltersMutation']),
    parseDate(date) {
      const dateFormatted = new Date(date);
      return dateFormatted.toLocaleString().split(',')[0];
    },
  },
  mounted() {
    const { search, sortName, sortMethod } = this.$route.query;

    if (typeof search === 'string') {
      this.setFiltersMutation(Object.values([search]));
    } else {
      search && this.setFiltersMutation(Object.values(search));
    }

    if (sortName && sortMethod) {
      this.setSortState({ name: sortName, method: sortMethod });
    }
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_media.scss';
.wrapper-table {
  width: 100%;
  overflow-x: auto;
  @include media-breakpoint-down(md) {
    display: none;
  }
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    height: 5px;
    border-radius: 2px;
    background-color: var(--border-input);
  }
  //firefox
  scrollbar-color: var(--border-input) var(--bg-main);
}
.table {
  width: 1110px;
  display: grid;
  grid-gap: 5px;
  margin-top: 30px;
  padding-bottom: 5px;
}
.table-header {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 1fr 155px 120px 135px 145px 120px 70px;
  text-align: center;
  font-weight: 700;
  color: var(--blue);
  div {
    padding: 10px 5px;
    cursor: pointer;
    svg {
      fill: var(--blue);
      height: 10px;
    }
  }
}
.table-row {
  display: grid;
  grid-template-columns: 1fr 155px 120px 135px 145px 120px 70px;
  text-align: left;
  grid-gap: 2px;
  div {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: var(--white);
    font-size: 14px;
  }
}
.not-found {
  margin-top: 30px;
  font-size: 18px;
}
</style>
