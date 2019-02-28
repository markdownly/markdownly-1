export const getList = state => {
  return state.markdownList.markdowns;
};

export const getTitles = state => {
  return getList(state).map(doc => doc.title);
};
