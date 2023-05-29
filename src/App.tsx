import React from 'react';
import OptionChainWidget from './widgets/OptionChainWidget';
import TradingViewWidget from './components/TradingViewWidget';

function App() {
  return (
    <div className="App flex bg-black  justify-around">
      <OptionChainWidget />
      <TradingViewWidget />

    </div>
  );
}

export default App;
