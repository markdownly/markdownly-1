export const SHOW_MARKDOWN = 'SHOW_MARKDOWN';

export const showMarkdown = (markdown) => ({
  type: SHOW_MARKDOWN,
  payload: {
    ...markdown
  }
});
