import React from 'react';
import PropTypes from 'prop-types';

export default function MarkdownFile({ markdownTitles }) {
  console.log('thiss', markdownTitles);
  const titleList = markdownTitles.map((title) => {
    return <li key={title}>{title}</li>;
  });
  return (
    <ul>{titleList}</ul>
  );

}

MarkdownFile.propTypes = {
  markdownTitles: PropTypes.array.isRequired
};
