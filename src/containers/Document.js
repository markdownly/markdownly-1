import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMarkdown } from '../selectors/selectDocument';
import { updateMarkdown } from '../actions/actionDocument';
import MarkdownNav from './MarkdownNav';
import SaveMarkdown from './SaveMarkdown';
import styles from './Document.css';
import { getActiveMarkdown, getActiveTitle } from '../selectors/selectMarkdownNav';

const mapStateToProps = (state, props) =>   ({
  index: props.match.params.index,
  markdown: getActiveMarkdown(state, props.match.params.index) || getMarkdown(state), 
  title: getActiveTitle(state, props.match.params.index)

});

const mapDispatchToProps = (dispatch) => ({
  updateMarkdown({ target }) {
    //pass index to updateMarkdown
    dispatch(updateMarkdown(target.value));
  }
});

function Document({ markdown, title, index, updateMarkdown }) {
  return (
    <>
      <SaveMarkdown title={title} />
      <div className={styles.Document}>
        <MarkdownNav index={index} />
        <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string,
  index:'',
  updateMarkdown: PropTypes.func.isRequired,
  title: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);


