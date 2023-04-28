<template>
  <div @click="sort" class="header-cell">
    <slot></slot>
    <span v-show="name === getSort.field"
      >{{ ' ' }}<ArrowDown v-if="getSort.method === 'down'" /><ArrowUp
        v-if="getSort.method === 'up'"
    /></span>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ArrowUp from '@/assets/icons/arrowUp.svg';
import ArrowDown from '@/assets/icons/arrowDown.svg';
import router from '@/router';

export default {
  components: {
    ArrowDown,
    ArrowUp,
  },
  props: ['name'],
  data() {
    return {
      method: '',
    };
  },
  methods: {
    ...mapMutations(['setSortState']),
    sort() {
      this.method = this.method === 'down' ? 'up' : 'down';
      this.setSortState({ name: this.name, method: this.method });
      const query = {
        sortName: this.name,
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
  computed: {
    ...mapGetters(['getSort', 'getFilters']),
  },
  mounted() {
    this.method = this.getSort.method;
  },
};
</script>

<style lang="scss" scoped>
.header-cell {
  padding: 10px 5px;
  svg {
    fill: var(--blue);
    height: 10px;
  }
}
</style>
