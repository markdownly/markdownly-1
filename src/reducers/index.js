import { combineReducers } from 'redux';
import markdownList from './reducerSaveMarkdown';
import document from './reducerDocument';

export default combineReducers({
  markdownList,
  document
});
