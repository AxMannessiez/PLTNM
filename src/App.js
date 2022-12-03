import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./Router/RouterOutlet";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <BrowserRouter>
        <RouterOutlet/>
    </BrowserRouter>
  );
}

export default App;
