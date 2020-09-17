import React from 'react';
import Count from './Count';
import CountContainer from './CountContainer';
import CountHooks from './CountHooks';
import CountHooksContainer from './CountHooksContainer';
import Hello from './Hello';
import HelloContainer from './HelloContainer';
import HelloHooks from './HelloHooks';
import HelloHooksContainer from './HelloHooksContainer';

function App() {
  return (
    <div className="App">
      <Hello name="Sans Redux" />
      <HelloContainer />
      <HelloHooks />
      <HelloHooksContainer />
      <Count increment={1000} />
      <CountContainer />
      <CountHooks />
      <CountHooksContainer />
    </div>
  );
}

export default App;
