import React, { PureComponent } from 'react';
import store from '../store';
import { getList } from '../selectors/selectTitles';
import SaveForm from '../components/markdown/SaveForm';

export default class SaveMarkdown extends PureComponent {
  state = {
    markdowns: [],
    title: 'hello',
    markdown: 'some text'
  };

  // updateState = () => {
  //   const markdowns = getList(store.getState());
  //   this.setState({ markdowns });
  // };

  // componentDidMount() {
  //   this.updateState();
  //   const unsubscribe = store.subscribe(() => {
  //     this.updateState();
  //   });
  //   this.getState({ unsubscribe });
  // }

  // componentWillUnmount() {
  //   this.state.unsubscribe();
  // }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title } = this.state;
    return (
      <SaveForm 
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        title={title}
        // markdown={markdown}
      />
    );
  }
}
