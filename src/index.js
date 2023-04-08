import React, { StrictMode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Auth } from '@supabase/auth-ui-react';
import * as ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import supabase from './auth/supabaseClient';
import theme from './theme';

import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/source-sans-pro/200.css';
import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';

const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <Auth.UserContextProvider supabaseClient={supabase}>
          <App />
        </Auth.UserContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
