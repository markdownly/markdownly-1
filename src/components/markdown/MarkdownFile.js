import React from 'react';
import PropTypes from 'prop-types';

export default function MarkdownFile({ markdownTitle }) {
  return (
    <li>{markdownTitle}</li>
  );
}

MarkdownFile.propTypes = {
  markdownTitle: PropTypes.string.isRequired
};
