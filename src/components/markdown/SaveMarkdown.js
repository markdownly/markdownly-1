import React from 'react';
import PropTypes from 'prop-types';

export default function SaveMarkdown({ title, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='title' value={title} ></input> 
      <button>ADD TITLE</button>
    </form> 
  );
} 

SaveMarkdown.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
