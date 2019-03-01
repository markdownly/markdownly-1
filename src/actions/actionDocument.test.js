import { 
  updateMarkdown, 
  UPDATE_MARKDOWN 
} from './actionDocument';

describe('update markdown action', () => {
  it('updates a markdown action', () => {
    const action = updateMarkdown('update markdown text');

    expect(action).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'update markdown text'
    });
  });
});
