import SaveForm from '../components/markdown/SaveForm';
import { connect } from 'react-redux';
import { getActiveTitle } from '../selectors/selectTitles';
import { updateTitle, saveMarkdown } from '../actions/actionMarkdownList';
import { getMarkdown } from '../selectors/selectMarkdown';

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
