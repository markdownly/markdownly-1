import React from 'react';
import PropTypes from 'prop-types';

export default function MarkdownFiles({ markdownTitles }) {
  const titleList = markdownTitles.map((title) => {
    return <li key={title}>{title}</li>;
  });
  return (
    <ul>{titleList}</ul>
  );
}

MarkdownFiles.propTypes = {
  markdownTitles: PropTypes.array.isRequired
};
