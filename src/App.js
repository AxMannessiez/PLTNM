import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import RouterOutlet from './router/RouterOutlet';

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <RouterOutlet />
    </BrowserRouter>
  );
}

export default App;
