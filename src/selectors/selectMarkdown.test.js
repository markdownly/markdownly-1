import { getMarkdown } from './selectMarkdown';

describe('select markdown', () => {
  it('selects markdown from state', () => {
    const state = {
      markdown: 'markdown to select'
    };

    expect(getMarkdown(state)).toEqual('markdown to select');
  });
});
