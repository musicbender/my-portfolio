import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './components/app';
import './style/main.scss';

const Index = () => (
  <HashRouter basename="/">
    <App />
  </HashRouter>
);

render(<Index />, document.getElementById('app'));

if (process.env.NODE_ENV === 'development') {
  module.hot.accept();
}
