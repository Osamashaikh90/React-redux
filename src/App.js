import React from 'react'
import './App.css'
import {incNumber,decNumber} from './actions';
import { useSelector, useDispatch } from "react-redux";
import {mulNumber,divNumber} from './actions';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState1 = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    
      <>
      <div className="mainContainer">
      <button type='button' onClick={() => dispatch(decNumber())}>-</button>
        <p className='value'>{ myState}</p>
      <button type='button' onClick={() => dispatch(incNumber(5))}>+</button>
      </div>
      
      <div className="mainContainer1">
      <button type='button' onClick={() => dispatch(divNumber(5))}>/</button>
        <p className='value'>{ myState1}</p>
      <button type='button' onClick={() => dispatch(mulNumber(5))}>*</button>
    </div>
  
    </>
  )
}

export default App
