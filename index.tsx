import React from 'react';
import ReactDOM from 'react-dom/client';
import HolographicControlSurface from './HolographicControlSurface';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Target container 'root' not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className="w-full h-full flex items-center justify-center bg-black overflow-hidden">
      <HolographicControlSurface />
    </div>
  </React.StrictMode>
);