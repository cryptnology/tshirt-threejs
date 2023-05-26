import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Providers } from './components';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <div className="bg-light dark:bg-dark text-dark dark:text-light transition">
        <App />
      </div>
    </Providers>
  </React.StrictMode>,
);
