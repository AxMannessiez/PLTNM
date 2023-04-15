import React, { Suspense } from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppHeader from './components/AppHeader';
import RouterOutlet from './router/RouterOutlet';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <AppHeader />
        <RouterOutlet />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
