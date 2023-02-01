import React from 'react';
import './App.css';
import InputRange, { RangeVariant } from './components/input-range/InputRange';
import VisualRange from './components/VisualRange';

function App() {
  return (
    <div className="App">
      <VisualRange/>
      <div className='range__containeer'>
          <InputRange variant={RangeVariant.storage}/>
          <InputRange variant={RangeVariant.transfer}/>
      </div>
    </div>
  );
}

export default App;
