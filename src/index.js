import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter basename="/psychologists-services-app">
      {/* <ToastContainer autoClose={3000} style={{ zIndex: 99999 }} /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>

  // <React.StrictMode>
  //   <BrowserRouter basename="/psychologists-services-app">
  //   <Provider store={store}>
  //       <PersistGate loading={null} persistor={persistor}>
  //         <App />
  //       </PersistGate>
  //     </Provider>
  //   </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
