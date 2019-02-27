import reducer from './reducerDocument';

describe('updateMarkdown reducer', () => {
  it('handles the update of a markdown', () => {
    const state = {
      markdown: ''
    };

    const updatedState = reducer(state, {
      type: 'UPDATE_MARKDOWN',
      payload: 'markdown string'
    });

    expect(updatedState).toEqual({
      markdown: 'markdown string'
    });
  });
});
