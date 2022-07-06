import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactApp from './pages/ContactApp';

/* styling */
import './style.css'

createRoot(document.getElementById('root')).render(<ContactApp />)