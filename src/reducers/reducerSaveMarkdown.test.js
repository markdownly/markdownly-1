import reducer from './reducerSaveMarkdown';

describe('SaveMarkdown reducer', () => {
  it('shows a list of markdown', () => {
    const state = {
      markdowns: [{
        title: 'title',
        markdown: 'text'
      }]
    };
    const updatedState = reducer(state, {});

    expect(updatedState).toEqual({
      markdowns: [{
        title: 'title',
        markdown: 'text'
      }]
    });
  });
});
