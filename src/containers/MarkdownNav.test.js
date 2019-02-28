import React from 'react';
import renderer from 'react-test-renderer';
import MarkdownNav from './MarkdownNav';

describe('markdown nav component', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <MarkdownNav />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
