import React, { PureComponent } from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import store from '../../store';
import { getMarkdown } from '../../selectors/selectMarkdown'; 

export default class Document extends PureComponent {
  state = {
    markdown: '# Hi there'
  };

  updateMarkdown = ({ target }) => {
    this.setState({ markdown: target.value });
  };
  componentDidMount(){
    const currentMarkdown = store.getState();
    console.log('Thanks vs code', currentMarkdown);
    const markdown = getMarkdown(currentMarkdown);
    this.setState({ markdown });
  }

  render() {
    const { markdown } = this.state;
    return (
      <>
        <div className={styles.Document}>
          <Editor markdown={markdown} updateMarkdown={this.updateMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </>
    );
  }
}
