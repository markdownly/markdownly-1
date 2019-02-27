import React, { PureComponent } from 'react';
import store from '../../store';
import { getTitles } from '../../selectors/selectMarkdownList';
import MarkdownFiles from './MarkdownFiles';

export default class MarkdownNav extends PureComponent {
  state = {
    titles: []
  };

  updateState = () => {
    const titles = getTitles(store.getState());
    console.log('thiss', titles);
    this.setState({ titles });
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
    const { titles } = this.state;
    console.log('thees', titles);
    return (
      <MarkdownFiles titles={titles} />
    );
  }
}
