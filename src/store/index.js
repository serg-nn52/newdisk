import Vue from 'vue';
import Vuex from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { data } from '../data';

Vue.use(Vuex);

const students = data
  .sort((a, b) => (a.name > b.name ? 1 : -1))
  .map((el) => ({
    ...el,
    sum: el.subjects.reduce((acc, item) => acc + +item.score, 0),
    percents: Math.round((el.subjects.reduce((acc, item) => acc + +item.score, 0) / 15) * 100),
  }));

export default new Vuex.Store({
  state: {
    students,
    sort: {
      field: 'name',
      method: 'down',
    },
    filters: [],
  },
  getters,
  mutations,
});
