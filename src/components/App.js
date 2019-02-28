import React from 'react';
import Document from '../containers/Document';
import SaveForm from './markdown/SaveForm';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <SaveForm />
      <Document />
    </>
  );
}
