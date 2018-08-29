import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import './style/main.scss';

const Index = () => (
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
);

render(<Index />, document.getElementById('app'));
