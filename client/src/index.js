// In your index.js or App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './components/AuthContext';  // Make sure this path is correct
import App from './App';
import './index.css'; // Or wherever your main application component is defined

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
