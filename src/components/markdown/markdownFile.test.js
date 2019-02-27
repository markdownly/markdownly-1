import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownFile from './MarkdownFile';

describe('MarkdownFile', () => {
  it('matches a snapshot', () => {
    const markdownTitle = 'some title text';

    const tree = renderer.create(
      <MarkdownFile markdownTitle={markdownTitle} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
