import Vue from 'vue';
import Vuex from 'vuex';
import { data } from '../data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    students: data,
  },
  getters: {
    getStudents: (state) => state.students,
    getSumScores: (state) => (id) =>
      state.students.find((el) => el.id === id).subjects.reduce((acc, el) => acc + +el.score, 0),
    getPercents: (state) => (id) =>
      Math.round(
        (state.students
          .find((el) => el.id === id)
          .subjects.reduce((acc, el) => acc + +el.score, 0) /
          15) *
          100,
      ),
  },
  mutations: {},
  actions: {},
  modules: {},
});
