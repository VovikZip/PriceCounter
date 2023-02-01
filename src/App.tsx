import React from 'react';

import './App.css'
import InputRange, { RangeVariant } from './components/input-range/InputRange';
import VisualRange from './components/VisualRange';
import { useAppDispatch } from './hooks/redux';
import { valSlice } from './store/reducers/ValReducer';

function App() {

  const dispatch = useAppDispatch()
  const {setSmallScreen} = valSlice.actions

  const isNarrowScreen = window.matchMedia("(max-width: 800px)").matches;
  
  console.log(isNarrowScreen)

  dispatch(setSmallScreen(isNarrowScreen))

  return (
    <div className="App" style={{width: `${isNarrowScreen ? '25rem' : '80rem'}`}}>
      
        {isNarrowScreen 
          ?
            <div className="range__content_mobile" >
              <div className='range__containeer__mobile'>
                <InputRange variant={RangeVariant.storage}/>
                <InputRange variant={RangeVariant.transfer}/>
              </div>
              <VisualRange/>
            </div>
          :
            <div className="range__content" >
              <VisualRange/>
              <div className='range__containeer'>
                <InputRange variant={RangeVariant.storage}/>
                <InputRange variant={RangeVariant.transfer}/>
              </div>
            </div>
        }
    </div>
  );
}

export default App;
