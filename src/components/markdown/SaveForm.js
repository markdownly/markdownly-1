import React from 'react';
import PropTypes from 'prop-types';

export default function SaveForm({ title, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type='text' name='title' value={title} ></input> 
      <button>ADD TITLE</button>
    </form> 
  );
} 

SaveForm.propTypes = {
  title: PropTypes.string.isRequired,
  // markdown: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
