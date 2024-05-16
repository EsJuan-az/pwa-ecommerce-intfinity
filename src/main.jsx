import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { UIProvider } from './context/ui.context';
import { AuthProvider } from './context/auth.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <UIProvider>
          <App />
        </UIProvider>
      </AuthProvider>
  </React.StrictMode>,
);
