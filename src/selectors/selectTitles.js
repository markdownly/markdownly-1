export const getMarkdowns = state => {
  return state.markdownList.markdowns;
};

export const getTitles = state => {
  return getMarkdowns(state).map(doc => doc.title);
};

export const getMarkdownTexts = state => {
  return getMarkdowns(state).map(doc => doc.markdown);
};

export const getActiveTitle = state => {
  return getTitles(state)[0];
};
