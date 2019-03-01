import { UPDATE_MARKDOWN } from '../actions/actionDocument';

const initialState = { 
  markdown: '# Hi There'
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case  UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload
      };
    default: 
      return state;
  }
}
