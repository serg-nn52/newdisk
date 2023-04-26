<template>
  <div class="search-field">
    <label for="search"><SearchIcon class="search-icon" /></label>
    <input
      type="text"
      class="search-input"
      id="search"
      placeholder="Поиск"
      v-model.trim="searchWords"
      @input="setFilters"
    />
  </div>
</template>

<script>
import SearchIcon from '@/assets/icons/search.svg';
import { mapGetters, mapMutations } from 'vuex';
import router from '@/router';

export default {
  components: {
    SearchIcon,
  },
  data() {
    return {
      searchWords: '',
    };
  },
  computed: {
    ...mapGetters(['getSort']),
    searchWordsArray() {
      return this.searchWords.split(' ').filter((el) => !!el);
    },
  },
  methods: {
    ...mapMutations(['setFiltersMutation']),
    setFilters() {
      const query = {
        sortName: this.getSort.field,
        sortMethod: this.getSort.method,
        search: this.searchWordsArray,
      };
      this.setFiltersMutation(this.searchWordsArray);
      router
        .push({
          query,
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.search-field {
  position: relative;
  display: block;
  width: 100%;
  label {
    position: absolute;
    top: 10px;
    left: 15px;
  }
}
.search-input {
  width: 100%;
  height: 40px;
  padding: 5px 5px 5px 50px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid var(--border-input);
  outline: none;
  &:hover {
    border: 1px solid var(--border-hover);
  }
  &:active,
  &:focus {
    border: 2px solid var(--border-active);
    padding: 4px 4px 4px 49px;
  }
}
.search-icon {
  width: 20px;
  height: 20px;
  fill: var(--blue);
}
</style>
