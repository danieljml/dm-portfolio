import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Theme from './Theme.tsx';
import 'material-icons/iconfont/outlined.css';
import './index.css';
import { ProviderDarkMode } from './context/darkMode.tsx';
import { createGlobalStyle } from 'styled-components';
import './i18n/config.ts';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => (theme?.colors?.backgroundBody)};
    color: ${({ theme }) => (theme?.colors?.primary)};
  }
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderDarkMode>
      <Theme>
        <GlobalStyle />
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </Theme>
    </ProviderDarkMode>
  </React.StrictMode>
);
