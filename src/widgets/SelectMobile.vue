<template>
  <div class="select-wrapper">
    <div class="select">
      <div @click="isOpen = !isOpen" :class="{ ['select-header']: true, focus: isOpen }">
        <p>Сортировать по</p>
        <p class="selected">{{ selectedOption.title }}</p>
        <div class="arrows">
          <sort-up v-if="isOpen" class="arrowUp arrow" />
          <sort-down v-else class="arrowDown arrow" />
        </div>
      </div>
      <div v-if="isOpen" @click="isOpen = false" class="dropdown">
        <div
          :key="option.id"
          v-for="option in options"
          @click="setValue(option.id, method)"
          class="option"
        >
          {{ option.title }}
        </div>
      </div>
    </div>
    <div class="buttons">
      <div
        :class="{ button: true, activeButton: method === 'down' }"
        @click="setValue(selectedOption.id, 'down')"
      >
        <arrow-down />
      </div>
      <div
        :class="{ button: true, activeButton: method === 'up' }"
        @click="setValue(selectedOption.id, 'up')"
      >
        <arrow-up />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import SortUp from '@/assets/icons/sortUp.svg';
import SortDown from '@/assets/icons/sortDown.svg';
import ArrowUp from '@/assets/icons/arrowUp.svg';
import ArrowDown from '@/assets/icons/arrowDown.svg';
import router from '@/router';

const options = [
  { id: 1, title: 'ФИО', value: 'name' },
  { id: 2, title: 'Дата подачи заявления', value: 'date' },
  { id: 3, title: 'Балл по русскому', value: 'russian' },
  { id: 4, title: 'Балл по математике', value: 'math' },
  { id: 5, title: 'Балл по информатике', value: 'informatics' },
  { id: 6, title: 'Суммарный балл', value: 'sum' },
  { id: 7, title: 'Процент', value: 'percents' },
];

export default {
  components: {
    SortDown,
    SortUp,
    ArrowDown,
    ArrowUp,
  },
  data() {
    return {
      selectedOption: options[0],
      options,
      isOpen: false,
      method: '',
    };
  },
  computed: {
    ...mapGetters(['getFilterStudents', 'getFilters']),
  },
  methods: {
    ...mapMutations(['setSortState']),
    setValue(id, method) {
      this.selectedOption = this.options.find((el) => el.id === id);
      this.method = method;
      this.sort();
    },
    sort() {
      this.setSortState({ name: this.selectedOption.value, method: this.method });
      const query = {
        sortName: this.selectedOption.value,
        sortMethod: this.method,
        search: this.getFilters,
      };
      router
        .push({
          query,
        })
        .catch(() => {});
    },
  },
  mounted() {
    const { sortName, sortMethod } = this.$route.query;
    if (sortName) this.selectedOption = options.find((el) => el.value === sortName);
    if (sortMethod) this.method = sortMethod;
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_media.scss';
.select-wrapper {
  max-width: 100%;
  display: none;
  margin-top: 20px;
  @include media-breakpoint-down(md) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) max-content;
    gap: 10px;
  }
}
.select {
  max-width: 100%;
  height: max-content;
  position: relative;
}
.select-header {
  padding: 10px 35px 10px 5px;
  background-color: var(--white);
  border-radius: 2px;
  border: 1px solid var(--border-input);
  cursor: pointer;
  p {
    max-width: 100%;
    font-size: 12px;
    color: var(--search-color);
  }
  .selected {
    max-width: 100%;
    margin-top: 5px;
    font-weight: 500;
    font-size: 14px;
    color: var(--black);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
  }
}
.arrows {
  position: absolute;
  top: 18px;
  right: 10px;
}
.arrow {
  width: 32px;
  height: 32px;
  fill: var(--blue);
}
.arrowDown {
  position: absolute;
  top: -12px;
  right: 0;
}
.focus {
  border: 2px solid var(--border-active);
  padding: 9px 4px;
}
.dropdown {
  position: absolute;
  z-index: 5;
  margin-top: 10px;
  left: 0;
  right: 0;
  background-color: var(--white);
  border-radius: 2px;
  border: 1px solid var(--border-input);
}
.option {
  padding: 15px 5px;
  font-size: 14px;
  color: var(--black);
  &:not(:last-child) {
    border-bottom: 1px solid var(--border-input);
  }
}
.buttons {
  display: flex;
  gap: 10px;
}
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border: 1px solid var(--blue);
  border-radius: 3px;
  svg {
    fill: var(--blue);
    height: 20px;
  }
}
.activeButton {
  background-color: var(--blue);
  svg {
    fill: var(--bg-main);
  }
}
</style>
