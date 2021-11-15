import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PostContextProvider } from './Context/PostContext';

ReactDOM.render(
  <PostContextProvider>
    <App />
  </PostContextProvider>,
  document.getElementById('root'),
);
