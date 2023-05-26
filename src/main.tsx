import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Header, Providers } from './components';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <div className="px-5 2xl:px-64 xl:px-44 lg:px-20 md:px-16 sm:px-10">
        <Header />
        <App />
      </div>
    </Providers>
  </React.StrictMode>,
);
