import React from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import './styles/index.css';

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
