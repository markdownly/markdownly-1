import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownFile from './MarkdownFile';

describe('MarkdownFile', () => {
  it('matches a snapshot', () => {
    const markdownTitles = ['file1', 'file2'];

    const tree = renderer.create(
      <MarkdownFile markdownTitles={markdownTitles} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
