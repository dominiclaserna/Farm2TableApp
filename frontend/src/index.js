import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ShoppingCartProvider } from './components/Orders/ShoppingCart';
import { AuthProvider } from './components/Authorization/AuthContext';

// Use createRoot to render the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // or createRoot(container) if using TypeScript

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </AuthProvider>
  </React.StrictMode>
);
