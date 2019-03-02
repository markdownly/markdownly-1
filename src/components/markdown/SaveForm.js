import React from 'react';
import PropTypes from 'prop-types';

export default function SaveForm({ title, markdown, onSubmit, onChange }) {
  return (
    <>
    <form onSubmit={onSubmit.bind(null, title, markdown)}>
      <label> Name Your Markdown: 
        <input onChange={onChange} type='text' name='title' value={title}></input> 
      </label>
      <button>Save My Markdown</button>
    </form> 
    <h3>{title}</h3>
    </>
  );
} 

SaveForm.propTypes = {
  title: PropTypes.string.isRequired,
  markdown: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};
