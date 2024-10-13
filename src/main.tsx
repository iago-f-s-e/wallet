import './index.css';
import { StrictMode } from 'react';
import { Container, createRoot } from 'react-dom/client';

import App from '@/app/page.tsx';

createRoot(document.getElementById('root') as Container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
