import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./contextApi/authContext";
import { CarHeaderProvider } from './contextApi/carContaxt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <CarHeaderProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </CarHeaderProvider>
  </AuthProvider>
);


