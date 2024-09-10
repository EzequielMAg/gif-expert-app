import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import { GifExpertApp2 } from './GifExpertApp2';
import './styles.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertApp2 />
  </StrictMode>
)
