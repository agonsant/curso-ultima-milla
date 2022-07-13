import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import UserContextProvider from './store/context/userContextProvider';
import ContextProvider from './store/context/ContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    </ContextProvider>
  </React.StrictMode>
);
reportWebVitals();
