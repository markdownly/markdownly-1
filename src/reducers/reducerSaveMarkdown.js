import { SAVE_MARKDOWN, UPDATE_TITLE } from '../actions/actionSaveMarkdown';

const initialState = {
  markdowns: [{
    title: 'title',
    markdown: 'text'
  }],
  title: 'banana'
};
//create a handle for grabbing the index, update it, splice the old one out & add the new one
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_MARKDOWN:
      return {
        ...state,
        markdowns: [
          ...state.markdowns,
          { ...action.payload }
        ]
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default: 
      return state;
  }
}
