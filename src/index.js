import {ChakraProvider} from '@chakra-ui/react';
import './styles/animation.css';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from 'react-cookie';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import theme from "./theme";

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <CookiesProvider>
              <ChakraProvider resetCSS={true} theme={theme}>
                <App />
              </ChakraProvider>
          </CookiesProvider>
      </QueryClientProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
