import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import { connect } from 'react-redux';
import { getMarkdown } from '../selectors/selectMarkdown'; 
import { updateMarkdown } from '../actions/actionUpdateMarkdown';
// import MarkdownNav from './MarkdownNav';
import styles from './Document.css';


//data type props
const mapStateToProps = (state) => ({
  markdown: getMarkdown(state)
});
//function type props
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);

// const ConnectedEditor = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Editor);

// const ConnectedEPreview = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Preview);
