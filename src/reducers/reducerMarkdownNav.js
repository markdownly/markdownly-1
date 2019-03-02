import { SHOW_MARKDOWN } from '../actions/actionMarkdownNav';

const initialState = {
  markdown: {
    title: '',
    markdown: ''
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SHOW_MARKDOWN:
      return {
        markdown: {
          ...action.payload
        }
      };
    default: 
      return state;
  }
}
