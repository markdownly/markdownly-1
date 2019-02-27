import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownFiles from './MarkdownFiles';

describe('MarkdownFiles', () => {
  it('matches a snapshot', () => {
    const titles = ['file1', 'file2'];

    const tree = renderer.create(
      <MarkdownFiles titles={titles} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
