import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { ToastProvider } from '../../index';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  rootElement
);
