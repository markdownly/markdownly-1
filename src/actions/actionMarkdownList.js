export const UPDATE_TITLE = 'UPDATE_TITLE';
export const SAVE_MARKDOWN = 'SAVE_MARKDOWN';

export const updateTitle = title => ({
  type: UPDATE_TITLE,
  payload: title 
});

export const saveMarkdown = (title, markdown) => ({
  type: SAVE_MARKDOWN,
  payload: {
    title,
    markdown
  }
});
