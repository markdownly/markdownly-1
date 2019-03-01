import SaveForm from '../components/markdown/SaveForm';
import { connect } from 'react-redux';
import { getActiveTitle } from '../selectors/selectSaveMarkdown';
import { updateTitle, saveMarkdown } from '../actions/actionSaveMarkdown';
import { getMarkdown } from '../selectors/selectDocument';

const mapStateToProps = (state) => ({
  markdown: getMarkdown(state),
  title: getActiveTitle(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChange({ target }) {
    dispatch(updateTitle(target.value));
  },

  onSubmit(title, markdown, event) {
    event.preventDefault();
    dispatch(saveMarkdown(title, markdown));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveForm);
