export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
//pass markdown and index in the payload
export const updateMarkdown = markdown => ({
  type: UPDATE_MARKDOWN,
  payload: markdown 
});
