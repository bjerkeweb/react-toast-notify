/** @jsx jsx */
import React from 'react';
import ReactDOM from 'react-dom';
import { jsx } from '@emotion/react';

const rootElement = document.getElementById('root');

const App = () => (
  <div>
    <h1>React Toast Notify</h1>
  </div>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
