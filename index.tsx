import React from 'react';
import ReactDOM from 'react-dom/client';
import ClinicalHolographicControlSurface from './ClinicalHolographicControlSurface';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Target container 'root' not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className="w-full h-full flex items-center justify-center bg-[#050505] overflow-hidden">
      <ClinicalHolographicControlSurface />
    </div>
  </React.StrictMode>
);