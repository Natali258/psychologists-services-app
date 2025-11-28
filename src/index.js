import React from 'react';
import ReactDOM from 'react-dom/client';
import "react-toastify/dist/ReactToastify.css";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter basename="/psychologists-services-app">
      <App />
      <ToastContainer position="top-right"
      autoClose={2500}
      hideProgressBar
      newestOnTop
      pauseOnFocusLoss={false}
      draggable={false}
      theme="colored" />
    </BrowserRouter>
  </React.StrictMode>
);


