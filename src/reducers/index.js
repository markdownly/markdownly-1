import { combineReducers } from 'redux';
import markdownList from './reducerMarkdownList';
import document from './reducerDocument';

export default combineReducers({
  markdownList,
  document
});
