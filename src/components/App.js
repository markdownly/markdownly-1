import React from 'react';
import Document from '../containers/Document';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Router>
        <Switch>
          <Route path="/" component={Document} />
          <Route path="/markdown/:index" component={Document} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
