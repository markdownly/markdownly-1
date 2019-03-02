export const getMarkdowns = state => {
  return state.markdownList.markdowns;
};

export const getTitles = state => {
  return getMarkdowns(state).map(doc => doc.title);
};

export const getMarkdownTexts = state => {
  return getMarkdowns(state).map(doc => doc.markdown);
};

export const getActiveMarkdown = (state, i) => {
  if(!i) return '';
  return state.markdownList.markdowns[i].markdown;
};
export const getActiveTitle = (state, i) => {
  if(!i) return '';
  return state.markdownList.markdowns[i].title;
};
