import React from 'react';
import PropTypes from 'prop-types';

export default function MarkdownFiles({ titles }) {
  const titleList = titles.map((title) => {
    return <li key={title}>{title}</li>;
  });
  return (
    <ul>{titleList}</ul>
  );
}

MarkdownFiles.propTypes = {
  titles: PropTypes.array.isRequired
};
