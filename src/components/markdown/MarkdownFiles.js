import React from 'react';
import PropTypes from 'prop-types';

export default function MarkdownFiles({ titles }) {
  const titleList = titles.map((title, i) => {
    return <a key={i} href='#'><li>{title}</li></a>;
  });
  return (
    <ul>{titleList}</ul>
  );
}

MarkdownFiles.propTypes = {
  titles: PropTypes.array.isRequired
};
