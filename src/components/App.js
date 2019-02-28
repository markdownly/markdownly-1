import React from 'react';
import Document from '../containers/Document';
import SaveMarkdown from './markdown/SaveMarkdown';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <SaveMarkdown />
      <Document />
    </>
  );
}
