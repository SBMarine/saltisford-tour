import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StopPage from './pages/StopPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/stop/:slug" element={<StopPage />} />
        <Route path="*" element={<div style={{ padding: '2rem' }}><h2>Tour Stop Not Found</h2></div>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
