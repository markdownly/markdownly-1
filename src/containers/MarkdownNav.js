import React, { PureComponent } from 'react';
import store from '../store';
import { getTitles } from '../selectors/selectTitles';
import MarkdownFiles from '../components/markdown/MarkdownFiles';

export default class MarkdownNav extends PureComponent {
  state = {
    titles: []
  };

  updateState = () => {
    const titles = getTitles(store.getState());
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
    return (
      <MarkdownFiles titles={titles} />
    );
  }
}
