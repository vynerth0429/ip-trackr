import React from 'react';

import MapComp from './components/MapComp';

import IMGHeader from './assets/images/pattern-bg.png';

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div
        className="relative max-h-72 h-72 flex-none"
        style={{
          backgroundImage: "url(" + IMGHeader + ")",
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 288px'
        }}>

        <div className="absolute z-9999 -bottom-24 left-0 right-0 flex flex-col items-center">
          <div className="text-center">
            <span className="text-3xl font-bold text-white">
              IP Address Tracker
            </span>
          </div>

          <div className="container h-48 w-full bg-white rounded-3xl">
            <span>Test</span>
          </div>
        </div>
      </div>

      <div className="flex-auto">
        <MapComp />
      </div>
    </div>
  );
}

export default App;
