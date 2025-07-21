import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CallbackPage from './components/CallbackPage';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/callback" element={<CallbackPage />} />
      </Routes>
    </div>
  );
}

export default App;