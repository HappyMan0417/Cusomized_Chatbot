import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Chat from './component/Chat.jsx';
import Sidenav from './component/Sidenav.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Chat />
    <Sidenav />
  </React.StrictMode>
);
