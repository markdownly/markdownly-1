import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 

export default function MarkdownFiles({ titles }) {
  const titleList = titles.map((title, i) => {
    return <Link to={`/markdown/${i}`} key={i}><li>{title}</li></Link>;
  });
  return (
    <ul>{titleList}</ul>
  );
}

MarkdownFiles.propTypes = {
  titles: PropTypes.array.isRequired
};
