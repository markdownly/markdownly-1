import reducer from './reducerMarkdownList';

describe('markdown list reducer', () => {
  it('shows a list of markdown', () => {
    const state = {
      markdowns: [{
        title: 'title',
        text: 'text'
      }]
    };
    const updatedState = reducer(state, {});

    expect(updatedState).toEqual({
      markdowns: [{
        title: 'title',
        text: 'text'
      }]
    });
  });
});
