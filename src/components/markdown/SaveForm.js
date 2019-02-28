import React from 'react';
import PropTypes from 'prop-types';

export default function SaveForm({ title, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='title' value={title} ></input> 
      <button>ADD TITLE</button>
    </form> 
  );
} 

SaveForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
