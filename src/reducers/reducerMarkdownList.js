import { SAVE_MARKDOWN, UPDATE_TITLE } from '../actions/actionMarkdownList';

const initialState = {
  markdowns: [{
    title: 'title',
    markdown: 'text'
  }]
};

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
