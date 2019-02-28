import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getMarkdown } from '../selectors/selectMarkdown'; 
import { updateMarkdown } from '../actions/actionUpdateMarkdown';
// import MarkdownNav from './MarkdownNav';
import styles from './Document.css';

const mapStateToProps = (state) => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = (dispatch) => ({
  updateMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

function Document({ markdown, updateMarkdown }) {
  return (
      <>
        <div className={styles.Document}>
          {/* <MarkdownNav /> */}
          <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);


