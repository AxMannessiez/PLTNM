import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterOutlet from "./router/RouterOutlet";

function App() {
  return (
    <BrowserRouter>
        <RouterOutlet/>
    </BrowserRouter>
  );
}

export default App;
