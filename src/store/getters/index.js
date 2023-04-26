export const getters = {
  getStudents: (state) => state.students,
  getFilterStudents: (state) => {
    const searchWords = state.filters;

    let temp = state.students;
    for (let i = 0; i < searchWords.length; i += 1) {
      temp = temp.filter((el) => el.name.toLowerCase().includes(searchWords[i]));
    }

    return temp;
  },
  getSort: (state) => state.sort,
  getFilters: (state) => state.filters,
};
