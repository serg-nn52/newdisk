export const mutations = {
  setFiltersMutation: (state, payload) => {
    state.filters = payload;
  },
  setSortState: (state, { name, method }) => {
    state.sort.method = method;
    state.sort.field = name;
    if (name === 'name') {
      state.students = state.students.sort((a, b) =>
        method === 'up' ? (a.name > b.name ? 1 : -1) : a.name < b.name ? 1 : -1,
      );
    }
    if (name === 'date') {
      state.students = state.students.sort((a, b) =>
        method === 'up' ? (a.date > b.date ? 1 : -1) : a.date < b.date ? 1 : -1,
      );
    }
    if (name === 'russian') {
      state.students = state.students.sort((a, b) =>
        method === 'up'
          ? +a.subjects[0].score - +b.subjects[0].score
          : +b.subjects[0].score - +a.subjects[0].score,
      );
    }
    if (name === 'math') {
      state.students = state.students.sort((a, b) =>
        method === 'up'
          ? +a.subjects[1].score - +b.subjects[1].score
          : +b.subjects[1].score - +a.subjects[1].score,
      );
    }
    if (name === 'informatics') {
      state.students = state.students.sort((a, b) =>
        method === 'up'
          ? +a.subjects[2].score - +b.subjects[2].score
          : +b.subjects[2].score - +a.subjects[2].score,
      );
    }
    if (name === 'sum') {
      state.students = state.students.sort((a, b) =>
        method === 'up' ? +a.sum - +b.sum : +b.sum - +a.sum,
      );
    }
    if (name === 'percents') {
      state.students = state.students.sort((a, b) =>
        method === 'up' ? +a.percents - +b.percents : +b.percents - +a.percents,
      );
    }
  },
};
