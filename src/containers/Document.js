import React, { PureComponent } from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import store from '../store';
import { getMarkdown } from '../selectors/selectMarkdown'; 
import { updateMarkdown } from '../actions/actionUpdateMarkdown';
import MarkdownNav from './MarkdownNav';
import styles from './Document.css';

export default class Document extends PureComponent {
  state = {
    markdown: '# Hi there',
    unsubscribe: null
  };

  updateState = () => {
    const entireState = store.getState();
    const markdown = getMarkdown(entireState);
    this.setState({ markdown });
  };

  updateMarkdown = ({ target }) => {
    store.dispatch(updateMarkdown(target.value));
  };

  componentDidMount() { 
    this.updateState();
    const unsubscribe = store.subscribe(() => {
      this.updateState();
    });
    this.setState({ unsubscribe });
  }
  
  componentWillUnmount() {
    this.state.unsubscribe();
  }

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          {/* <MarkdownNav /> */}
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
    );
  }
}
